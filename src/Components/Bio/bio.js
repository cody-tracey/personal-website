import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import cody from '../../assets/cody.jpg'
import Navi from '../Navi/navi';

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Bio = () => {
    return (
        <Container >
            <Helmet>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, 
      shrink-to-fit=no"
                />
                <meta name="keyword" content="portfolio, javascript, developer, web developer, freelance,node.js,html5,css"></meta>
                <meta property="og:title" content="Cody Tracey | Fullstack Web Developer" />
                <meta property="og:description" content="Creative MERN fullstack web developer and expert problem solver" />
                <meta property="og:url" content="https://codytracey.com" />
                <meta property="og:type" content="website" />
                <title>Cody's Bio</title>

            </Helmet>
            <Navi />
            <div className="main drop-small p-3">
                <Row className='text-center pb-2'>
                    <h1>ABOUT ME</h1>
                </Row>
                <Row>
                    <Col s={12} md={5} l={4} xl={4}>
                        <img src={cody} alt='Cody Tracey - Developer Extraordinaire' className='img-fluid' id="profile-pic" />
                    </Col>
                    <Col s={12} md={7} l={8} xl={8}>
                        <p className='bio'>
                            Hey there, my name is Cody (he/him)! Thank you for checking out my work! Originally from the Chicagoland area, I attended Carthage College in Kenosha, Wisconsin, where I double majored in Classical Studies and Religious Studies. I moved to Nashville 10 years ago.
                            <br />
                            After graduating I worked as an Account Specialist at Card Market while attending Vanderbilt's Coding Bootcamp. After completing the bootcamp, I taught Web Development for a year as part of the <a href='https://perseverenow.org/' target='_blank' rel="noreferrer" ><b>PERSEVERE</b></a> program. Currently, I work as an IT Project Manager at Card Market, while moonlighting as a budding web developer (MERN).
                            <br />
                            In my spare time, I enjoy spoiling my dogs, lifting weights, crushing my enemies at Magic the Gathering, and playing Dungeons & Dragons.
                        </p>
                        <p>
                            Check me out on social media:
                            <br />
                            <a href='https://github.com/cody-tracey' target='_blank' rel='noreferrer' className='icon' ><FaGithubSquare size={70} /></a>
                            <a href='https://www.linkedin.com/in/cody-tracey/' target='_blank' rel='noreferrer' className='icon' ><FaLinkedin size={70} /></a>
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Bio;