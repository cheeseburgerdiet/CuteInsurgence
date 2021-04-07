import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { Select, Col, Row} from 'react-materialize';


const PostForm = () =>{
    const [state, setState] = useState({
        title: '',
        category: '',
        imageURL: '',
        videoURL: '',
        user: '',
        description: ''
    });
    const [errs, setErrs] = useState({});

const onChange = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value,
    });
};

const submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/posts', state)
        .then((res) => {
            console.log(res);
            if (res.data.errors) {
                setErrs(res.data.errors);
            } else {
                console.log(res.data._id);
                navigate(`/posts/${res.data._id}`);
            }
        })
        .catch((err) => console.log(err));
};//end submitForm
return(
    <div>
        <Row>
            <form className="col s12" style={{backgroundColor: "white", borderRadius: "25px", padding: "15px 15px "}}onSubmit={submitForm}>
                    <h5>Create Post</h5>
                <Row>
                    <Col className="col s12">
                        <input
                            className="input-field "
                            type="text"
                            name="title"
                            value={state.title}
                            onChange={onChange}
                            />
                        <label htmlFor="title">Title</label>
                    </Col>
                </Row>
                <Row>
                    <Col className="col s12">
                    <p>{errs.category ? (<span className='text-danger'>{errs.category.message}</span>) : null}</p>
                        <Select
                        className="input-field "
                        name="category"
                        value={state.category}
                        onChange={onChange}
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
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col className="col s12">
                        <input 
                            className="input-field"
                            type="text"
                            name="imageURL"
                            value={state.imageURL}
                            onChange={onChange}
                        />
                        <label htmlFor="imageURL">image URL</label>
                    </Col>
                </Row>
                <Row>
                    <Col className="col s12">
                        <input 
                            className="input-field inline"
                            type="text"
                            name="videoURL"
                            value={state.videoURL}
                            onChange={onChange}
                        />
                        <label htmlFor="videoURL">video URL</label>
                    </Col>
                </Row>
                <Row>
                    <Col className="col s12">
                        <textarea
                            className="materialize-textarea"
                            style={{borderRadius:"10px", height: "300px", border: "solid 2px lightblue"}}
                            type="text"
                            name="description"
                            value={state.description}
                            onChange={onChange}
                        />
                        <label htmlFor="description">description</label>
                    </Col>
                </Row>
                <button className="btn waves-effect blue waves-light" type="submit" name="action">Post!
                    <i className="material-icons right">send</i>
                </button>
            </form>
        </Row>
    </div>
    )
};

export default PostForm;