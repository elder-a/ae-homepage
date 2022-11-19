import { useEffect } from 'react';
import { getActvity, getActvityPromise} from '../services/BoredService';

function DailyUpdates() {

  let actualActivity;


  useEffect(() => {
    getActvityPromise().then((bored) => {
      actualActivity = bored.activity;
      console.log("Bored in location"); 
      console.log(actualActivity);
    });
  }, []);


  return (
    <div>
        <p>Are you bored then... {actualActivity}</p>
    </div>
  );
}

export default DailyUpdates;
