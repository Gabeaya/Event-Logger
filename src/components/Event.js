import React from "react";

function Event(props){
  return(
    <React.Fragment>
      <h3><b>{props.title}</b></h3>
      <h3><em>{props.date}</em></h3>
      <p>{props.synchronicity}</p>
      <p>{props.interpretation}</p>
      <hr/>
    </React.Fragment>
  );
}
Event.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  synchronicity: PropTypes.string,
  interpretation: PropTypes.string
}
export default Event;