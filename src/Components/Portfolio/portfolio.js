import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from './cards';
import Navi from '../Navi/navi';
import { PROJECTS } from './projects';

const Portfolio = () => {
    return (
        <div className="">
        <Navi />
            <Container className="main mt-5">
                <Row className='text-center'><h1>PROJECTS</h1></Row>
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

            </Container>
        </div>
    );
};

export default Portfolio;