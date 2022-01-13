import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditForm (props) {
  const { synchronicity } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEditSynchronicity({title: event.target.title.value, date: event.target.date.value, occurence: event.target.occurence.value, interpretation: event.target.interpretation.value, id: synchronicity.id});
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="Update" />
    </React.Fragment>
  );
}
EditForm.propTypes = {
  synchronicity: PropTypes.object,
  onEditSynchronicity: PropTypes.func
};
export default EditForm;
