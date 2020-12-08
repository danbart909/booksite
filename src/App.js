import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav.js';
import NavMobile from './components/NavMobile.js';
import Home from './components/Home.js';
import WhereToBuy from './components/WhereToBuy.js'
import AboutTheAuthor from './components/AboutTheAuthor.js'
import Contact from './components/Contact.js'
import $ from 'jquery';

export default class App extends Component {
  render() {

    $(document).ready(function () {

      $('#overlord-body').click(function() {
        $('#nav-mobile-menu').css('display', 'none')
        $('#times').css('display', 'none')
        $('#bars').css('display', 'inline')
      })

    })

    return (
      <div id='overlord'>
        <Nav/>
        <NavMobile/>
        <div id='overlord-body'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/WhereToBuy' component={WhereToBuy} />
            <Route path='/AboutTheAuthor' component={AboutTheAuthor} />
            <Route path='/Contact' component={Contact} />
          </Switch>
        </div>
        <div id='overlord-footer'>
          <span>footer</span>
        </div>
      </div>
    )
  }
}