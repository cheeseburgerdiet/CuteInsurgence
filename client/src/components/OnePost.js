import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Button, Image } from 'react-bootstrap';

const OnePost = (props) => {
    const { id } = props;

    const [post, setPost] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/posts/" + id)
            .then((res) => {
                const singlePost = res.data;
                console.log(singlePost);
                setPost(singlePost);
            });
    }, []);

    const deletePost = (id) => {
        axios.delete("http://localhost:8000/api/posts/" + id)
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
        <div className="cuteinsurgence-body-wrapper">
            <div className="cuteinsurgence-single-post">
                <Image src={post.imageURL} alt={post.title} fluid />
                <h1> {post.title} </h1>
                <div className="post-description">
                    {post.description}
                </div>
                <div className="cuteinsurgence-single-btns-arrangment">
                    <Button className="cuteinsurgence-single-post-btns"
                        onClick={() => navigate(`/admin/update/${post._id}`)}

                    >update</Button>
                    <Button onClick={() => deletePost(post._id)}>Delete</Button>
                </div>
            </div>
        </div>
    )
};

export default OnePost;
