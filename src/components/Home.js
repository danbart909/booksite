import React, { Component } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup, ButtonPlay, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import home from '../images/home.jpg'
import comingsoon from '../images/comingsoon.jpg'
import frontandback from '../images/frontandback.jpg'
import multi from '../images/multi.jpg'
import homemobile from '../mobileimages/home-mobile.jpg'
import comingsoonmobile from '../mobileimages/comingsoon-mobile.jpg'
import frontandbackmobile from '../mobileimages/frontandback-mobile.jpg'
import multimobile from '../mobileimages/multi-mobile.jpg'

export default class Body extends Component {
  render() {
    return (
      <>
        <div id='body-container'>
          <CarouselProvider
            isPlaying
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={4}
            isIntrinsicHeight
            id='carousel-container'
            infinite
            touchEnabled
            dragEnabled
            interval={3000}
            hasMasterSpinner
          >
            <ButtonBack id='backbutton'>
              <i class="fas fa-chevron-circle-left" />
            </ButtonBack>
            <DotGroup id='dotgroup' />
            <ButtonPlay childrenPaused={<i class="fas fa-play-circle"/>} childrenPlaying={<i class="fas fa-pause-circle"/>} id='playbutton' />
            <Slider className='slide-container'>
              <Slide className='carousel-slide' index={0}>
                <div className='slide' id='home'>
                  <Image src={home} id='homeimg' alt='homepage' isBgImage={true} />
                </div>
              </Slide>
              <Slide className='carousel-slide' index={1}>
                <div className='slide' id='comingsoon'>
                  <Image src={comingsoon} id='comingsoonimg' alt='comingsoon' isBgImage={true} />
                </div>
              </Slide>
              <Slide className='carousel-slide' index={2}>
                <div className='slide' id='bookjacket'>
                  <Image src={frontandback} id='bookjacketimg' alt='book jacket' isBgImage={true} />
                </div>
              </Slide>
              <Slide className='carousel-slide' index={3}>
                <div className='slide' id='multi'>
                  <Image src={multi} id='multiimg' alt='multi' isBgImage={true} />
                </div>
              </Slide>
            </Slider>
            <ButtonNext id='nextbutton'>
              <i class="fas fa-chevron-circle-right" />
            </ButtonNext>
          </CarouselProvider>
        </div>



        <div id='mbody-container'>
          <CarouselProvider
            isPlaying
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={4}
            isIntrinsicHeight
            id='mcarousel-container'
            infinite
            touchEnabled
            dragEnabled
            interval={3000}
            hasMasterSpinner
          >
            <ButtonBack id='mbackbutton'>
              <i class="fas fa-chevron-circle-left" />
            </ButtonBack>
            <DotGroup id='mdotgroup' />
            <ButtonPlay childrenPaused={<i class="fas fa-play-circle"/>} childrenPlaying={<i class="fas fa-pause-circle"/>} id='mplaybutton' />
            <Slider className='mslide-container'>
              <Slide className='mcarousel-slide' index={0}>
                <div className='mslide' id='mhome'>
                  <Image src={homemobile} id='mhomeimg' alt='homepage' isBgImage={true} />
                </div>
              </Slide>
              <Slide className='mcarousel-slide' index={1}>
                <div className='mslide' id='mcomingsoon'>
                  <Image src={comingsoonmobile} id='mcomingsoonimg' alt='comingsoon' isBgImage={true} />
                </div>
              </Slide>
              <Slide className='mcarousel-slide' index={2}>
                <div className='mslide' id='mbookjacket'>
                  <Image src={frontandbackmobile} id='mbookjacketimg' alt='book jacket' isBgImage={true} />
                </div>
              </Slide>
              <Slide className='mcarousel-slide' index={3}>
                <div className='mslide' id='mmulti'>
                  <Image src={multimobile} id='mmultiimg' alt='multi' isBgImage={true} />
                </div>
              </Slide>
            </Slider>
            <ButtonNext id='mnextbutton'>
              <i class="fas fa-chevron-circle-right" />
            </ButtonNext>
          </CarouselProvider>
        </div>
      </>
    )
  }
}


// childrenPlaying={<i class="far fa-play-circle nodisplay"/>}
// <i class="far fa-play-circle" />
// <img src={home} id='placeholder' alt='placeholder' />







{/* <CarouselProvider
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
  <i class="fas fa-chevron-circle-left"></i>
</ButtonBack>
<DotGroup id='dotgroup'/>
<ButtonPlay id='playbutton'>
  <span>Play</span>
</ButtonPlay>
<Slider className='slide-container'>
  <Slide className='carousel-slide' index={0}>
    {/* <img src={home} id='homeimg' alt='homepage'/> *
    <div className='slide' id='home'>
      <img src={home} id='placeholder' alt='placeholder'/>
    </div>
  </Slide>
  <Slide className='carousel-slide' index={1}>
    {/* <img src={comingsoon} id='comingsoonimg' alt='comingsoon'/> *
    <div className='slide' id='comingsoon'>
    </div>
  </Slide>
  <Slide className='carousel-slide' index={2}>
    {/* <img src={frontandback} id='bookjacketimg' alt='book jacket'/> *
    <div className='slide' id='bookjacket'>
    </div>
  </Slide>
  <Slide className='carousel-slide' index={3}>
    {/* <img src={multi} id='multiimg' alt='multi'/> *
    <div className='slide' id='multi'>
    </div>
  </Slide>
</Slider>
<ButtonNext id='nextbutton'>
  <i class="fas fa-chevron-circle-right"></i>
</ButtonNext>
</CarouselProvider> */}