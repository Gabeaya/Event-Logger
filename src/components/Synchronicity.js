import React from "react";
import PropTypes from "prop-types";

function Synchronicity(props){
  return(
    <React.Fragment>
      <h3><b>{props.title}</b></h3>
      <h3><em>{props.date}</em></h3>
      <p><b>Event:</b> {props.occurence}</p>
      <p><b>Meaning:</b> {props.interpretation}</p>
      <hr/>
    </React.Fragment>
  );
}
Synchronicity.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  occurence: PropTypes.string.isRequired,
  interpretation: PropTypes.string.isRequired
}
export default Synchronicity;