import React from "react";
import Ticket from "./Ticket";

const masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Help.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Child component isn\'t rendering.'
  }
];

function TicketList(){
  return (
    <React.Fragment>
      <hr/>
      <div className="ticket-list">
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={index}/>
      )}
      </div>
      <input className= "tweet-button" placeholder="Tweet"/>
      <button className= "tweet-button">Tweet</button>
    </React.Fragment>
  );
}

export default TicketList;