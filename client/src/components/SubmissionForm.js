import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { navigate } from '@reach/router';

const SubmissionForm = () => {
    const [state, setState] = useState({
        category: '',
        imgURL: '',
        videoURL: '',
        user: '',
        description: ''
    });
    const [errs, setErrs] = useState({});

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/submissions', state)
            .then((res) => {
                console.log(res);
                if (res.data.errors) {
                    setErrs(res.data.errors);
                } else {
                    console.log(res.data._id);
                    navigate('/cuteinsurgence');
                }
            })
            .catch((err) => console.log(err));
    };//end submitForm
    return (
        <div>
            <Container className='w-100 mx-auto p-2 px-4 border border-dark'>
                <Form onSubmit={submitForm}>
                    <Row>
                        <Col className='p-2 m-2'>
                            <Form.Group as={Row} controlId='formCategory'>
                                <Form.Label column sm="2">Category</Form.Label>
                                <Col sm="10">
                                    <Form.Control type='category' name="category" onChange={(e) => onChange(e)} placeholder='Category' required />
                                    {errs.category ? (<span className='text-danger'>{errs.category.message}</span>) : null}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId='formImgURL'>
                                <Form.Label column sm="2">imgURL</Form.Label>
                                <Col sm="10">
                                    <Form.Control type='imgURL' name="imgURL" onChange={(e) => onChange(e)} placeholder='imgURL' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId='formVideoURL'>
                                <Form.Label column sm="2">videoURL</Form.Label>
                                <Col sm="10">
                                    <Form.Control type='videoURL' name="videoURL" onChange={(e) => onChange(e)} placeholder='videoURL' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId='formUser'>
                                <Form.Label column sm="2">User</Form.Label>
                                <Col sm="10">
                                    <Form.Control type='user' name="user" onChange={(e) => onChange(e)} placeholder='user' required />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col className='p-1 m-1'>
                            <Form.Group className=' border border-dark' controlId='textarea'>
                                <Form.Control as="textarea" rows={5} type='description' name="description" onChange={(e) => onChange(e)} placeholder='description' />
                            </Form.Group>
                            <Form.Group as={Row} controlId='formButton'>
                                <Form.Label column sm="9"></Form.Label>
                                <Col sm="3">
                                    <Button variant='success' type='submit'>submit</Button>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>

                </Form>
            </Container>
        </div>
    )
};

export default SubmissionForm;