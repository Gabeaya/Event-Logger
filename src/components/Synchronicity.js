import React from "react";

function Synchronicity(props){
  return(
    <React.Fragment>
      <h3><b>{props.title}</b></h3>
      <h3><em>{props.date}</em></h3>
      <p>{props.occurence}</p>
      <p>{props.interpretation}</p>
      <hr/>
    </React.Fragment>
  );
}
Event.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.instanceOf(Date),
  occurence: PropTypes.string.isRequired,
  interpretation: PropTypes.string.isRequired
}
export default Synchronicity;