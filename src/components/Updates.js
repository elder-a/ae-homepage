import Bored from './Bored';
import '../css/updates.css'; 
import Joke from './Joke';

function Updates() {
  return (
    <div className="backColorUp">
      <div className="backColorUp backGroundUp backGroundSizeUp">
        <div className="backColorUp" id="Update Title">
          <div className="blankSpaceUp"></div>
          <h1 className="titleUp">Updates</h1>
          <div className="blankSpaceUpBottom"></div>
          <div className="blankSpaceUp"></div>
        </div>
        <div className="localCard">
        <Bored></Bored>
        </div>
        <div className="blankSpaceUp"></div>
        <div className="backColorUp">
        <div className="localCard">
        <Joke></Joke>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Updates;
