import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'



const Landing = () => {
    return (
        <div className="drop">
            <Container className="main">
                <Row>
                    <Col xl={6} lg={8} md={8} sm={12} className='offset-xl-3 offset-lg-2 offset-md-2 offset-sm-0'>
                        <img src={logo} alt='Cody Tracey Logo' className='img-fluid' />
                    </Col>
                </Row>
                <Row className='text-center'>
                <Col xl={6} lg={8} md={8} sm={12} className='offset-xl-3 offset-lg-2 offset-md-2 offset-sm-0'>
                        <h1 className='tagline'>FROM IDEAS TO REALITY</h1>
                    </Col>
                </Row>
                <Row className='text-center'>
                    <Col>
                        <Link to='/contact' className='links'>Contact</Link>
                    </Col>
                    <Col>
                        <Link to="/portfolio" className='links'>Portfolio</Link>
                    </Col>
                    <Col>
                        <Link to='/bio' className='links'>Bio</Link>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Landing;