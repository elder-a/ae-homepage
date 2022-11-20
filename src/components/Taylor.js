import { useEffect, useRef } from 'react';
import { getTaylorPromise } from '../services/TaylorService';
import React from 'react';
import '../css/updates.css'; 

function Taylor() {

  let taylorSong =  useRef();
  let taylorLyrics =  useRef();

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  
  useEffect(() => {
    getTaylorPromise().then((taylor) => {
      taylorSong.current = taylor.song;
      taylorLyrics.current = taylor.quote;
      forceUpdate();
    });
  }, []);

  //NOT Triggering a re render of the page was the issue :O
  return (
    <div>
        <h2>You should be lisenting to...{taylorSong.current} by Taylor Swift.</h2>
    </div>
  );
}

export default Taylor;
