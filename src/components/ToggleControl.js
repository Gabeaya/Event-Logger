import React from 'react';
import Form from './Form';
import SynchronicityList from './SynchronicityList';
import Detail from './Detail';
import EditForm from '.EditForm';


class ToggleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainSynchronicityList: [],
      formVisibleOnPage: false,
      selectedSynchronicity: null,
      editing: false
    };

  }

  handleClick = () => {
    if (this.state.selectedSynchronicity != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSynchronicity: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingSynchronicityToList = (newSynchronicity) => {
    const newMainSynchronicityList = this.state.mainSynchronicityList.concat(newSynchronicity);
    this.setState({
      mainSynchronicityList: newMainSynchronicityList, 
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedSynchronicity = (id) => {
    const selectedSynchronicity = this.state.mainSynchronicityList.filter(synchronicity => synchronicity.id === id)[0];
    this.setState({selectedSynchronicity: selectedSynchronicity});
  }

  handleDeletingSynchronicity = (id) => {
    const newMainSynchronicityList = this.state.mainSynchronicityList.filter(synchronicity => synchronicity.id !== id);
    this.setState({
      mainSynchronicityList: newMainSynchronicityList,
      selectedSynchronicity: null
    });
  }

  handeEditClick = () => {
    console.log("handleEditClickReach!");
    this.setState({editing:true});
  }

  handleEditingInList = (synchronicityToEdit) => {
    const editedMainList = this.state.mainSynchronicityList
      .filter(synchronicity => synchronicity.id !== this.state.selectedSynchronicity)
      .concat(synchronicityToEdit);
    this.setState({
      mainSynchronicityList: editedMainList,
      editing: false,
      selectedSynchronicity: null
    });
    
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {
      currentlyVisibleState = <EditForm synchronicity = {this.state.selectedSynchronicity} onEditTicket = {this.handleEditingInList} />
      buttonText= "return to list";
    } else if (this.state.selectedSynchronicity != null) {
      currentlyVisibleState = <Detail synchronicity = {this.state.selectedSynchronicity} onClickingDelete = {this.handleDeletingSynchronicity} onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to list";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <Form onFormCreation={this.handleAddingSynchronicityToList} />;
      buttonText = "Return To List";
    }else {
      currentlyVisibleState = <SynchronicityList synchronicityList={this.state.mainSynchronicityList} onSynchronicitySelection={this.handleChangingSelectedSynchronicity} />;
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
