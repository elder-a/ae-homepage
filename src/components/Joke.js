import { useEffect, useRef } from 'react';
import { getJokePromise } from '../services/JokeService';
import React from 'react';
import '../css/updates.css'; 

function Joke() {

  let jokeSetup =  useRef();
  let jokeDel =  useRef();


  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  
  //will have to detect if there is joke or delivery 
  useEffect(() => {
    getJokePromise().then((joke) => {
      if(joke.setup){
        jokeSetup.current = joke.setup;
        jokeDel.current = joke.delivery;
      } else {
        jokeSetup.current = joke.joke;
      }
      console.log(joke);
      forceUpdate();
    });
  }, []);

  //NOT Triggering a re render of the page was the issue :O
  return (
    <div>
        <h2>{jokeSetup.current} {jokeDel.current}</h2>
    </div>
  );
}

export default Joke;
