import React from "react";
import PropTypes from "prop-types";

function Detail(props){
  const { synchronicity } = props;

  return (
    <React.Fragment>
      <h1>Detail</h1>
      <h3>{synchronicity.title} on {synchronicity.date}</h3>
      <p>What happened: {synchronicity.occurance}</p>
      <p>Interpretation: {synchronicity.interpretation}</p>
      <hr/>
    </React.Fragment>
  );
}
Detail.propTypes = {
  synchronicity: PropTypes.object
};
export default Detail;