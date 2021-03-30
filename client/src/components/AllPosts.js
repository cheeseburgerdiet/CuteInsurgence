import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Button } from 'react-bootstrap';


const AllPosts = (props) => {

    const [allPosts, setAllPosts] = useState([]);
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
        <div className="cuteinsurgence-body-wrapper">
            <div className="AllPosts-post-display">


                <div >
                    {
                        allPosts.map((post, index) => (
                            <div className="cuteinsurgence-single-post" key={index}>
                                <h3 className="post-display-title">
                                    {post.title}
                                </h3>
                                <div>
                                    <img className="post-display-img"
                                        src={post.imageUrl}
                                        alt={post.title}
                                    />
                                    <p>Category: {post.category}</p>
                                    <Button className="post-display-viewpost-btn"
                                        onClick={() => navigate(`/posts/${post._id}`)}
                                    >View Post </Button>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    )
}

export default AllPosts;



