import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { } from 'react-bootstrap';

const OnePost = (props) => {

    //Individual post db_id
    const { id } = props;
    const [post, setPost] = useState({});

    useEffect(() => {
        axios
        .get("http://localhost:8000/CuteInsurgence/" + id)
            .then((res) => {
                const singlePost = res.data;
                console.log(singlePost);
                setPost(singlePost);
            });                         
    }, []);



    const deletePost = (id) => {
        axios.delete("http://localhost:8000/post/" + id)
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








    //Waiting for Controllers/db to be wired 
    return (
       
        <div className="cuteinsurgence-body-wrapper">
            <div className="cuteinsurgence-single-post">
            <h1> A Big Title (filler) check code  {post.title} </h1>
            <p>Category: Display category or not?</p>
            <p>Image & or Video</p>
            <img className="post-display-img"
                src={post.imageUrl}
                alt={post.title}
            />

            
        {/* This is a test */}  



        <div>
            {post.description}
            Description:
            SE Asian Tarsier, Malaysian Archipelago.
            Tarsiers are haplorrhine primates of the family Tarsiidae, which is itself the lone extant family within the infraorder Tarsiiformes. Although the group was once more widespread, all of its species living today are found in the islands of Southeast
            
        </div>
    {/* Need the path for buttons */}
        <div className="cuteinsurgence-single-btns-arrangment">
        <button className="cuteinsurgence-single-post-btns"
                onClick={() => navigate(`/post/${post._id}/edit`)}
            >update</button>
            <button>Delete</button>
        </div>
        </div>
        </div>
    )
};

export default OnePost;

//.get("http://localhost:8000/CuteInsurgence/post/:id"

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