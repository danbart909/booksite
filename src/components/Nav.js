import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import { Link } from 'react-scroll'

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

{/*

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

<Link
  to='home'
  exact={true}
  activeClassName='is-active'
  id='nav-home'
  spy={true}
  smooth={true}
>
  Home
</Link>
<Link
  to='wheretobuy-container'
  activeClassName='is-active'
  id='nav-wheretobuy'
>
  Where to Buy
</Link>
<Link
  to='abouttheauthor-container'
  activeClassName='is-active'
  id='nav-abouttheauthor'
>
  About the Author
</Link>
<Link
  to='contact-container'
  activeClassName='is-active'
  id='nav-contact'
>
  Contact
</Link>

<div id='nav-home'>
  <a href='#contact-container'>Home</a>
</div>
<div id='nav-wheretobuy'>
  Where to Buy
</div>
<div id='nav-abouttheauthor'>
  About the Author
</div>
<div id='nav-contact'>
  Contact
</div>

*/}