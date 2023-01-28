import React, { Component } from 'react'
import circleloader from '../circleloader.gif'
export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={circleloader}  style={{height:"150px"}}alt="loading"/>
      </div>
    )
  }
}

export default Loading
