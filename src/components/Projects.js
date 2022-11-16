import laddify from './img/laddify.png';
import button from './img/button.jpg';
import laser from './img/laser.jpg';
import '../css/projects.css';
import CardBox from './CardBox';

function Projects() {

  const laddTitle = "Laddify";
  const laddYears = "2021-2022";
  const laddContent = "This project was a ladder logic code coverage analyzer. This project would take XML files produced from a ladder logic IDE and generate a python equivalent. This allowed the user to test their code for code coverage ensuring their code is safe. This tool was created as many of the programs run on PLCs are safety related.";
  const laddLink = "https://www.youtube.com/watch?v=DhwNgMwrN-s";

  const buttonTitle = "Digital Button";
  const buttonYears = "2021";
  const buttonContent = "This project was a digital button. This project started when I came in contact with the Nokia screen used in the button. This screen is surplus and thus costs around 2 dollars a unit. This button uses a external memory chip and can thus display images and gifs on the screen. ";
  const buttonLink = "https://www.youtube.com/watch?v=WLwEuITXRwc";

  const laserTitle = "Laser Projector";
  const laserYears ="2017";
  const laserContent = "I completed this project way back in high school. This project used two stepper motors, one for the x and the other for the y axis. As well, mirrors were attached to the end to re-direct a laser. This allowed me to program the setup to print simple shapes on a wall due to persistence of vision.";
  const laserLink = "https://www.youtube.com/watch?v=q9UM1HxCXW8";

  return (
    <div className="backGroundPro backGroundSizeExpPro">
      <div id="expericne Title">
        <div className="blankSpacePro"></div>
          <h1 className="titlePro">Projects</h1>
        <div className="blankSpaceProBottom"></div>
      </div>
      <div className="backColorPro">
        <CardBox title={laddTitle} years={laddYears} paragraph={laddContent} img={laddify} videolink={laddLink} showLink="true" cardType="blankSpacePro"></CardBox>
        <CardBox title={buttonTitle} years={buttonYears} paragraph={buttonContent} img={button} videolink={buttonLink} showLink="true" cardType="blankSpacePro"></CardBox>
        <CardBox title={laserTitle} years={laserYears} paragraph={laserContent} img={laser} videolink={laserLink} showLink="true" cardType="blankSpacePro"></CardBox>
        <div className="blankSpacePro"></div>
      </div>
      <div className="blankSpacePro"></div>
    </div>
  );
}

export default Projects;
