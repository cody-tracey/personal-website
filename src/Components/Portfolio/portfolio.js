import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from './cards';
import { PROJECTS } from './projects';

const Portfolio = () => {
    return (
        <div className="drop-small">
            <Container className="main">
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