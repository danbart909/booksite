import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery';

export default class NavMobile extends Component {

  render() {

    // $(document).ready(function () {

    //   $('#nav-mobile-bot-clickable-area-1').click(function() {
    //     $('#nav-mobile-menu').css('display', 'flex')
    //     $('#nav-mobile-bot-clickable-area-2').css('display', 'flex')
    //     $('#nav-mobile-bot-clickable-area-1').css('display', 'none')
    //   })

    //   $('#nav-mobile-bot-clickable-area-2, #sidebar-home, #sidebar-wheretobuy, #sidebar-abouttheauthor, #sidebar-excerpt').click(function() {
    //     $('#nav-mobile-menu').css('display', 'none')
    //     $('#nav-mobile-bot-clickable-area-2').css('display', 'none')
    //     $('#nav-mobile-bot-clickable-area-1').css('display', 'flex')
    //   })

    // })

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
            { !this.props.menu && <div id='nav-mobile-bot-clickable-area-1' onClick={(e) => {this.props.openMenu(e)}}>
              <div className='nav-mobile-menu-span'>
                <span>MENU</span>
              </div>
              <div className='nav-mobile-menu-icon'>
                <i className="fas fa-bars" id='bars'/>
              </div>
            </div> }
            { this.props.menu && <div id='nav-mobile-bot-clickable-area-2'>
              <div className='nav-mobile-menu-span'>
                <span>MENU</span>
              </div>
              <div className='nav-mobile-menu-icon'>
                <i className="fas fa-times" id='times'/>
              </div>
            </div> }
          </div>
          { this.props.menu && <div id='nav-mobile-menu'>
            <div id='sidebar'>
              <NavLink to='/' exact={true} activeClassName='nav-home-active' className='nav-home'>
                <span>HOME</span>
              </NavLink>
              <NavLink to='/WhereToBuy' activeClassName='nav-wheretobuy-active'  className='nav-wheretobuy'>
                <span>WHERE TO BUY</span>
              </NavLink>
              <NavLink to='/AboutTheAuthor' activeClassName='nav-abouttheauthor-active'  className='nav-abouttheauthor'>
                <span>ABOUT THE AUTHOR</span>
              </NavLink>
              <NavLink to='/Excerpt' activeClassName='nav-excerpt-active' className='nav-excerpt'>
                <span>EXCERPT</span>
              </NavLink>
            </div>
          </div> }
        </div>
      </>
    )
  }
}