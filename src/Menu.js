import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Commands({commands, setCommands}){

  const show = () => setCommands(!commands);
  return(
    commands ? 
      <li className="commands">
        <span onClick={() => show()} style={{position: 'relative'}} className="commands">Available voice commands</span>
        <ul>
          <li>Search *tag images (ex: search dogs images)</li>
          <li>Next page</li>
          <li>Previous page</li>
          <li>Go back</li>
          <li>Stop listen</li>
        </ul>
      </li> : 
      <li onClick={() => show()} style={{cursor: 'pointer'}}>Available voice commands</li>
  );
}

export default function Menu({logo, isListening, setIsListening}){
  const [ commands, setCommands ] = useState(false);


  return (
    <div className="menu">
      <div className="logo">
        <Link to={'/voice-image/'}>{logo}</Link>
      </div>
      <nav>
        <ul>
          <Commands commands={commands} setCommands={setCommands} />

        </ul>
      </nav>
    </div>
  );
}