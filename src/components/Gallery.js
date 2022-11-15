import CardRow from "./CardRow";
import '../css/gallery.css';

function Gallery() {


  
  return (
    <div className="backGroundGal backGroundSizeGal">
      <div id="Gallery Title">
        <div className="blankSpaceGallery"></div>
        <h1 className="titleGal">Gallery</h1>
        <div className="blankSpaceGalleryBottom"></div>
        <div className="blankSpaceGallery"></div>
      </div>
      
      <CardRow rows={2} ></CardRow>
    </div>
  );
}

export default Gallery;
