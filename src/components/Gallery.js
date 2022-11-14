import CardImg from "./CardImg";
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

      <div className="standardBoxOver">
        <CardImg />
        <CardImg />
        <CardImg />
      </div>
      
    </div>
  );
}

export default Gallery;
