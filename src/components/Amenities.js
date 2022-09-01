import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import Monitor from '../img/monitor-white.png'
import Bottle from '../img/plastic-bottle-white.png'
import Wifi from '../img/wifi-white.png'
import Tel from '../img/telephone-white.png'


const Amenities = () =>{
    return(
        <>
            <Container className='navcolor mb-5' fluid>
                <Row>
                    <Col className='title-amenities my-4' sm>
                        <h1 className='text-center text-light'> Room Amenities </h1>
                        <p className='text-center text-light text-ame-body'>
                        Book any of our 200 air-conditioned rooms that feature verandas  on selected categories with stunning views. All rooms are provided with  blackout curtains for your privacy and these array of amenities:
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm className='my-5'>
                        <img
                            className='d-block m-auto xenia-icons'
                            src={ Monitor }
                            alt=' '
                        />
                        <h5 className='text-center text-light'>LCD TV with satellite/cable channels</h5>
                    </Col>
                    <Col sm className='my-5'>
                        <img 
                            className='d-block m-auto xenia-icons'
                            src= { Bottle }
                            alt=' '
                        />
                        <h5 className='text-center text-light'>Complimentary bottled water</h5>
                    </Col>
                    <Col sm className='my-5'>
                        <img 
                            className='d-block m-auto xenia-icons'
                            src= { Wifi }
                            alt=' '
                        />
                        <h5 className='text-center text-light'>Free wireless Internet access</h5>
                    </Col>
                    <Col sm className='my-5'>
                        <img 
                            className='d-block m-auto xenia-icons'
                            src= { Tel }
                            alt=' '
                        />
                        <h5 className='text-center text-light'>Telephone</h5>
                    </Col>
                </Row>
            </Container>    
        </>
    )
}
export default Amenities