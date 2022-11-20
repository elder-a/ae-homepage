import CardRow from "./CardRow";
import '../css/gallery.css';

function Gallery() {

  const imageSrcs1 = [
    { source: 1 },
    { source: 2 },
    { source: 3 },
  ];
  const imageSrcs2 = [
    { source: 4 },
    { source: 5 },
    { source: 6 },
  ];
  const imageSrcs3 = [
    { source: 7 },
    { source: 8 },
    { source: 9 },
  ];
  const imageSrcs4 = [
    { source: 10 },
    { source: 11 },
    { source: 12 },
  ];
  const imageSrcs5 = [
    { source: 13 },
    { source: 14 },
    { source: 15 },
  ];
  const imageSrcs6 = [
    { source: 16 },
    { source: 17 },
    { source: 18 },
  ];
  const imageSrcs7 = [
    { source: 19 },
    { source: 20 },
    { source: 21 },
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
