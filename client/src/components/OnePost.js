import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Row, Col} from 'react-materialize';
import {navigate} from '@reach/router';
import AdminAuth from './AdminAuth';

const OnePost = (props) => {
    const { id } = props;
    const [post, setPost] = useState({});
    const [admin, setAdmin] = useState('');

    useEffect(() => {
        axios.get("http://localhost:8000/api/posts/" + id)
            .then((res) => {
                console.log(res);
                if(res.data.cookie) {
                    setAdmin(res.data.cookie);
                    setPost(res.data);
                } else {
                const singlePost = res.data;
                console.log(singlePost);
                setPost(singlePost);
                }
            });
    }, [id]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/admin/home", {withCredentials: true})
            .then((res) => {
                console.log(res);
                setAdmin(res.data)
                })
            .catch(err => console.log("error with buttons.js"+ err))   
    }, []);

    


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
                        {admin?
                            <div>
                                <Row>
                                    <Col className= "col s8" >
                                        <button 
                                        style={{ marginBottom: "20px", borderRadius: "16px" }}
                                        className="btn btn-small aqua lighten-1 waves-effect waves-light"
                                        onClick={() => navigate(`/admin/update/${post._id}`)}
                                        type="submit" 
                                        name="action"
                                        >
                                            Edit
                                        <i class="material-icons right">edit</i>
                                        </button>
                                    </Col>
                                    <Col>
                                    <button 
                                        style={{ marginBottom: "20px", borderRadius: "16px" }}
                                        className="btn btn-small pink lighten-2 waves-effect waves-light"
                                        onClick={() => deletePost(post._id)}
                                        type="submit" 
                                        name="action"
                                        >Delete
                                        <i class="material-icons right">delete</i>
                                    </button>
                                    </Col>
                                </Row>
                            </div>
                            :null
                        }

                </Row>
        </div>
    )
};

export default OnePost;
