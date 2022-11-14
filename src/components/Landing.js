import "../css/base.css";
import { useState, useEffect } from 'react';

function Landing() {

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



  return (
    <div className="backGround backGroundSize ">
      <div className="blankSpaceLand"></div>
      <div className="backGroundColorLand">
        { isMobile ===false && 
          <p className="textHiLocation typewriter"> Hey there, </p>
        }
        { isMobile ===true && 
          <p className="textHiLocation typewriter"> Hi </p>
        }
      </div>

      <div className="backGroundColorLand">
      <p className="textAndrewLocation">
        I'm Andrew Elder.
      </p>
      <p className="textTitleLocation">
        An Application Developer in Toronto, Canada.
      </p>
      </div>
    </div>
  );
}

export default Landing;
