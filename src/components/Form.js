import React from "react";
import { v4 } from 'uuid';
function Form(props){
  function handleFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.date.value);
    console.log(event.target.occurence.value);
    console.log(event.target.interpretation.value)
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

export default Form;