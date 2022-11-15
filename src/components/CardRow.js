import CardImg from "./CardImg";
import '../css/gallery.css';
import laser from './img/laser.jpg';
import button from './img/button.jpg';
import mcmaster from './img/mcmaster.jpg';
import { useState, useEffect } from 'react';

function CardRow(props) {


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

  const imageSrcs = [
    { source: laser},
    { source: button },
    { source: mcmaster},
  ];

  return (
    <div >
      { isMobile===true &&
      <div className="mobileBoxOver">
        <div className="sidePadding"></div>
        {imageSrcs.map((list) => (
          <CardImg source={list.source} />
        ))}
        <div className="sidePadding"></div>
      </div>
      }
      
      { isMobile===false &&
      <div className="standardBoxOver">
        <div className="sidePadding"></div>
        {imageSrcs.map((list) => (
          <CardImg source={list.source} />
        ))}
        <div className="sidePadding"></div>
      </div>
      }
    </div>
  );
}

export default CardRow;