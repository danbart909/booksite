import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div id='nav-container'>
        <div id='nav-top'>
          <span id='nav-title'>Born Again Man Whore</span>
          <span id='nav-author'>Marc Special</span>
        </div>
        <div id='nav-bot'>
          <div id='nav-bot-clickable-area'>
            <NavLink to='/' exact={true} activeClassName='is-active' id='nav-home'>
              Home
            </NavLink>
            <NavLink to='/WhereToBuy' activeClassName='is-active' id='nav-wheretobuy'>
              Where to Buy
            </NavLink>
            <NavLink to='/AboutTheAuthor' activeClassName='is-active' id='nav-abouttheauthor'>
              About the Author
            </NavLink>
            <NavLink to='/Contact' activeClassName='is-active' id='nav-contact'>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}