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

  handleClick = () => {
    if (this.state.name && this.state.date && this.state.time && this.state.number) {
      let body = {
        name: JSON.stringify(this.state.name),
        date: JSON.stringify(this.state.date),
        time: JSON.stringify(this.state.time),
        number: JSON.parse(this.state.number)
      }
      this.postData(body);
    } else {
      alert('Oops! Looks like you forgot a field');
    }
  }

  postData = (body) => {
    let options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
       'Content-Type': 'application/json'
      }
    };
    fetch('http://localhost:8000/api/v1/reservations', options)
    .then(res => res.json())
    .then(data => this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    }))
    .catch(err => console.log(err))
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
          <Nav
            {...this.state}
            change={this.handleChange}
            click={this.handleClick}
          />
        </div>
        <div className='resy-container'>
          {cards}
        </div>
      </div>
    )
  }
}

export default App;
