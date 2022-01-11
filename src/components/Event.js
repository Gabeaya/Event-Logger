import React from "react";

function Event(){
  return(
    <React.Fragment>
      <h3>{title}</h3>
      <h3>{date}</h3>
      <p>{synchronicity}</p>
      <p>{interpretation}</p>
      <hr/>
    </React.Fragment>
  );
}

export default Event;