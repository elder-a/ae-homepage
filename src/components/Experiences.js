import mcmaster from './img/mcmaster.jpg';
import opg from './img/opg.jpg';
import adp from './img/adp.jpg';
import '../css/experiances.css';
import CardBox from './CardBox';

function Experiences() {

  const macMasterTitle = "McMaster University";
  const macMasterYears = "2017-2022";
  const macMasterContent = "This is where I went to school for Computer Engineering. McMaster is in Hamilton, Ontario. I learned many different things throughout my time here. I worked on many different projects while at school including making an AI controlled car, my capstone project Laddify and making a hardware-based image compression algorithm.";

  const opgTitle = "Ontario Power Generation";
  const opgYears = "2020-2021";
  const opgContent = "I had the great opportunity of working at OPG on a one-year Co-op. Here I developed software that controlled devices in one of OPG’s nuclear power plants. This software ran on PLCs. I also familiarized myself with technical writing and documentation in this highly regulated field.";

  const adpTitle = "ADP";
  const adpYears = "2022-Onward";
  const adpContent = "I am very grateful to currently work at this great company. I work as part of the team on ADP’s flagship product Work Force Now. The team I work for helps people around the world manage their human capital and pay their employees.";

  return (
    <div className="backGroundExp backGroundSizeExp">
        <div id="expericne Title">
          <div className="blankSpaceExp"></div>
          <h1 className="titleExp">Experiences</h1>
          <div className="blankSpaceExpBottom"></div>
        </div>
        <div className="backColor">
        <CardBox title={adpTitle} years={adpYears} paragraph={adpContent} img={adp} showLink="false" cardType="blankSpace"></CardBox>
        <CardBox title={opgTitle} years={opgYears} paragraph={opgContent} img={opg} showLink="false" cardType="blankSpace"></CardBox>
        <CardBox title={macMasterTitle} years={macMasterYears} paragraph={macMasterContent} img={mcmaster} showLink="false" cardType="blankSpace"></CardBox>
        <div className="blankSpace"></div>
      </div>
    </div>
  );
}

export default Experiences;
