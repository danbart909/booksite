import React, { Component } from 'react'
// import home from '../images/home.jpg'


export default class WhereToBuy extends Component {
  render() {
    return (
      <div id='wheretobuy-container' name='wheretobuy'>
        <div id='wtb-title'>
          <span>Purchase Options</span>
        </div>
        <div id='wtb-box'>
          <div id='wtb-amazon' className='gridbox-container'>
            <div id='wtb-amazon-left' className='gridbox'>
              <span>Buy from Amazon</span>
            </div>
            <div id='wtb-amazon-right' className='gridbox'>
              <span>*img*</span>
            </div>
          </div>
          <div id='wtb-bn' className='gridbox-container'>
            <div id='wtb-bn-left' className='gridbox'>
              <span>Buy from Barnes & Noble</span>
            </div>
            <div id='wtb-bn-right' className='gridbox'>
              <span>*img*</span>
            </div>
          </div>
          <div id='wtb-anything' className='gridbox-container'>
            <div id='wtb-anything-left' className='gridbox'>
              <span>Buy from The Black Web</span>
            </div>
            <div id='wtb-anything-right' className='gridbox'>
              <span>*img*</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}