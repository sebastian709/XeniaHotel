import React from 'react'
import { Carousel } from 'react-bootstrap';
import Hello from '../img/Hello.jpg'
import Hi from '../img/Hi.png'
import Hotel from '../img/Hotel.png'
import '../App.css'

function Background() {
  return (
    <>
      <Carousel className=''>
        <Carousel.Item>
          <img
              className="d-block w-100 cover index-back"
              src={ Hotel }
              alt="First slide"
              fluid
          />
          <div className='dark-overlay'></div>
          <Carousel.Caption className='centering'>
                <h3 className='font-size'>Your new home in Clark</h3>
                <p>Found in the modern city of Clark, one of the leading business and tourism hubs in the Philippines, Xenia Hotel offers cozy, air-conditioned rooms, with delicious buffet breakfast and use of gym and swimming pool.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 cover"
            src={ Hello }
            alt="Second slide"
            fluid
          />
          <div className='dark-overlay'></div>
          <Carousel.Caption className='centering'>
                <h3 className='font-size'>With a warm and inviting ambience</h3>
                <p>The 200 air-conditioned rooms of Xenia Hotel in Clark, Pampanga are guaranteed to make you feel as if you’ve never left home. All are spacious and cozy: perfect for solo travelers, couples, families on vacation, and people on business trips. 

</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 cover"
            src={ Hi }
            alt="Third slide"
            fluid
          />
          <div className='dark-overlay'></div>
          <Carousel.Caption className='centering'>
                <h3 className='font-size'>Second home of those who seek for the best</h3>
                <p>Philippines has to offer, whether that may be in the field of business, leisure, or culture. Our guests’ purpose for visiting may wildly differ but one thing remains constant: our commitment to world-class hospitality services.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </>
  );
}

export default Background;
