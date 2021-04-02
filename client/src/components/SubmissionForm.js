import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { navigate } from '@reach/router';

const SubmissionForm = () => {
    const [state, setState] = useState({
        category: '',
        imageURL: '',
        videoURL: '',
        user: '',
        description: ''
    });
    const [errs, setErrs] = useState({});
    const [confirmation, setConfirmation] = useState('');

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
                    setState({...state, 
                        category: '',
                        imageURL: '',
                        videoURL: '',
                        user: '',
                        description: ''
                    });
                    setConfirmation("Your form was successfully submited, thank you!")
                }
            })
            .catch((err) => {
                console.log(err);
                // setErrs(err.data.errors)
            });
        };
    //end submitForm
    return (
        <div>
            <Container className='w-100 mx-auto p-2 px-4 border border-dark'>
                <Row>
                    <Col>
                    {confirmation?
                        <h4 style={{color: 'green'}}>{confirmation}</h4>
                        :null
                        }
                    </Col>
                </Row>
                <Form onSubmit={submitForm}>
                    <Row>
                        <Col className='p-2 m-2'>
                            <Form.Group as={Row} controlId='formCategory'>
                                <Form.Label column sm="2">Category</Form.Label>
                                <Col sm="10">
                                    <Form.Control as="select" type='category' name="category" value= {state.category} onChange={(e) => onChange(e)} placeholder='Category'>
                                        <option>Select Category</option>
                                        <option value= 'Farm Animals'>Farm Animals</option>
                                        <option value= 'Wildlife'>Wildlife</option>
                                        <option value='Dogs'>Dogs</option>
                                        <option value= 'Cats'>Cats</option>
                                        <option value= 'Birds'>Birds</option>
                                        <option value= 'Reptiles'>Reptiles</option>
                                        <option value= 'Fish'>Fish</option>
                                        <option value= 'Bugs'>Bugs</option>
                                        <option value= 'Rodents'>Rodents</option>
                                    </Form.Control>
                                    {errs.category ? (<span className='text-danger'>{errs.category.message}</span>) : null}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId='formImageURL'>
                                <Form.Label column sm="2">imageURL</Form.Label>
                                <Col sm="10">
                                    <Form.Control type='imageURL' name="imageURL" value= {state.imageURL} onChange={(e) => onChange(e)} placeholder='paste an image link here!'/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}  controlId='formVideoURL'>
                                <Form.Label column sm="2">videoURL</Form.Label>
                                <Col sm="10">
                                    <Form.Control type="videoURL" name="videoURL" value= {state.videoURL} onChange={(e) => onChange(e)} placeholder='paste a video link here!' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId='formUser'>
                                <Form.Label column sm="2">User</Form.Label>
                                <Col sm="10">
                                    <Form.Control type='user' name="user" value= {state.user} onChange={(e) => onChange(e)} placeholder='your name/nickname'  />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col className='p-1 m-1'>
                            <Form.Group className=' border border-dark' controlId='textarea'>
                                <Form.Control as="textarea" rows={5} type='description' name="description" value= {state.description} onChange={(e) => onChange(e)} placeholder='Tell us a little about your submission' />
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