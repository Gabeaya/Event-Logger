import React from "react";
import PropTypes from "prop-types";

function Detail(props){
  const { synchronicity, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Detail</h1>
      <h3>{synchronicity.title} on {synchronicity.date}</h3>
      <h3>Number of Occurences: {synchronicity.repeats}</h3>
      <p>What happened: {synchronicity.occurence}</p>
      <p>Interpretation: {synchronicity.interpretation}</p>

      <button onClick={() => onClickingDelete(synchronicity.id)}>Close Event</button>
      <button onClick={ props.onClickingEdit}>Update </button>
      <hr/>
    </React.Fragment>
  );
}
Detail.propTypes = {
  synchronicity: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};
export default Detail;