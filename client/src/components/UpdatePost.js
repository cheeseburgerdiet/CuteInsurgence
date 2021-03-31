import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const UpdatePost = (props) => {
    const { id } = props;
    const [post, setPost] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [videoURL, setVideoURL] = useState('');
    const [description, setDescription] = useState('');
    const [errs, setErrs] = useState({});



    useEffect(() => {
        axios
            .get("http://localhost:8000/api/posts/" + id)
            .then((res) => {
                const singlePost = res.data;
                console.log(singlePost);
                setTitle(singlePost.title);
                setCategory(singlePost.category);
                setImageURL(singlePost.imageURL);
                setVideoURL(singlePost.videoURL);
                setDescription(singlePost.description);
        });
    }, []);

    const UpdatePost = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/posts/" + id, {
            title: title,
            category: category,
            imageURL: imageURL,
            videoURL: videoURL,
            description: description
        })
            .then((response) => {
                if (response.data.errors) {
                    console.log(response.data.errors)
                    setErrs(response.data.errors)
                } else {
                    console.log(response.data);
                    navigate(`/posts/${response.data._id}`);
                }
            })
            .catch((err) => console.log("error with UpdatePost.js", err))
    };

    return (
        <div>
            <Container>
                <p>{`Update your ${title} post below`}</p>
                <Form onSubmit={UpdatePost}>
                    <Form.Group className="justify-content-md-center" as={Row} controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Col sm={4}>
                            <Form.Control type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group className="justify-content-md-center" as={Row} controlId="formCategory">
                        <Form.Label>Category</Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select"
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option>Select Category</option>
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
                        </Col>
                    </Form.Group>
                    <Form.Group className="justify-content-md-center" as={Row} controlId="formImageURL">
                        <Form.Label>Image URL:</Form.Label>
                        <Col sm={4}>
                            <Form.Control type="text"
                                name="imageURL"
                                value={imageURL}
                                onChange={(e) => setImageURL(e.target.value)}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group className="justify-content-md-center" as={Row} controlId="formVideoURL">
                        <Form.Label>Video URL:</Form.Label>
                        <Col sm={4}>
                            <Form.Control type="text"
                                name="videoURL"
                                value={videoURL}
                                onChange={(e) => setVideoURL(e.target.value)}
                                />
                        </Col>
                    </Form.Group>
                    <Form.Group className="justify-content-md-center" as={Row} controlId="formDescription">
                        <Form.Label>Description:</Form.Label>
                        <Col sm={4}>
                            <Form.Control 
                                type= "text"
                                as= "textArea"
                                rows={6}
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            >
                            {description}
                            </Form.Control>

                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </Container>
        </div>

    )
};

export default UpdatePost;

