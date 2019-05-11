import React, { Component } from 'react';
import Img from './Img.js';

class ImgContainer extends Component {
  constructor() {
    super()
  }

  render(){
    const BeyCards = this.props.BeyArray.map(bey => <Img key={bey.name} singleBey={bey}/>)
    console.log(BeyCards)
    return (
      <div>
        <h1>Big Bey </h1>
        {BeyCards}
      </div>
    )
  }
}

export default ImgContainer
