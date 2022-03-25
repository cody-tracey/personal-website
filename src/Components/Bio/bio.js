import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../../assets/profile.jpg'
import Navi from '../Navi/navi';

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Bio = () => {
    return (
        <Container >
            <Navi />
            <div className="main drop-small p-3">
                <Row className='text-center pb-2'>
                    <h1>ABOUT ME</h1>
                </Row>
                <Row>
                    <Col s={12} md={5} l={4} xl={4}>
                        <img src={profile} alt='Cody Tracey - Developer Extraordinaire' className='img-fluid' id="profile-pic" />
                    </Col>
                    <Col s={12} md={7} l={8} xl={8}>
                        <p className='bio'>
                            Hey, there my name is Cody (he/him) and thank you for checking me out! Originally from the Chicagoland area but moved to Nashville 10 years ago. I attended Carthage College where I double majored in Classical Studies and Religious Studies.
                            <br />
                            Upon graduation I worked in as an Account Specialist at Card Market while attending Vanderbilt's Coding Bootcamp. After which I taught Web Development for a year as part of the <a href='https://perseverenow.org/' target='_blank' rel="noreferrer" ><b>PERSEVERE</b></a> program. Currently now I work as an IT Project Manager at Card Market, while moonlighting as a budding web developer (MERN).
                            <br />
                            In my spare time I enjoy spoiling my dogs, lifting weights, crushing my enemies at Magic the Gathering, and playing Dungeons and Dragons.
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