import laddify from './img/laddify.png';
import button from './img/button.jpg';
import laser from './img/laser.jpg';
import '../css/projects.css';
import CardBox from './CardBox';

function Projects() {

  const laddTitle = "Laddify";
  const laddYears = "2021-2022";
  const laddContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies efficitur euismod. Donec leo ex, sagittis eu erat non, vestibulum rutrum mi. Nullam suscipit ornare ligula, accumsan fringilla urna tempor at. Donec molestie metus turpis, ut venenatis risus laoreet eu. Ut at tortor ac dolor sollicitudin elementum ac sed sem.";

  const buttonTitle = "Digital Button";
  const buttonYears = "2021";
  const buttonContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies efficitur euismod. Donec leo ex, sagittis eu erat non, vestibulum rutrum mi. Nullam suscipit ornare ligula, accumsan fringilla urna tempor at. Donec molestie metus turpis, ut venenatis risus laoreet eu. Ut at tortor ac dolor sollicitudin elementum ac sed sem.";

  const laserTitle = "Laser Projector";
  const laserYears ="2017";
  const laserContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies efficitur euismod. Donec leo ex, sagittis eu erat non, vestibulum rutrum mi. Nullam suscipit ornare ligula, accumsan fringilla urna tempor at. Donec molestie metus turpis, ut venenatis risus laoreet eu. Ut at tortor ac dolor sollicitudin elementum ac sed sem.";

  return (
    <div className="backGroundPro backGroundSizeExpPro">
      <div className="backColorPro">
        <CardBox title={laddTitle} years={laddYears} paragraph={laddContent} img={laddify} cardType="blankSpacePro"></CardBox>
        <CardBox title={buttonTitle} years={buttonYears} paragraph={buttonContent} img={button} cardType="blankSpacePro"></CardBox>
        <CardBox title={laserTitle} years={laserYears} paragraph={laserContent} img={laser} cardType="blankSpacePro"></CardBox>
        <div className="blankSpacePro"></div>
      </div>
      <div className="blankSpacePro"></div>
    </div>
  );
}

export default Projects;
