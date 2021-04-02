import React, { useState } from 'react';
import axios from 'axios';
import {Container, Row, Col, Form, Button } from 'react-bootstrap';
import { navigate } from '@reach/router';

const PostForm = () =>{
    const [state, setState] = useState({
        category: '',
        imageURL: '',
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
        .post('http://localhost:8000/api/posts', state)

        .then((res) => {
            console.log(res);
            if (res.data.errors) {
                setErrs(res.data.errors);
            } else {
                console.log(res.data._id);
                navigate(`/posts/${res.data._id}`);
            }
        })
        .catch((err) => console.log(err));
};//end submitForm
return(
    <div>
        <Container className='w-100 mx-auto p-2 px-4 border border-dark'>
        <p className='mb-1'>Post Form</p>
            <Form onSubmit={submitForm}>
                <Row>
                    <Col className='p-2'>
                        <Form.Group as={Row} controlId='formTitle'>
                            <Form.Label column sm="2">Title</Form.Label>
                            <Col sm={10}>
                                <Form.Control type='title' name="title" value = {state.title} onChange={(e) => onChange(e)} placeholder='Title' required />
                                {errs.category ? (<span className='text-danger'>{errs.category.message}</span>) : null}
                            </Col>
                        </Form.Group>
                        <Form.Group as= {Row} controlId='formCategory'>
                            <Form.Label column sm="2">Category</Form.Label>
                            <Col sm={10}>
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
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='formImageURL'>
                            <Form.Label column sm="2">imageURL</Form.Label>
                            <Col sm={10}>
                                <Form.Control type='imageURL' name="imageURL" value = {state.imageURL} onChange={(e) => onChange(e)}  placeholder='imageURL' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='formVideoURL'>
                            <Form.Label column sm="2" >videoURL</Form.Label>
                            <Col sm={10}>
                                <Form.Control type='videoURL' name="videoURL" value = {state.videoURL} onChange={(e) => onChange(e)} placeholder='videoURL' />
                            </Col>
                        </Form.Group>
                        <Form.Group className=' border border-dark' controlId='textarea'>
                            <Form.Control as="textarea" rows={7} type='description' name="description" value = {state.description} onChange={(e) => onChange(e)}  placeholder='description' />
                        </Form.Group>
                        <Button variant='success' type='submit'>submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    </div>
)
};

export default PostForm;