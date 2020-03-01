import React from 'react';
import Axios from 'axios';
import { useHistory, useParams } from "react-router-dom";

export default function Search({addImages, url, setUrl}){
    let history = useHistory();
    let { tag, page } = useParams();
    page = 1;
    const voice = window.annyang;
    const headers = {
        Authorization: 'Client-ID mh2cguZ3xIMtgldAof0OJKVIkTs8XiipaW8jO_Z1CuE'
    };

    const commands = {
        'search *tag images': searchImages,
        'next page': next,
        'previous page': prev
    }

    async function searchImages(keyword){
        const requestUrl = `${url}${keyword}&page=${page}`;
        const results = await Axios(requestUrl, { headers });
        tag = keyword;
        setUrl(requestUrl);
        addImages(results.data.results);
        history.push(`/photos/${tag}/${page}`);
    }

    async function next(){
        page++;
        const requestUrl = `${url}${tag}&page=${page}`;
        const results = await Axios(requestUrl, { headers });
        addImages(results.data.results);
        history.push(`/voice-image/photos/${tag}/${page}`);
    }

    async function prev(){
        page--;
        const requestUrl = `${url}${tag}&page=${page}`;
        const results = await Axios(requestUrl, { headers });
        addImages(results.data.results);
        history.push(`/voice-image/photos/${tag}/${page}`);
    }

    function searchImage() {
        voice.addCommands(commands);
        voice.start();
    }

    return (
        <div className="search-container">
            <h1>Search Images by voice commands</h1>
            <button className="search" onClick={() => searchImage()}> Press and say "Search kitties images" </button>
        </div>
    );
}