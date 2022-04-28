import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import Cards from './cards';
import Navi from '../Navi/navi';
import { PROJECTS } from './projects';

const Portfolio = () => {
    return (
        <Container className='container-fluid'>
                        <Helmet>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, 
      shrink-to-fit=no"
                />
                <meta name="keyword" content="portfolio, javascript, developer, web developer, freelance,node.js,html5,css"></meta>
                <meta property="og:title" content="Cody Tracey | Fullstack Web Developer" />
                <meta property="og:description" content="Example of numerous projects that Cody has created." />
                <meta property="og:url" content="https://codytracey.com" />
                <meta property="og:type" content="website" />
                <title>Cody's Portfolio</title>

            </Helmet>
            <Navi />
            <div className="main p-3 mt-5">
                <Row className='text-center'><h1>PORTFOLIO</h1></Row>
                <Row>
                    {PROJECTS.map((i) => {
                        return (
                            <Col xs={12} md={4}>
                                <Cards title={i.title} pic={i.pic} github={i.github} deployed={i.deployed} key={i.title} stack={i.stack} description={i.description} alt={i.alt}/>
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