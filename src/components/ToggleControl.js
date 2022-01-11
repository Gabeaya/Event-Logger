import React from 'react';
import Form from './Form';
import SynchronicityList from './SynchronicityList';

class ToggleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainSynchronicityList: [],
      formVisibleOnPage: false,
      selectedSynchronicity: null
    };

  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingSynchronicityToList = (newSynchronicity) => {
    const newMainSynchronicityList = this.state.mainSynchronicityList.concat(newSynchronicity);
    this.setState({
      mainSynchronicityList: newMainSynchronicityList, 
      formVisibleOnPage: false
    });
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <Form onFormCreation={this.handleAddingSynchronicityToList} />;
      buttonText = "Return To List";
    }else {
      currentlyVisibleState = <SynchronicityList synchronicityList={this.state.mainSynchronicityList}/>;
      buttonText = "Add Another";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default ToggleControl;
