import '../css/scrapple.css'; 
import React from 'react';
import { useState, useEffect } from 'react';
import { validateInput, letterMaker, validateAgainstLetter } from '../services/validaitonHelpers';
import { getWordPromise } from '../services/wordService';

function Scrapple() {

  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState();
  const [genNumbers, setGenNumbers] = useState();
  const [validWord, setValidWord] = useState(false);

  useEffect(()=>{
    generateNumbers();
  },[])  
    

  function handleInputChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit() {
    if(!validateInput(message)){
      console.log('Invalid Input');
      setShowError(true);
      return false;
    }
    getWordPromise(message).then((defProm) => {
      console.log(defProm);
      if(defProm.title === 'No Definitions Found'){
        console.log('Bad word no definition');
        setShowError(true);
      } else if(defProm[0].meanings){
        setShowError(false);
        if(validateAgainstLetter(message, genNumbers)){
          setValidWord(true);
        } else {
          setShowError(true);
          setValidWord(false);
        }
      }
    });
  }

  function generateNumbers(){
    setGenNumbers(letterMaker(8));
    console.log(genNumbers);
  }

  return (
    <div className="backGroundScrap">
      <div className="backGroundScrap backGroundSizeUpScrap">
        <div id="Update Title">
          <div className="blankSpaceScrap"></div>
          <h1 className="titleScrap">Word Set</h1>
          <div className="blankSpaceScrapBottom"></div>
          <div className="blankSpaceScrap"></div>
          <h2>In this game you try to guess the best words given the letters below to make three words. Compete with your friends to see who wins the day!</h2>
          <p>
          (1 point)-A, E, I, O, U, L, N, S, T, R
          </p>
          <p>
          (2 points)-D, G
          </p>
          <p>
          (3 points)-B, C, M, P
          </p>
          <p>
          (4 points)-F, H, V, W, Y
          </p>
          <p>
          (5 points)-K
          </p>
          <p>
          (8 points)- J, X
          </p>
          <p>
          (10 points)-Q, Z
          </p>
          <h2>Your Letters are: {genNumbers}</h2>
          <input type='text' name='title' onChange={handleInputChange}></input>
          <button type="button" onClick={handleSubmit}> Submit!</button>
          { showError && 
            <h3>Error Bad Input!</h3> 
          }
          { validWord && 
            <h3>Your Word was Awesome!</h3> 
          }
        </div>
      </div>
    </div>
  );
}

export default Scrapple;