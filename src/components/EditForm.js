import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditForm (props) {
  return (
    <React.Fragment>
      <ReusableForm 
        buttonText="Update" />
    </React.Fragment>
  );
}
EditForm.propTypes = {
  synchronicity: Proptypes.object,
  onEditTicket: PropTypes.func
}
export default EditForm;
