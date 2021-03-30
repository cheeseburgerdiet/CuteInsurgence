import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { } from 'react-bootstrap';


const AllPosts = (props) => {

    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/cuteinsurgence")
            .then((response) => {
                console.log(response.data);
                setAllPosts(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

//Waiting for Controllers/db to be wired 
    return (
        <div className="cuteinsurgence-body-wrapper">
        <div className="AllPosts-post-display">
            <h2>SE Asian Tarsier</h2>
            <div>
                Image & the data
           
            {
                allPosts.map((post, index) => (
                    <div key={index}>
                        <h3 className="post-display-title">
                            {post.title}
                        </h3>
                        <div>
                            <img className="post-display-img"
                                src={post.imageUrl}
                                alt={post.title}
                            />
                            <p>{post.category}</p>
                            <button className="post-display-viewpost-btn"
                                onClick={() => navigate(`/post/${post._id}`)}
                            >View Post </button>
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





// {
//     title: {
//         type: String,

//     },

//     description: {
//         type: String
//     },

//     category: {
//         type: String,

//     },

//     imageUrl: {
//         type: String,
//     },

//     videoURL: {
//         type: String,
//     },
// },
// { timestamps: true }