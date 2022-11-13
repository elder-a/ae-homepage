import laddify from './img/laddify.png';
import button from './img/button.jpg';
import laser from './img/laser.jpg';
import '../css/projects.css';


function Projects() {
  return (
    <div className="backGroundPro backGroundSizeExpPro">
      <div className="blankSpacePro"></div>
      <div className="standardBox">
        <img className="imgBoxSize" src={laddify} alt="ldd"></img>
        <div>
          <h1 className="textFont boxHeadline">Laddify</h1>
          <p className="textFont" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies efficitur euismod. Donec leo ex, sagittis eu erat non, vestibulum rutrum mi. Nullam suscipit ornare ligula, accumsan fringilla urna tempor at. Donec molestie metus turpis, ut venenatis risus laoreet eu. Ut at tortor ac dolor sollicitudin elementum ac sed sem.</p>
        </div>
      </div>


      <div className="backColorPro">
      <div className="blankSpacePro"></div>
      <div className="standardBox">
        <img className="imgBoxSize" src={button} alt="digital button"></img>
        <div>
          <h1 className="textFont boxHeadline">Digital button </h1>
          <p className="textFont" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies efficitur euismod. Donec leo ex, sagittis eu erat non, vestibulum rutrum mi. Nullam suscipit ornare ligula, accumsan fringilla urna tempor at. Donec molestie metus turpis, ut venenatis risus laoreet eu. Ut at tortor ac dolor sollicitudin elementum ac sed sem.</p>
        </div>
      </div>

      <div className="blankSpacePro"></div>
      <div className="standardBox">
        <img className="imgBoxSize" src={laser} alt="laser projector"></img>
        <div>
          <h1 className="textFont boxHeadline">Laser Projector</h1>
          <p className="textFont" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies efficitur euismod. Donec leo ex, sagittis eu erat non, vestibulum rutrum mi. Nullam suscipit ornare ligula, accumsan fringilla urna tempor at. Donec molestie metus turpis, ut venenatis risus laoreet eu. Ut at tortor ac dolor sollicitudin elementum ac sed sem.</p>
        </div>
      </div>
      </div>
      <div className="blankSpacePro"></div>
    </div>
  );
}

export default Projects;
