import React from 'react';
import { Container, } from 'react-bootstrap';
import Cards from './cards';
import { PROJECTS } from './projects';

const Portfolio = () => {
    return (
        <div className="drop-small">
            <Container className="main">
                {PROJECTS.map((i) => {
                    return (
                        <Cards title={i.title} pic={i.pic} github={i.github} deployed={i.deployed}  key={i.title}/>
                    )
                })
                }
            </Container>
        </div>
    );
};

export default Portfolio;