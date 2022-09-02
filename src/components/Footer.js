import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import Logo from '../img/Logo.png'

const Footer = () =>{
    return(
        <>
            <hr className='navcolor'></hr>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <img 
                            className='xenlogo'
                            src={ Logo }
                            alt='Logo' 
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <p>Copyright © 2022 Xenia Hotel</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul class="line-navbar">
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Footer