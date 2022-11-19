import Bored from './Bored';
import Cat from './Cat';
import '../css/updates.css'; 

function Updates() {
  return (
    <div>
      <div className="backGroundUp backGroundSizeUp">
        <div id="Update Title">
          <div className="blankSpaceUp"></div>
          <h1 className="titleUp">Updates</h1>
          <div className="blankSpaceUpBottom"></div>
          <div className="blankSpaceUp"></div>
        </div>
        <div className="localCard">
        <Bored></Bored>
        </div>
        <div className="blankSpaceUp"></div>
      </div>
    </div>
  );
}

/*
        <div className="localCard">
        <Cat></Cat>
        </div>
*/
export default Updates;
