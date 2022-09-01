import React from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap'
import Wimg from '../img/Welcome.jpg'

const Welcome = () =>{
    return(
        <Container fluid>
            <Row>
                <Col>
                    <img
                        className='w-100'
                        src={ Wimg }
                    />
                </Col>
                <Col>
                Try
                </Col>
            </Row>    
        </Container>
    )
}
export default Welcome