import React from "react";
import PropTypes from "prop-types";

function Synchronicity(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenSynchronicityClicked(props.id)}>
        <h3><b>{props.title}</b></h3>
        <h3><em>{props.date}</em></h3>
        <h3>Number of occurences: {props.repeats} </h3>
        <p><b>Event:</b> {props.occurence}</p>
        <p><b>Meaning:</b> {props.interpretation}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}
Synchronicity.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  repeats: PropTypes.number.isRequired,
  occurence: PropTypes.string.isRequired,
  interpretation: PropTypes.string.isRequired
}
export default Synchronicity;