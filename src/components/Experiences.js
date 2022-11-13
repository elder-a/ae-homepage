import mcmaster from './img/mcmaster.jpg';
import opg from './img/opg.jpg';
import adp from './img/adp.jpg';
import '../css/experiances.css';

function Experiences() {
  return (
    <div className="backGroundExp backGroundSizeExp">
      <div className="blankSpace"></div>
      <div className="standardBox">
        <img className="imgBoxSize" src={mcmaster} alt="mcmaster"></img>
        <div>
          <h1 className="textFont boxHeadline">McMaster University</h1>
          <p className="textFont" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies efficitur euismod. Donec leo ex, sagittis eu erat non, vestibulum rutrum mi. Nullam suscipit ornare ligula, accumsan fringilla urna tempor at. Donec molestie metus turpis, ut venenatis risus laoreet eu. Ut at tortor ac dolor sollicitudin elementum ac sed sem.</p>
        </div>
      </div>


      <div className="backColor">
      <div className="blankSpace"></div>
      <div className="standardBox">
        <img className="imgBoxSize" src={opg} alt="opg"></img>
        <div>
          <h1 className="textFont boxHeadline">Ontario Power Generation</h1>
          <p className="textFont" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies efficitur euismod. Donec leo ex, sagittis eu erat non, vestibulum rutrum mi. Nullam suscipit ornare ligula, accumsan fringilla urna tempor at. Donec molestie metus turpis, ut venenatis risus laoreet eu. Ut at tortor ac dolor sollicitudin elementum ac sed sem.</p>
        </div>
      </div>

      <div className="blankSpace"></div>
      <div className="standardBox">
        <img className="imgBoxSize" src={adp} alt="adp"></img>
        <div>
          <h1 className="textFont boxHeadline">Automatic Data Processing</h1>
          <p className="textFont" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies efficitur euismod. Donec leo ex, sagittis eu erat non, vestibulum rutrum mi. Nullam suscipit ornare ligula, accumsan fringilla urna tempor at. Donec molestie metus turpis, ut venenatis risus laoreet eu. Ut at tortor ac dolor sollicitudin elementum ac sed sem.</p>
        </div>
      </div>
      </div>
      <div className="blankSpace"></div>
    </div>
  );
}

export default Experiences;
