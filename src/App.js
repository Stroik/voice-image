import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from './Menu';
import Search from './Search';
import Results from './Results';

function App() {

  const [ images, setImages ] = useState([]);
  const [ url, setUrl ] = useState('https://api.unsplash.com/search/photos/?query=');

  const voice = window.annyang;

  voice.addCommands({'stop listen': stopListen});

  function stopListen(){
    voice.abort();
  }
  
  return (
    <Router>
      <div className="container">
        <Menu logo={'VoiceImage'} />
        <Switch>
          <Route path="/voice-image/photos/:tag/:page" children={<Results images={images} url={url} setImages={setImages}/>} />
          <Route path="/voice-image/" children={<Search addImages={ setImages } url={url} setUrl={setUrl} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
