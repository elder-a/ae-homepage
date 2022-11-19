import { useEffect, useRef } from 'react';
import { getActvityPromise} from '../services/BoredService';
import React from 'react';

function DailyUpdates() {

  let actualActivity =  useRef();

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  console.log("render");

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
        <p>Are you bored then... {actualActivity.current}</p>
    </div>
  );
}

export default DailyUpdates;
