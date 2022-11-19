import { useEffect, useRef } from 'react';
import { getActvityPromise} from '../services/BoredService';
import React from 'react';
import '../css/updates.css'; 

function Bored() {

  let actualActivity =  useRef();

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    getActvityPromise().then((bored) => {
      actualActivity.current = bored.activity;
      console.log("Bored in location"); 
      console.log(actualActivity.current);
      forceUpdate();
    });
  }, []);

  //NOT Triggering a re render of the page was the issue :O
  return (
    <div>
        <h2>Are you bored? If you are why dont you...{actualActivity.current}.</h2>
    </div>
  );
}

export default Bored;
