import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Row, Col} from 'react-materialize';
import {navigate} from '@reach/router';

const OnePost = (props) => {
    const { id } = props;

    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/posts/" + id)
            .then((res) => {
                const singlePost = res.data;
                console.log(singlePost);
                setPost(singlePost);
            });
    }, [id]);


    const deletePost = (id) => {
        axios.delete("http://localhost:8000/api/posts/" + id, {
            withCredentials: true
        })
            .then((res) => {
                const deletedPost = res.data;
                console.log(deletedPost);
                navigate("/cuteinsurgence")
            })
            .catch((err) => {
                console.log(err);
            });
        }

    return (
        <div className="container whiteDivGoldShadow" style={{marginTop: "35px"}}>
            {post.imageURL? 
                <div>
                    <Row>
                        <Col className='col s12'>
                            <h1> {post.title} </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col s8 push-s2 ">
                                <img className="post-image"
                                    style={{marginTop:"40px"}}
                                    src={post.imageURL}
                                    alt={post.title}
                                />
                        </Col>
                    </Row>
                </div>
                :null
                }

                {post.videoURL?
                    <div>
                        <Row>
                            <Col className= "col s12">
                            <div className="video-container">
                                <iframe width="853" height="480" src={post.videoURL} frameborder="0" allowfullscreen></iframe>
                            </div>
                            </Col>
                        </Row>
                    </div>
                    :null
                }
                    
                    <Row>
                        <Col className='col s12'>
                            <div className="post-description">
                                {post.description}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className= "col s12" >
                            
                            
                            <div className="right-align">
                                <a className="btn-floating btn-large cyan pulse" style={{marginRight:"40px", marginBottom:"20px"}} href={`/admin/update/${post._id}`}><i className="material-icons">edit</i></a>
                            </div>
                            <button onClick={() => deletePost(post._id)}>Delete</button>
                    </Col>
                </Row>
        </div>
    )
};

export default OnePost;
