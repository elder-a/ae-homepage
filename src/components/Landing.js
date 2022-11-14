import "../css/base.css";

function Landing() {
  return (
    <div className="backGround backGroundSize ">
      <div className="blankSpaceLand"></div>
      <div className="backGroundColorLand">
        <p className="textHiLocation typewriter">
          Hey there,
        </p>
      </div>

      <div className="backGroundColorLand">
      <p className="textAndrewLocation">
        I'm Andrew Elder.
      </p>
      <p className="textTitleLocation">
        An Application Developer in Toronto, Canada.
      </p>
      </div>
    </div>
  );
}

export default Landing;
