import CardRow from "./CardRow";
import '../css/gallery.css';
import CIJW9412 from './img/gallery-img/CIJW9412.JPG';
import DSC_0166 from './img/gallery-img/DSC_0166.jpeg';
import DSC_0270 from './img/gallery-img/DSC_0270.jpg';
import DSC_0273 from './img/gallery-img/DSC_0273.jpg';
import DSC_0301 from './img/gallery-img/DSC_0301.jpg';
import DSC_0302 from './img/gallery-img/DSC_0302.jpg';

import DSC_0311 from './img/gallery-img/DSC_0311.jpg';
import DSC_0320 from './img/gallery-img/DSC_0320.jpeg';
import DSC_0328 from './img/gallery-img/DSC_0328.jpeg';
import DSC_0361 from './img/gallery-img/DSC_0361.jpeg';
import DSC_0370 from './img/gallery-img/DSC_0370.jpeg';
import IMG_1167 from './img/gallery-img/IMG_1167.JPEG';

import IMG_5366 from './img/gallery-img/IMG_5366.JPG';
import IMG_5409 from './img/gallery-img/IMG_5409.JPG';
import IMG_5472 from './img/gallery-img/IMG_5472.JPG';
import IMG_5495 from './img/gallery-img/IMG_5495.JPG';
import IMG_5509 from './img/gallery-img/IMG_5509.JPG'; //switch 
import IMG_5544 from './img/gallery-img/IMG_5544.JPG';

import IMG_5617 from './img/gallery-img/IMG_5617.JPG'; //switch
import IMG_5613 from './img/gallery-img/IMG_5613.JPG'; 
import IMG_5619 from './img/gallery-img/IMG_5619.JPG';

function Gallery() {

  const imageSrcs1 = [
    { source: CIJW9412 },
    { source: DSC_0166 },
    { source: DSC_0270 },
  ];
  const imageSrcs2 = [
    { source: DSC_0273 },
    { source: DSC_0301 },
    { source: DSC_0302 },
  ];
  const imageSrcs3 = [
    { source: DSC_0311 },
    { source: DSC_0320 },
    { source: DSC_0328 },
  ];
  const imageSrcs4 = [
    { source: DSC_0361 },
    { source: DSC_0370 },
    { source: IMG_1167 },
  ];
  const imageSrcs5 = [
    { source: IMG_5366 },
    { source: IMG_5409 },
    { source: IMG_5472 },
  ];
  const imageSrcs6 = [
    { source: IMG_5495 },
    { source: IMG_5509 },
    { source: IMG_5544 },
  ];
  const imageSrcs7 = [
    { source: IMG_5617 },
    { source: IMG_5613 },
    { source: IMG_5619 },
  ];


  return (
    <div className="backGroundGal backGroundSizeGal">
      <div id="Gallery Title">
        <div className="blankSpaceGallery"></div>
        <h1 className="titleGal">Gallery</h1>
        <div className="blankSpaceGalleryBottom"></div>
        <div className="blankSpaceGallery"></div>
      </div>

      <CardRow imageSrc={imageSrcs1} ></CardRow>
      <CardRow imageSrc={imageSrcs2} ></CardRow>
      <CardRow imageSrc={imageSrcs3} ></CardRow>
      <CardRow imageSrc={imageSrcs4} ></CardRow>
      <CardRow imageSrc={imageSrcs5} ></CardRow>
      <CardRow imageSrc={imageSrcs6} ></CardRow>
      <CardRow imageSrc={imageSrcs7} ></CardRow>
    </div>
  );
}

export default Gallery;
