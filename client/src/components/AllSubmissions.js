import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
const AllSubmissions = (props) => {

    const [allSubmissions, setAllSubmissions] = useState([]);
    const [categoryType, setCategoryType] = useState('Sort by');
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/submissions")
            .then((response) => {
                console.log('response.data');
                console.log(response.data);
                setAllSubmissions(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='w-100 mx-auto p-2 px-4 border border-dark'>
            <Form.Control className='bg-success w-50 mx-auto mb-2 ' as="select" type='category' name="category" value={categoryType} onChange={(e) => setCategoryType(e.target.value)} placeholder='Category' required>
                <option>Sort by</option>
                <option value='Farm Animals'>Farm Animals</option>
                <option value='Wildlife'>Wildlife</option>
                <option value='Dogs'>Dogs</option>
                <option value='Cats'>Cats</option>
                <option value='Birds'>Birds</option>
                <option value='Reptiles'>Reptiles</option>
                <option value='Fish'>Fish</option>
                <option value='Bugs'>Bugs</option>
                <option value='Rodents'>Rodents</option>
            </Form.Control>
            { categoryType === 'Sort by' ?
                <div className='myscroll'>
                    {
                        allSubmissions.map((element, index) => (
                            <div key={index} className='border border-dark mb-2 p-1'>
                                <Container>
                                    <Row>
                                        <Col xs={6} md={4}>
                                            <Image src={element.imageURL} thumbnail />
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <p>{element.category}</p>
                                            <p>{element.description}</p>
                                        </Col>
                                    </Row>
                                    <p>Submitted by: {element.user}</p>
                                    <Button className='p-1 m-1' variant='secondary' >Delete</Button>
                                </Container>
                            </div>
                        ))
                    }

                </div>
                : <div className='myscroll'>
                    {
                        allSubmissions.filter(ele => ele.category === categoryType).map((element, index) => (
                            <div key={index} className='border border-dark mb-2 p-1'>
                                <Container>
                                    <Row>
                                        <Col xs={6} md={4}>
                                            <Image src={element.imageURL} thumbnail />
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <p>{element.category}</p>
                                            <p>{element.description}</p>
                                        </Col>
                                    </Row>
                                    <p>Submitted by: {element.user}</p>
                                    <Button className='p-1 m-1' variant='secondary' >Delete</Button>
                                </Container>
                            </div>
                        ))
                    }

                </div>
            }
        </div >
    )
};

export default AllSubmissions;