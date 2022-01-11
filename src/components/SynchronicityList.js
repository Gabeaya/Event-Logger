import React from "react";
import Synchronicity from "./Synchronicity";
import PropTypes from "prop-types";


function SynchronicityList(props){
  return (
    
    <React.Fragment>
      <hr />
      {props.mainSynchronicityList.map((synchronicity, index) => 
        <Synchronicity title={synchronicity.title}
        date={synchronicity.date}
        occurence={synchronicity.occurence}
        interpretation={synchronicity.interpretation}
        key={index}/>
      )}
    </React.Fragment>
  );
}

SynchronicityList.propTypes = {
  synchronicityList: PropTypes.array
};

export default SynchronicityList;