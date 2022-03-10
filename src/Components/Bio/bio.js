import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from '../../assets/profile.jpg'

const Bio = () => {
    return (
        <div className="drop-small">
            <Container className="main">
                <Row className='text-center'>
                    <u><h1>About Me</h1></u>
                </Row>
                <Row>
                    <Col>
                        <img src={profile}  alt='Cody Tracey - Developer Extraordinaire' className='profile-pic'/>
                        <p className='bio'> My name is Cody Tracey, and thank you for taking the time to view my
                        portfolio. I am originally from the Chicagoland area but moved to
                        Nasvhille 4 years ago after graduating college. I attended Carthage
                        College in Kenosha, WI where I double majored in Classical Studies and
                        Religious Studies and was a part of a number of professional and
                        social organizations such as: Theta Alpha Kappa, Eta Sigma Phi, and
                        Model United Nations.
                        <br />
                        After graduating I worked as a project manager at Card Marketing Services (CMS), while attendingthe Vanderbilt/Trilogy Education Full Stack Web
                        Developing Bootcamp, upon completetion I obtained a job working as a coding instructor as part of the <a href="perseverenow.org" tagret="_blank">Persevere Program</a>.
                        <br />
                        I am proficient in: HTML5, CSS3, JavaScript, jQuery, Bootstrap, NodeJS, MySQL, MongoDB, MySQL, Express, ReactJS.
                        </p>
                        </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Bio;