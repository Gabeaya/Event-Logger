import React from "react";
import Synchronicity from "./Synchronicity";



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