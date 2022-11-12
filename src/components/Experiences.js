import mcmaster from './img/mcmaster.jpg'
import '../css/experiances.css';

function Experiences() {
  return (
    <div className='backGroundExp backGroundSizeExp'>
      <div>
        <h1 className='textFont'>McMaster University</h1>
        <div>
        <img src={mcmaster} alt="mcmaster"></img>
        <p className='textFont' >This is where I went to University.</p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
