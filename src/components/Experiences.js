import mcmaster from './img/mcmaster.jpg';
import opg from './img/opg.jpg';
import adp from './img/adp.jpg';
import '../css/experiances.css';
import CardBox from './CardBox';

function Experiences() {

  const macMasterTitle = "McMaster University";
  const macMasterYears = "2017-2022";
  const macMasterContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies efficitur euismod. Donec leo ex, sagittis eu erat non, vestibulum rutrum mi. Nullam suscipit ornare ligula, accumsan fringilla urna tempor at. Donec molestie metus turpis, ut venenatis risus laoreet eu. Ut at tortor ac dolor sollicitudin elementum ac sed sem.";

  const opgTitle = "Ontario Power Generation";
  const opgYears = "2020-2021";
  const opgContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies efficitur euismod. Donec leo ex, sagittis eu erat non, vestibulum rutrum mi. Nullam suscipit ornare ligula, accumsan fringilla urna tempor at. Donec molestie metus turpis, ut venenatis risus laoreet eu. Ut at tortor ac dolor sollicitudin elementum ac sed sem.";

  const adpTitle = "ADP";
  const adpYears = "2022-Onward";
  const adpContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies efficitur euismod. Donec leo ex, sagittis eu erat non, vestibulum rutrum mi. Nullam suscipit ornare ligula, accumsan fringilla urna tempor at. Donec molestie metus turpis, ut venenatis risus laoreet eu. Ut at tortor ac dolor sollicitudin elementum ac sed sem.";

  return (
    <div className="backGroundExp backGroundSizeExp">
      <div className="backColor">
        <CardBox title={macMasterTitle} years={macMasterYears} paragraph={macMasterContent} img={mcmaster} cardType="blankSpace"></CardBox>
        <CardBox title={opgTitle} years={opgYears} paragraph={opgContent} img={opg} cardType="blankSpace"></CardBox>
        <CardBox title={adpTitle} years={adpYears} paragraph={adpContent} img={adp} cardType="blankSpace"></CardBox>
        <div className="blankSpace"></div>
      </div>
    </div>
  );
}

export default Experiences;
