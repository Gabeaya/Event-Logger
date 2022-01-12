import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='title'
          placeholder='Name your event' />
        <input
          type='text'
          name='date'
          placeholder='00/00/00' />
        <textarea
          name='occurance'
          placeholder='What happened' />
        <textarea
          name='Interpretation'
          placeholder='What does it mean to you' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;