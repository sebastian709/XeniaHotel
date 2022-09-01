import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Wimg from '../img/Welcome.jpg'
import '../App.css'

const Welcome = () =>{
    return(
        <Container fluid>
            <Row>
                <Col className='my-5 text-center'>
                    <Container className='intro'>
                        <Row>
                            <Col>
                                <h1 className='navcolor text-light'>Welcome to Xenia Hotel</h1>
                                <p>Xenia is the second home of those who seek for the best the Philippines has to offer, whether that may be in the field of business, leisure, or culture. Our guests’ purpose for visiting may wildly differ but one thing remains constant: our commitment to world-class hospitality services</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col className='my-5' sm>
                    <img
                        className='w-100 welimg'
                        src={ Wimg }
                        alt= "Welcome Logo"
                    />
                </Col>
            </Row>    
        </Container>
    )
}
export default Welcome