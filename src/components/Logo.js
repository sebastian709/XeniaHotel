import React from 'react'
import Logo from '../img/Logo.png'
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'

const head = () =>{
    return(
        <>
            <Container>
                <Row>
                    <Col className='m-auto'>
                        <img
                            className='d-block mx-auto img-fluid xenlogo'
                            src={ Logo }
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default head