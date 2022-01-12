import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditForm (props) {
  const { synchronicity } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({title: event.target.title.value, date: event.target.date.value, occurance: event.target.occurance.value, interpretation: event.target.interpretation.value, id: ticket.id});
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
  synchronicity: Proptypes.object,
  onEditTicket: PropTypes.func
}
export default EditForm;
