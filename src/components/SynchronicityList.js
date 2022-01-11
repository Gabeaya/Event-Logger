import React from "react";
import Synchronicity from "./Synchronicity";

function SynchronicityList(){
  return (
    <React.Fragment>
      <hr />
      {mainSynchronicityList.map((synchronicity) => 
        <Synchronicity title={synchronicity.title}
        date={synchronicity.date}
        occurance={synchronicity.occurence}
        interpretation={synchronicity.interpretation}/>
      )}
    </React.Fragment>
  );
}

export default SynchronicityList;