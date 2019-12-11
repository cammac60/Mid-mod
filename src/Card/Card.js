import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card-wrapper">
      <h4>{props.name}</h4>
      <span id='date'>{props.date}</span>
      <span id='time'>{props.time}</span>
      <span id='guests'>Number of guests: {props.number}</span>
    </div>
  )
}

export default Card;
