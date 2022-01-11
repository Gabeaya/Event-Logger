import React from "react";
import Synchronicity from "./Synchronicity";

const mainSynchronicityList = [
  {
    title: 'Repeating Numbers',
    date: "Feb. 10th 1996",
    occurence: 'I saw 777 three times today and four times yesterday.',
    interpretation: 'I am aligning to my spiritual self.'
  }
];

function SynchronicityList(){
  return (
    
    <React.Fragment>
      <hr />
      {mainSynchronicityList.map((synchronicity, index) => 
        <Synchronicity title={synchronicity.title}
        date={synchronicity.date}
        occurence={synchronicity.occurence}
        interpretation={synchronicity.interpretation}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default SynchronicityList;