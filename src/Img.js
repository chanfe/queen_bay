import React, { Component } from 'react'

class Img extends Component {
  constructor() {
    super()
  }
  render(){
    console.log(this.props.singleBey)
    return (
      <img alt={this.props.singleBey.name} src={this.props.singleBey.img} />
    )

  }
}

export default Img
