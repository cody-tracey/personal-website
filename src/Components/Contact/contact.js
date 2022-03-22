import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const Contact = () => {

    const [errors, setErrors] = useState({
        "name": "",
        "email": "",
        "message": ""
    });
    // const [status, setStatus] = useState("Submit");
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus("Sending...");
    //     const { name, email, message } = e.target.elements;
    //     let details = {
    //         name: name.value,
    //         email: email.value,
    //         message: message.value,
    //     };
    // };
    // let response = await fetch("http://localhost:5000/contact", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: JSON.stringify(details),
    // });
    // setStatus("Submit");
    // let result = await response.json();



    return (
        <div className="drop-med">
            <Container className="main" >
                <Row className='pt-2 pb-2'>
                    <Col className='text-center'>
                        <h1>CONTACT ME</h1>
                    </Col>
                </Row>
                <Form>
                    <Row className='pt-2 pb-2'>
                        <Col md={6} sm={12}>
                            <Form.Group>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type='text' placeholder='Name' />
                                {errors.name ? <p>{errors.name}</p> : ""}
                            </Form.Group>
                        </Col>
                        <Col md={6} sm={12}>
                            <Form.Group>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type='email' placeholder='Email' />
                                {errors.email ? <p>{errors.email}</p> : ""}

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='pt-2 pb-2'>
                        <Col>
                            <Form.Group>
                                <Form.Label>Message:</Form.Label>
                                <Form.Control as='textarea' rows={3} />
                                {errors.message ? <p>{errors.message}</p> : ""}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='pt-2 pb-2'>
                        <Col xs={1}>
                            <Button variant="primary"><b>Submit</b></Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>

    );
}

export default Contact;