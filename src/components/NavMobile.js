import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery';

export default class NavMobile extends Component {
  render() {

    $(document).ready(function () {

      $('#bars').click(function() {
        $('#nav-mobile-menu').css('display', 'flex')
        $('#times').css('display', 'inline')
        $('#bars').css('display', 'none')
      })

      $('#times').click(function() {
        $('#nav-mobile-menu').css('display', 'none')
        $('#times').css('display', 'none')
        $('#bars').css('display', 'inline')
      })

    })

    return (
      <>
        <div id='nav-mobile-container'>
          <div id='nav-mobile-top'>
            <span id='nav-mobile-title'>Born Again Man Whore</span>
            <span id='nav-mobile-author'>Marc Special</span>
          </div>
          <div id='nav-mobile-bot'>
            <div id='nav-mobile-bot-clickable-area'>
              <span>Menu</span>
              <i className="fas fa-bars" id='bars'></i>
              <i className="fas fa-times" id='times'></i>
            </div>
          </div>
          <div id='nav-mobile-menu'>
            <div id='sidebar'>
              <NavLink to='/' exact={true} activeClassName='sidebar-is-active' id='sidebar-home'>
                Home
              </NavLink>
              <NavLink to='/WhereToBuy' activeClassName='sidebar-is-active' id='sidebar-wheretobuy'>
                Where to Buy
              </NavLink>
              <NavLink to='/AboutTheAuthor' activeClassName='sidebar-is-active' id='sidebar-abouttheauthor'>
                About the Author
              </NavLink>
              <NavLink to='/Contact' activeClassName='sidebar-is-active' id='sidebar-contact'>
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </>
    )
  }
}