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
                    <Col s={12} md={5} l={4} xl={4}>
                        <img src={profile} alt='Cody Tracey - Developer Extraordinaire' className='img-fluid' id="profile-pic" />
                    </Col>
                    <Col s={12} md={7} l={8} xl={8}>
                        <p className='bio'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Fermentum et sollicitudin ac orci phasellus egestas. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Auctor eu augue ut lectus. Nec nam aliquam sem et tortor consequat id porta. Blandit aliquam etiam erat velit scelerisque in. Pretium quam vulputate dignissim suspendisse in. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Venenatis lectus magna fringilla urna. Turpis tincidunt id aliquet risus feugiat in ante. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Mauris cursus mattis molestie a. Amet dictum sit amet justo. Commodo nulla facilisi nullam vehicula ipsum a.
                            <br />
                            Aliquet porttitor lacus luctus accumsan tortor posuere. At consectetur lorem donec massa sapien faucibus. Fringilla ut morbi tincidunt augue interdum. Et molestie ac feugiat sed lectus vestibulum mattis. Duis at consectetur lorem donec. Felis imperdiet proin fermentum leo vel orci. Lacus luctus accumsan tortor posuere ac. Diam vel quam elementum pulvinar etiam non. Curabitur gravida arcu ac tortor dignissim convallis. Quam vulputate dignissim suspendisse in est ante in.
                            <br />
                            Nunc sed blandit libero volutpat. Nec ullamcorper sit amet risus nullam. Ut consequat semper viverra nam. Felis eget velit aliquet sagittis id consectetur. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Fringilla urna porttitor rhoncus dolor purus non enim. Sapien pellentesque habitant morbi tristique senectus et netus. Erat velit scelerisque in dictum non consectetur. At lectus urna duis convallis convallis tellus. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Laoreet suspendisse interdum consectetur libero id. Id diam maecenas ultricies mi eget mauris.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Bio;