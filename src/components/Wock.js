import '../css/wock.css'; 
import WockButton from './WockButton';

function Wock() {


  function returnRow() {
    //for (let i = 0; i < 5; i++) {
    return(<div className='localCardwock'><WockButton></WockButton><WockButton></WockButton><WockButton></WockButton><WockButton></WockButton><WockButton></WockButton></div>);
    //}
  }

  const myRow = returnRow();

  return (
    <div className="backColorUp">
      <div className="backGroundUp backGroundSizeUp">
        <div id="Update Title">
          <div className="blankSpaceUp"></div>
          <h1 className="titleUp">Wock</h1>
          <div className="blankSpaceUpBottom"></div>
          <div className="blankSpaceUp"></div>
        </div>
        <div className='wockContainor'>
          <div className='centerwock'>
            {myRow}
            {myRow}
            {myRow}
            {myRow}
            {myRow}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Wock;


//Scrapple 
//Choose a Random set of letters (improved with actual scrabble odds)
//Select a word with the letters
//Compete with your friends to get the word with the highest score

// (1 point)-A, E, I, O, U, L, N, S, T, R
// (2 points)-D, G
// (3 points)-B, C, M, P
// (4 points)-F, H, V, W, Y
// (5 points)-K
// (8 points)- J, X
// (10 points)-Q, Z