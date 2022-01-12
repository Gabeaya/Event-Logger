import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function Form(props){
  function handleFormSubmission(event) {
    event.preventDefault();
    props.onFormCreation({title: event.target.title.value, date: event.target.date.value, occurence: event.target.occurence.value, interpretation: event.target.interpretation.value, id:v4()});
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleFormSubmission}
        buttonText="Add" />
    </React.Fragment>
  );
}

Form.propTypes = {
  onFormCreation: PropTypes.func
};

export default Form;