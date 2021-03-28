import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PostForm from '../components/PostForm';
import AllSubmissions from '../components/AllSubmissions';
import { } from 'react-bootstrap';


const Admin = () => {
    return (
        <div>
            <h1>Views/Admin.js</h1>
            <Container className='w-100 mx-auto border border-dark'>
                <Row>
                    <Col className='p-2 m-2'>
                        <PostForm />
                    </Col>
                    <Col className='p-2 m-2'>
                        <AllSubmissions />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Admin;