import '../css/experiances.css';
import { useState, useEffect } from 'react';
import React from 'react';

let boxShadow = 'standardBox';

function CardBox(props) {

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  console.log("render");

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }


  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;



  //const [isShown, setIsShown] = useState(false);

  function intoBox(e) {
    boxShadow = 'standardBox boxShadow';
    console.log(boxShadow);
    forceUpdate();
  }

    function outBox(e) {
      //boxShadow = 'standardBox';
      forceUpdate();
  }

  return (
    <div>
      <div className={props.cardType}></div>
      <div className={boxShadow} onMouseEnter={intoBox} onMouseLeave={outBox}>
        {isMobile === false &&
          <img className="imgBoxSize" src={props.img} alt="not found"></img>
        }
        <div>
          {isMobile === true &&
            <div>
              <div>
                <img className="imgBoxSizeMobile" src={props.img} alt="not found"></img>
              </div>
              <div>
                  <h1 className="textFont boxHeadline">{props.title}</h1>
              </div>
            </div>

          }

          {isMobile === false &&
            <h1 className="textFont boxHeadline">{props.title}</h1>
          }
          <h2 className=""> {props.years}</h2>
          <p className="textFont" > {props.paragraph} </p>
          {props.showLink === "true" &&
            <p className="textFont" > A video about this project can be found <a href={props.videolink}>here</a>. </p>
          }
        </div>
      </div>
    </div>
  );
}

export default CardBox;
