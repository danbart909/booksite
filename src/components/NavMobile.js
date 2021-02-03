import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

export default class NavMobile extends Component {

  render() {

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
              <Link to='home' spy={true} smooth={true} duration={350} activeClassName='nav-home-active' className='nav-home'>
                <span>HOME</span>
              </Link>
              <Link to='wheretobuy' spy={true} smooth={true} duration={350} activeClassName='nav-wheretobuy-active'  className='nav-wheretobuy'>
                <span>WHERE TO BUY</span>
              </Link>
              <Link to='excerpt' spy={true} smooth={true} duration={350} activeClassName='nav-excerpt-active' className='nav-excerpt'>
                <span>EXCERPT</span>
              </Link>
              <Link to='abouttheauthor' spy={true} smooth={true} duration={350} activeClassName='nav-abouttheauthor-active'  className='nav-abouttheauthor'>
                <span>ABOUT THE AUTHOR</span>
              </Link>
            </div>
          </div> }
        </div>
      </>
    )
  }
}