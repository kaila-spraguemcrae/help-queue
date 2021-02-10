import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTicketList: []
    };
    //use following code to bind 'this' or use arrow notation in below method
    this.handleClick = this.handleClick.bind(this);
  
  }

  //this or following 'handleClick'
  // handleClick = () => {
  //   this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
  // }

  handleClick() {
    this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  handleAddingNewTicketToList = (newTicket) => { const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
  this.setState({
    masterTicketList: newMasterTicketList,
    formVisibleOnPage: false
  });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} />;
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;