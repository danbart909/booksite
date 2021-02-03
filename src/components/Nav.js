import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

export default class Nav extends Component {
  render() {
    return (
      <div id='nav-container'>
        <div id='nav'>
          <div id='nav-1'>
            <span id='nav-title-1'>BORN AGAIN</span>
            <span id='nav-title-2'>MAN-WHORE</span>
          </div>
          <div id='nav-2'>
            <span id='nav-author'>Marc Special</span>
          </div>
          <div id='nav-3'>
            <div id='nav-3-clickable'>
              <Link to='home' spy={true} smooth={true} duration={350} offset={-75} activeClassName='nav-home-active' className='nav-home'>
                <span>HOME</span>
              </Link>
              <Link to='wheretobuy' spy={true} smooth={true} duration={350} offset={-75} activeClassName='nav-wheretobuy-active' className='nav-wheretobuy'>
                <span>WHERE TO BUY</span>
              </Link>
              <Link to='excerpt' spy={true} smooth={true} duration={350} offset={-75} activeClassName='nav-excerpt-active' className='nav-excerpt'>
                <span>EXCERPT</span>
              </Link>
              <Link to='abouttheauthor' spy={true} smooth={true} duration={350} offset={-75} activeClassName='nav-abouttheauthor-active' className='nav-abouttheauthor'>
                <span>ABOUT THE AUTHOR</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



// <div id='nav-3-clickable'>
//   <NavLink to='/' exact={true} activeClassName='nav-home-active' className='nav-home'>
//     <span>HOME</span>
//   </NavLink>
//   <NavLink to='/WhereToBuy' activeClassName='nav-wheretobuy-active' className='nav-wheretobuy'>
//     <span>WHERE TO BUY</span>
//   </NavLink>
//   <NavLink to='/AboutTheAuthor' activeClassName='nav-abouttheauthor-active' className='nav-abouttheauthor'>
//     <span>ABOUT THE AUTHOR</span>
//   </NavLink>
//   <NavLink to='/Excerpt' activeClassName='nav-excerpt-active' className='nav-excerpt'>
//     <span>EXCERPT</span>
//   </NavLink>
// </div>





// <NavLink to='/' exact={true} activeClassName='is-active' id='nav-home'>
//   Home
// </NavLink>
// <NavLink to='/WhereToBuy' activeClassName='is-active' id='nav-wheretobuy'>
//   Where to Buy
// </NavLink>
// <NavLink to='/AboutTheAuthor' activeClassName='is-active' id='nav-abouttheauthor'>
//   About the Author
// </NavLink>
// <NavLink to='/Contact' activeClassName='is-active' id='nav-contact'>
//   Contact
// </NavLink>

// <Link
//   to='home'
//   exact={true}
//   activeClassName='is-active'
//   id='nav-home'
//   spy={true}
//   smooth={true}
// >
//   Home
// </Link>
// <Link
//   to='wheretobuy-container'
//   activeClassName='is-active'
//   id='nav-wheretobuy'
// >
//   Where to Buy
// </Link>
// <Link
//   to='abouttheauthor-container'
//   activeClassName='is-active'
//   id='nav-abouttheauthor'
// >
//   About the Author
// </Link>
// <Link
//   to='contact-container'
//   activeClassName='is-active'
//   id='nav-contact'
// >
//   Contact
// </Link>

// <div id='nav-home'>
//   <a href='#contact-container'>Home</a>
// </div>
// <div id='nav-wheretobuy'>
//   Where to Buy
// </div>
// <div id='nav-abouttheauthor'>
//   About the Author
// </div>
// <div id='nav-contact'>
//   Contact
// </div>
