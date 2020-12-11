import React, { Component } from 'react'
import frontdown from '../images/frontdown.jpg'

export default class AboutTheAuthor extends Component {
  render() {
    return (
      <div id='abouttheauthor-container'>
        <div id='ata-1'>
          <div id='ata-title'>
            <span>About the Author</span>
          </div>
        </div>
        <div id='ata-2'>
          <div id='ata-textbody'>
            <div id='ata-text-1'>
              <span>Marc Twaine is a 15 year veteran of the Human Services, Psychotherapy, Relationship Therapy, and Life Coach professions. He has a Masters Degree and Doctorate in related fields but the true value of his words rest in his personal brand of views, introspect, and wisdom around friendship development, dating dynamics, relationships, and courtship. His talent for sharing his life experiences in a way that integrate common issues that men and women face in life and dating demonstrate how we as individuals face more or less the same group of challenges in seeking connections. scope of insight that bring refreshing, tell it exactly how it is insight to topics... In this book, he pulls on his own missteps and lessons learned from being a womanizer to give women a tutorial on how to interact with, love, and understand men that can be described as Man-Whores.</span>
            </div>
            <div id='ata-text-2'>
              <span>Born Again Man-Whore is an exploration of male sexual development and the psychosocial circumstances that typically turn men into manwhores, whether desire for multiple women is a biological function and organic by product of procreation programming in males or a behavior that falls more into the conscious choice born out of pleasure seeking category. Does men decieving women into sexual interactions via lies and half truths constitute robbing a women of the ability to give truly informed consent constitutes non-consentual sex.</span>
            </div>
          </div>
          <div id='ata-authorpic'>
            {/* <img src={frontdown} alt='the author'></img> */}
          </div>
        </div>
      </div>
    )
  }
}