import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import DropDown from './DropDown';

const AllPosts = (props) => {

    const [allPosts, setAllPosts] = useState([]);

    const [categoryType, setCategoryType] = useState('All Cuties');
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/posts")
            .then((response) => {
                console.log(response.data);
                setAllPosts(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <div className='w-100 mx-auto p-2 px-4 border border-dark'>
            <Form.Control className='bg-success w-50 mx-auto' as="select" type='category' name="category" value={categoryType} onChange={(e) => setCategoryType(e.target.value)} placeholder='Category' required>
                <option>All Cuties</option>
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
            {/* <DropDown /> */}
            <Container className='cuteinsurgence-single-post'>
                <Row>
                    <Col>
                        {
                            allPosts.map((post, index) => (
                                <div key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={post.imageUrl} alt={post.title} />
                                        <Card.Body>
                                            <Card.Title>{post.title}</Card.Title>
                                            <Card.Text>
                                                {post.category} : {post.description}
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => navigate(`/posts/${post._id}`)}>View Post </Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))
                        }
                    </Col>
                </Row>

            </Container>

            <div>
                {categoryType === 'All Cuties' ?
                    <div>
                        {
                            allPosts.map((element, index) => (
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
                    : <div>
                        {
                            allPosts.filter(post => post.category === categoryType).map((element, index) => (
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
            </div>
        </div>
    )
}

export default AllPosts;





{/* allPosts.filter(post => post.category === categoryType).map(post => { // Do something here }); */ }








