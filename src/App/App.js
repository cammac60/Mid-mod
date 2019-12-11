import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card.js';
import Nav from '../Nav/Nav.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({reservations: [...this.state.reservations, data]}))
    .catch(err => console.log(err))
  }

  handleChange = (event) => {
    let id = event.target.id;
    this.setState({[id]: event.target.value})
  }

  render() {
    let cards;
    if (this.state.reservations.length) {
      cards = this.state.reservations[0].map(res => {
        return ( <Card {...res} key={res.id}/> )
      });
    }
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Nav {...this.state} change={this.handleChange}/>
        </div>
        <div className='resy-container'>
          {cards}
        </div>
      </div>
    )
  }
}

export default App;
