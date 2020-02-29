import React from 'react';

export default function Image({ description, altDescription, urls, likes }){
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="front">
                    <img src={urls.small} alt={altDescription} />
                </div>
                <div className="back">
                    <h1>Likes</h1>
                    <p>{likes}</p>
                    <a href={urls.raw} target="_blank" rel="noopener noreferrer" >Full image</a>
                </div>
            </div>
        </div>
    );
}