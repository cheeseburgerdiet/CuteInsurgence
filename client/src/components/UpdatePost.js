import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import {Row, Col, Select} from 'react-materialize';
import M from 'materialize-css';

const UpdatePost = (props) => {
    const { id } = props;
    const [post, setPost] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [videoURL, setVideoURL] = useState('');
    const [description, setDescription] = useState('');
    const [errs, setErrs] = useState({});

    useEffect(()=> {
        axios.get("http://localhost:8000/api/posts/" + id,
        {}, {withCredentials: true})
        .then((res)=>{
            const singlePost = res.data;
                console.log(singlePost);
                setTitle(singlePost.title);
                setCategory(singlePost.category);
                setImageURL(singlePost.imageURL);
                setVideoURL(singlePost.videoURL);
                setDescription(singlePost.description);
        })
        .catch(err=> console.log(err))
    }, []);

    const UpdatePost = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/posts/" + id, {
            title: title,
            category: category,
            imageURL: imageURL,
            videoURL: videoURL,
            description: description}, {
                withCredentials:true
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

    useEffect(() => {
        // Init Tabs Materialize JS
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }, []);

    return (
        <div className="container componentBackground">
            <div >
                <form className="col s12" style={{backgroundColor: "white", borderRadius: "25px", padding: "15px 15px "}} onSubmit={UpdatePost}>
                    <h5>Update Post</h5>
                    <div className="">
                        <select
                            className="center-align input-field "
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            >
                            <option>Choose Category</option>                        
                            <option value='Farm Animals'>Farm Animals</option>
                            <option value='Wildlife'>Wildlife</option>
                            <option value='Dogs'>Dogs</option>
                            <option value='Cats'>Cats</option>
                            <option value='Birds'>Birds</option>
                            <option value='Reptiles'>Reptiles</option>
                            <option value='Fish'>Fish</option>
                            <option value='Bugs'>Bugs</option>
                            <option value='Rodents'>Rodents</option>
                        </select>
                    </div>
                        <div className="col s4">
                            <input
                                className="center-align input-field "
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                />
                            <label htmlFor="title">Title</label>
                        </div>
                    <div>
                        <div className="col s12">
                            <input 
                                className="input-field"
                                type="text"
                                name="imageURL"
                                value={imageURL}
                                onChange={(e) => setImageURL(e.target.value)}
                            />
                            <label htmlFor="imageURL">image URL</label>
                        </div>
                    </div>
                    <div>
                        <div className="col s12">
                            <input 
                                className="input-field inline"
                                type="text"
                                name="videoURL"
                                value={videoURL}
                                onChange={(e) => setVideoURL(e.target.value)}
                            />
                            <label htmlFor="videoURL">video URL</label>
                        </div>
                    </div>
                    <div >
                        <div className="col s12">
                            <textarea
                                className="materialize-textarea"
                                style={{height: "300px", width: "700px", border: "solid 2px lightblue", borderRadius:"25px"}}
                                type="text"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <div>
                                <label htmlFor="description">description</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn waves-effect blue waves-light" type="submit" name="action">Update!
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default UpdatePost;

