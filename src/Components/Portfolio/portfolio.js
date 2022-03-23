import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from './cards';
import Navi from '../Navi/navi';
import { PROJECTS } from './projects';

const Portfolio = () => {
    return (
        <Container className='container-fluid'>
            <Navi />
            <div className="main">
                <Row className='text-center mt-5'><h1>PORTFOLIO</h1></Row>
                <Row>
                    {PROJECTS.map((i) => {
                        return (
                            <Col xs={12} md={4}>
                                <Cards title={i.title} pic={i.pic} github={i.github} deployed={i.deployed} key={i.title} />
                            </Col>
                        )
                    })
                    }
                </Row>
            </div>
        </Container>

    );
};

export default Portfolio;