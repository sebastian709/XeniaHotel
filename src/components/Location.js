import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Map = () =>{
    return(
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className='text-center my-4'>Map Location</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='mb-5'>
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.3265227991888!2d120.5310798146724!3d15.19528708942595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339692a2730eaaf7%3A0xcbecc2708428568b!2sXenia%20Hotel!5e0!3m2!1sen!2sph!4v1662090672554!5m2!1sen!2sph" 
                        width="100%" 
                        height="565" 
                        style={{border:0}} 
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Map