import React, {useState} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const AdminLogin = (props) => {
        const [name, setName]= useState('');
        const [password, setPassword]= useState('');
        const [errMessage, setErrMessage] = useState('');
    
        const login = (e) => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/admin/login', {
                name: name,
                password: password})
            .then(response => {
                console.log("login data", response.data);
                navigate(`/admin/home`)
            })
            .catch(error => {
                console.log("problem with login.js",error);
                setErrMessage(error.response.data.msg);
        })
    };
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={6} >
                    <p><Link to='/admin/home'>Admin Home</Link></p>
                    <p>{errMessage? errMessage: ""}</p>
                        <Form onSubmit={login}>
                            <h1>Welcome Back! Please log in </h1>
                            <Form.Group controlId="formAdminName">
                                <Form.Label>Admin Name:</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter Admin Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default AdminLogin;