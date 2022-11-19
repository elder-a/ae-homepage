import { useEffect, useRef } from 'react';
import { getCatPromise } from '../services/CatService';
import React from 'react';
import '../css/updates.css'; 

function Cat() {

  let actualActivity =  useRef();

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  
  useEffect(() => {
    console.log("Cat Promice");
    console.log(getCatPromise());
    // getCatPromise().then((cat) => {
    //   console.log("Cat in location"); 
    //   console.log(cat);
    //   forceUpdate();
    // });
  }, []);

  //NOT Triggering a re render of the page was the issue :O
  return (
    <div>
        <h2>Are you bored? If you are why dont you...{actualActivity.current}.</h2>
    </div>
  );
}

export default Cat;
