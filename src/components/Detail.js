import React from "react";
import PropTypes from "prop-types";

function Detail(props){
  const { synchronicity, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Detail</h1>
      <h3>{synchronicity.title} on {synchronicity.date}</h3>
      <p>What happened: {synchronicity.occurance}</p>
      <p>Interpretation: {synchronicity.interpretation}</p>
      <button onClick={() => onClickingDelete(ticket.id)}>Close Event</button>
      <hr/>
    </React.Fragment>
  );
}
Detail.propTypes = {
  synchronicity: PropTypes.object,
  onClickingDelete: PropTypes.func
};
export default Detail;