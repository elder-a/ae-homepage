import '../css/gallery.css';
import { useState, useEffect } from 'react';

function CardImg(props) {

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
    <div className="backColorGal">
      {isMobile === true &&
        <div className="mobileimgBoxGallery">
          <div className="divCenter">
            <img className="standardBoxMiddle" src={props.source} alt="laser"></img>
          </div>
        </div>
      }
      {isMobile === false &&
        <div className="imgBoxGallery">
          <div className="divCenter">
            <img className="standardBoxMiddle" src={props.source} alt="laser"></img>
          </div>
        </div>
      }
    </div>
  );
}

export default CardImg;