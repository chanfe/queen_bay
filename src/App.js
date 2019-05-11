import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImgContainer from './ImgContainer.js';
import Form from './Form.js';




class App extends Component {
  state = {
    BeyArray:[
      {name:"slay 1", img:"https://i.pinimg.com/originals/e7/d8/a8/e7d8a85206a45cd2b852a526c00c7956.jpg"},
      {name:"slay 2", img:"https://media.giphy.com/media/3o6gb7cN7bwDxAbnS8/giphy.gif"}
    ]
  }

  handleSubmit = (obj) => {
    const newBeyArray = [...this.state.BeyArray, obj]
    this.setState({
      BeyArray: newBeyArray
    })
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit}/>
        <ImgContainer BeyArray={this.state.BeyArray}/>
      </div>
    );
  }
}

export default App;
