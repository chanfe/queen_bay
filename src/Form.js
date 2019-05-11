import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
  }
  state ={
    name:"",
    img:""
  }

  changeHandler = event => {
    console.log(event.target)
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  submitHandler = (a) =>{
    a.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.changeHandler}
        />
        <input
          type="text"
          value={this.state.img}
          name="img"
          onChange={this.changeHandler}
        />
        <button>
          Lay the Slay
        </button>
      </form>
    )
  }
}

export default Form
