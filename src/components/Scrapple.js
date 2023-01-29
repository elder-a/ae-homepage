import '../css/scrapple.css'; 
import React from 'react';
import LetterCard from './LetterCard';
import { useState, useEffect } from 'react';
import { validateInput, letterMaker, validateAgainstLetter, wordScorer, totalSum, letterScorer } from '../services/validaitonHelpers';
import { getWordPromise } from '../services/wordService';

let wordCounter = 0;
let totalScoreRes = 0;
function Scrapple() {

  const [showError, setShowError] = useState(false);
  const [showTotal, setShowTotal] = useState(false);
  const [message, setMessage] = useState();
  const [genNumbers, setGenNumbers] = useState();
  const [validWord, setValidWord] = useState(false);
  const [finalWord, setFinalWord] = useState([]);


  useEffect(()=>{
    generateNumbers();
  },[])  
    
  function handleInputChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit() {
    if(wordCounter <= 2){
      if(!validateInput(message, finalWord)){
        console.log('Invalid Input');
        setShowError(true);
        return false;
      }
      getWordPromise(message).then((defProm) => {
        console.log(defProm);
        if(defProm.title === 'No Definitions Found'){
          console.log('Bad word no definition');
          setShowError(true);
          setValidWord(false);
        } else if(defProm[0].meanings){
          if(validateAgainstLetter(message, genNumbers)){
            wordCounter++;
            const wordSet = {word: message, wordScore: wordScorer(message), counter: wordCounter};
            setFinalWord(finalWord => finalWord.concat(wordSet));
            setShowError(false);
            setValidWord(true);

            if(wordCounter >= 3){
              //run the first time message 
              //total  up the score and display 
              totalScoreRes = totalSum(finalWord, wordSet);
              setShowTotal(true);
            }
          } else {
            setShowError(true);
            setValidWord(false);
          }
        }
      });
    }
  }

  function generateNumbers(){
    setGenNumbers(letterMaker(6));
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
          <div className='backColorScrap middleSquish'>
            <h2>In this game you try to guess the best words given the letters below to make three words. Compete with your friends to see who wins the day!</h2>
            <div>
              <div className='scrapContainor'>
              <LetterCard score={letterScorer(genNumbers !== undefined ? genNumbers[0] : null)} letter={genNumbers !== undefined ? genNumbers[0] : null}></LetterCard>
              <LetterCard score={letterScorer(genNumbers !== undefined ? genNumbers[1] : null)} letter={genNumbers !== undefined ? genNumbers[1] : null}></LetterCard>
              <LetterCard score={letterScorer(genNumbers !== undefined ? genNumbers[2] : null)} letter={genNumbers !== undefined ? genNumbers[2] : null}></LetterCard>
              <LetterCard score={letterScorer(genNumbers !== undefined ? genNumbers[3] : null)} letter={genNumbers !== undefined ? genNumbers[3] : null}></LetterCard>
              <LetterCard score={letterScorer(genNumbers !== undefined ? genNumbers[4] : null)} letter={genNumbers !== undefined ? genNumbers[4] : null}></LetterCard>
              <LetterCard score={letterScorer(genNumbers !== undefined ? genNumbers[5] : null)} letter={genNumbers !== undefined ? genNumbers[5] : null}></LetterCard>
              </div>
            </div>
            <div className='scrapContainor backColorScrap'>
              <div className='centerScrap'>
                <input type='text' name='title' onChange={handleInputChange}></input>
                <button type="button" onClick={handleSubmit}> Submit!</button>
                { showError && 
                  <h3>Word Not Found :( </h3> 
                }
                { finalWord.map((singleWord) => (
                  <div>
                    <h3> {singleWord.counter}. Your word was {singleWord.word} and it was worth {singleWord.wordScore} points! </h3>
                  </div>
                ))}
                { showTotal &&
                  <div>
                    <h2> Your combinded score for the day was {totalScoreRes} </h2>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scrapple;