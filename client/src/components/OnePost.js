import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Button} from 'react-bootstrap';

const OnePost = (props) => {

    //Individual post db_id
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
                const filteredPostArr = post.filter((post) => post._id !== id);
                setPost(filteredPostArr);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="cuteinsurgence-body-wrapper">
            <div className="cuteinsurgence-single-post">
            <h1> {post.title} </h1>
            <img className="post-display-img"
                src={post.imageUrl}
                alt={post.title}
            />

        <div>
            {post.description}
        </div>
    
        <div className="cuteinsurgence-single-btns-arrangment">
        <button className="cuteinsurgence-single-post-btns"
                onClick={() => navigate(post._id)}
            >update</button>
            <Button  onClick={() => deletePost(post._id)}>Delete</Button>
        </div>
        </div>
        </div>
    )
};

export default OnePost;

// {
//     title: {
//         type: String ,

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
// {timestamps:true}