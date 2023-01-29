import '../css/scrapple.css'; 
import React from 'react';
import { useState } from 'react';

function LetterCard(props) {

  return (
    <div className='letterCardTile'>
      <span className='letterTile textFont scrapContainor'>{props.letter}</span>
      <span className='letterNum'> {props.score} </span>
    </div>
  );
}

export default LetterCard;
