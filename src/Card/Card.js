import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card-wrapper">
      <h4>{props.name}</h4>
      <span id='date'>{props.date}</span>
      <span id='time'>{props.time}</span>
      <span id='guests'>Number of guests: {props.number}</span>
      <button onClick={(event) => props.cancel(event)} id={props.id} className="cancel">Cancel</button>
    </div>
  )
}

export default Card;
