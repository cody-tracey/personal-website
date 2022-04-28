import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import Navi from '../Navi/navi';

const Contact = () => {

    const [entry, setEntry] = useState({
        "name": "",
        "email": "",
        "message": ""
    });

    const { name, email, message } = entry;

    const handleOnChange = e => {
        setEntry({ ...entry, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault()

        fetch('http://localhost:5000/send', {
            method: "POST",
            body: JSON.stringify(entry),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).then(res => {
            if (res.status === 'success') {
                alert("Message Sent.")
                setEntry({
                    ...entry,
                    "name": "",
                    "email": "",
                    "message": ""
                }); //Reset Form
            } else if (res.status === 'fail') {
                alert("Message failed to send.")
            };
        });
    };


    return (
        <Container>
            <Helmet>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, 
      shrink-to-fit=no"
                />
                <meta name="keyword" content="portfolio, javascript, developer, web developer, freelance,node.js,html5,css"></meta>
                <meta property="og:title" content="Cody Tracey | Fullstack Web Developer" />
                <meta property="og:description" content="Contact form to reach Cody Tracey" />
                <meta property="og:url" content="https://codytracey.com" />
                <meta property="og:type" content="website" />
                <title>Cody's Contact Page</title>

            </Helmet>
            <Navi />
            <div className="main drop-small">
                <Row className='pt-2 pb-2'>
                    <Col className='text-center'>
                        <h1>CONTACT ME</h1>
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit} className="p-3">
                    <Row className='pt-2 pb-2'>
                        <Col md={6} sm={12}>
                            <Form.Group>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type='text' placeholder='Name' value={name} onChange={handleOnChange} name='name' />
                            </Form.Group>
                        </Col>
                        <Col md={6} sm={12}>
                            <Form.Group>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type='email' placeholder='Email' value={email} onChange={handleOnChange} name='email' />

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='pt-2 pb-2'>
                        <Col>
                            <Form.Group>
                                <Form.Label>Message:</Form.Label>
                                <Form.Control as='textarea' rows={3} value={message} onChange={handleOnChange} name='message' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='pt-2 pb-2'>
                        <Col xs={1}>
                            <Button variant="primary" type="submit"><b>Submit</b></Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    );
}

export default Contact;