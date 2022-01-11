import React from 'react';
import Form from './Form';
import SynchronicityList from './SynchronicityList';

class ToggleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage:false
    };

  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <Form />
    }else {
      currentlyVisibleState = <SynchronicityList />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default ToggleControl;
