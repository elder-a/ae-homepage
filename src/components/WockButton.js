import '../css/wock.css'; 
import React from 'react';
import { useState } from 'react';

function WockButton() {

  const [toggleButton, setToggleButton] = useState(false);
  
  //let toggleButton = false;
  // useEffect(() => {
  //   setToggleButton(false);
  // }, [//whatever is in this array cause this funciton to call on change]);

  function handleSubmit() {
    setToggleButton(toggleButton ? false : true);
    //console.log(toggleButton);
  }

  return (
    <div>
      {toggleButton === false && 
      <button type="button" className='wockButton' onClick={handleSubmit}></button>
      }
      {toggleButton && 
      <button type="button" className='wockButtonChange' onClick={handleSubmit}></button>
      }
    </div>
  );
}

export default WockButton;
