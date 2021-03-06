import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav.js';
import NavMobile from './components/NavMobile.js';
import Home from './components/Home.js';
import WhereToBuy from './components/WhereToBuy.js'
import AboutTheAuthor from './components/AboutTheAuthor.js'
import Excerpt from './components/Excerpt.js'
import Footer from './components/Footer.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false
    }
  }

  openMenu = (e) => {
    e.stopPropagation()
    this.setState({ menu: true })
  }

  closeMenu = () => {
    this.setState({ menu: false })
  }

  render() {

    return (
      <div id='overlord' onClick={this.closeMenu}>
        <Nav/>
        <NavMobile
          menu={this.state.menu}
          openMenu={(e) => this.openMenu(e)}
          closeMenu={this.closeMenu}
        />
        <div id='overlord-body'>
          <Home />
          <WhereToBuy />
          <Excerpt />
          <AboutTheAuthor />
          {/* <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/WhereToBuy' component={WhereToBuy} />
            <Route path='/AboutTheAuthor' component={AboutTheAuthor} />
            <Route path='/Excerpt' component={Excerpt} />
          </Switch> */}
        </div>
        <Footer />
      </div>
    )
  }
}