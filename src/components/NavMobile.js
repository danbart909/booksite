import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery';

export default class NavMobile extends Component {
  render() {

    $(document).ready(function () {

      $('#nav-mobile-bot-clickable-area-1').click(function() {
        $('#nav-mobile-menu').css('display', 'flex')
        $('#nav-mobile-bot-clickable-area-2').css('display', 'flex')
        $('#nav-mobile-bot-clickable-area-1').css('display', 'none')
      })

      $('#nav-mobile-bot-clickable-area-2, #sidebar-home, #sidebar-wheretobuy, #sidebar-abouttheauthor, #sidebar-excerpt').click(function() {
        $('#nav-mobile-menu').css('display', 'none')
        $('#nav-mobile-bot-clickable-area-2').css('display', 'none')
        $('#nav-mobile-bot-clickable-area-1').css('display', 'flex')
      })

    })

    return (
      <>
        <div id='nav-mobile-container'>
          <div id='nav-mobile-top'>
            <div id='nav-mobile-top-1'>
              <span id='nav-mobile-title-1'>BORN AGAIN</span>
              <span id='nav-mobile-title-2'>MAN-WHORE</span>
            </div>
            <div id='nav-mobile-top-2'>
              <span id='nav-mobile-author'>Marc Special</span>
            </div>
          </div>
          <div id='nav-mobile-bot'>
            <div id='nav-mobile-bot-clickable-area-1'>
              <div className='nav-mobile-menu-span'>
                <span>Menu</span>
              </div>
              <div className='nav-mobile-menu-icon'>
                <i className="fas fa-bars" id='bars'></i>
              </div>
            </div>
            <div id='nav-mobile-bot-clickable-area-2'>
              <div className='nav-mobile-menu-span'>
                <span>Menu</span>
              </div>
              <div className='nav-mobile-menu-icon'>
                <i className="fas fa-times" id='times'></i>
              </div>
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
              <NavLink to='/Excerpt' activeClassName='sidebar-is-active' id='sidebar-excerpt'>
              Excerpt
              </NavLink>
            </div>
          </div>
        </div>
      </>
    )
  }
}