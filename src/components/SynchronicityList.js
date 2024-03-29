import React from "react";
import Synchronicity from "./Synchronicity";
import PropTypes from "prop-types";


function SynchronicityList(props){
  return (
    <React.Fragment>
      <hr />
      {props.synchronicityList.map((synchronicity) => 
        <Synchronicity 
        whenSynchronicityClicked = { props.onSynchronicitySelection}
        title={synchronicity.title}
        date={synchronicity.date}
        repeats={synchronicity.repeats}
        occurence={synchronicity.occurence}
        interpretation={synchronicity.interpretation}
        id={synchronicity.id}
        key={synchronicity.id}/>
      )}
    </React.Fragment>
  );
}

SynchronicityList.propTypes = {
  synchronicityList: PropTypes.array,
  onSynchronicitySelection: PropTypes.func
};

export default SynchronicityList;