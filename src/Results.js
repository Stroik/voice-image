import React, { useEffect } from 'react';
import Image from './Image';
import Axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

export default function Results({images, url, setImages}){
    let { tag, page } = useParams();
    let history = useHistory();
    const headers = {
        Authorization: 'Client-ID mh2cguZ3xIMtgldAof0OJKVIkTs8XiipaW8jO_Z1CuE'
    };
    const voice = window.annyang;
    const commands = {
        'go back': goBack
    };
    voice.addCommands(commands);

    function goBack(){
        history.push('/voice-image/');
    }
    useEffect(() => {
        async function fetchImages(){
            const results = await Axios(`${url}${tag}&page=${page}`, { headers });
            setImages(results.data.results);
        }
        if(images.length === 0) fetchImages();
    }, [ url, tag, page, headers, images, setImages ]);

    return(
        <div className="css-grid">
            { images.length === 0 ?
            <h1>No results</h1> :
            images.map(image => <Image description={image.description} altDescription={image.alt_description} urls={image.urls} likes={image.likes} key={image.id} />) }

        </div>
    );
}