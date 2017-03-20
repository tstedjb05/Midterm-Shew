import React, { Component } from 'react';

export class ImgCamera extends Component {
  render() {
    let {img} = this.props;
    return (
      <div className="container" style={{width:"100%"}}>
        <img src={img} style={{borderRadius:"4px"}}/>
      </div>
    );
  }
}

