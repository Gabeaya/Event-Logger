import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function Form(props){
  function handleFormSubmission(event) {
    event.preventDefault();
    props.onFormCreation({title: event.target.title.value, date: event.target.date.value, occurence: event.target.occurence.value, interpretation: event.target.interpretation.value, id:v4()});
  }
  return (
    <React.Fragment>
      <form onSubmit={handleFormSubmission}>
        <input
          type='text'
          name='title'
          placeholder='Name your event' />
        <input
          type='text'
          name='date'
          placeholder='date' />
        <textarea
          name='occurence'
          placeholder='Describe your event.' />
        <textarea
          name='interpretation'
          placeholder='Describe what it means to you.' />
        <button type='submit'>Add Synchronicity!</button>
      </form>
    </React.Fragment>
  );
}

Form.propTypes = {
  onFormCreation: PropTypes.func
};

export default Form;