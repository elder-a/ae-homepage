import { useEffect, useRef } from 'react';
import { getActvityPromise } from '../services/BoredService';
import React from 'react';
import Bored from './Bored';
import '../css/updates.css'; 

function Updates() {



  return (
    <div>
      <div className="backGroundUp backGroundSizeUp">
        <div id="Update Title">
          <div className="blankSpaceUp"></div>
          <h1 className="titleUp">Updates</h1>
          <div className="blankSpaceUpBottom"></div>
          <div className="blankSpaceUp"></div>
        </div>
        <div className="localCard">
        <Bored></Bored>
        </div>
      </div>
    </div>
  );
}

export default Updates;
