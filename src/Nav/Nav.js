import React from 'react';
import './Nav.css';

const Nav = (props) => {
  return (
    <nav className="search-bar">
      <input id="name" placeholder="Name" value={props.name} onChange={(event) => props.change(event)} type="text"></input>
      <input id="date" placeholder="dd/mm" value={props.date} onChange={(event) => props.change(event)} type="text"></input>
      <input id="time" placeholder="hh:mm" value={props.time} onChange={(event) => props.change(event)} type="text"></input>
      <input id="number" placeholder="#" value={props.number} onChange={(event) => props.change(event)} type="number"></input>
      <button className="form-submit" onClick={props.click}>Submit</button>
    </nav>
  )
}

export default Nav;
