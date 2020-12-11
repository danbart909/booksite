import React, { Component } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import home from '../images/home.jpg'
// import comingsoon from '../images/comingsoon.jpg'
// import frontandback from '../images/frontandback.jpg'
// import multi from '../images/multi.jpg'

export default class Body extends Component {
  render() {
    return (
      <div id='body-container'>
        <CarouselProvider
          naturalSlideWidth={125}
          naturalSlideHeight={100}
          totalSlides={4}
          isIntrinsicHeight={true}
          id='carousel-container'
          infinite={true}
          touchEnabled={true}
          dragEnabled={false}
          isPlaying={true}
          interval={3000}
        >
          <ButtonBack id='backbutton'>
            <span>Back</span>
          </ButtonBack>
          <DotGroup id='dotgroup'/>
          <ButtonPlay id='playbutton'>
            <span>Play</span>
          </ButtonPlay>
          <Slider className='slide-container'>
            <Slide className='carousel-slide' index={0}>
              {/* <img src={home} id='homeimg' alt='homepage'/> */}
              <div className='slide' id='home'>
                <img src={home} id='placeholder' alt='placeholder'/>
              </div>
            </Slide>
            <Slide className='carousel-slide' index={1}>
              {/* <img src={comingsoon} id='comingsoonimg' alt='comingsoon'/> */}
              <div className='slide' id='comingsoon'>
              </div>
            </Slide>
            <Slide className='carousel-slide' index={2}>
              {/* <img src={frontandback} id='bookjacketimg' alt='book jacket'/> */}
              <div className='slide' id='bookjacket'>
              </div>
            </Slide>
            <Slide className='carousel-slide' index={3}>
              {/* <img src={multi} id='multiimg' alt='multi'/> */}
              <div className='slide' id='multi'>
              </div>
            </Slide>
          </Slider>
          <ButtonNext id='nextbutton'>
            <span>Next</span>
          </ButtonNext>
        </CarouselProvider>
      </div>
    )
  }
}