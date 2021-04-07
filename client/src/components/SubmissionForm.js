import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Select, Row, Col} from 'react-materialize';
import HappyEyes from '../images/HappyEyes.png';
import M from "materialize-css";

const SubmissionForm = () => {
    const [state, setState] = useState({
        category: '',
        imageURL: '',
        videoURL: '',
        user: '',
        description: ''
    });
    const [errs, setErrs] = useState({});
    const [confirmation, setConfirmation] = useState('');

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/submissions', state)
            .then((res) => {
                console.log(res);
                if (res.data.errors) {
                    setErrs(res.data.errors);
                } else {
                    console.log(res.data._id);
                    setState({...state, 
                        title: '',
                        category: '',
                        imageURL: '',
                        videoURL: '',
                        user: '',
                        description: ''
                    });
                    setConfirmation("Your form was successfully submited, thank you!")
                }
            })
            .catch((err) => {
                console.log(err);
                // setErrs(err.data.errors)
            });
        };
    //end submitForm

    useEffect(() => {
        // Init FormSelect Materialize JS
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }, []);

    return (
        <div className="container">
            <div>
                <form className="col s12" style={{ backgroundColor: "white", boxShadow: "#f18e14 0px 2px 25px 10px", borderRadius: "25px", paddingLeft: "50px"}} onSubmit={submitForm}>
                <div>
                    <h5 className="center-align ">Found something cute? Send it our way!</h5>
                </div>
                <div className="valign-wrapper">
                    <div className="input-field col s4">
                        <select 
                        className="center-align"
                        name="category" 
                        value= {state.category} 
                        onChange={(e) => onChange(e)}
                        >
                            <option>Select Category</option>
                            <option value= 'Farm Animals'>Farm Animals</option>
                            <option value= 'Wildlife'>Wildlife</option>
                            <option value='Dogs'>Dogs</option>
                            <option value= 'Cats'>Cats</option>
                            <option value= 'Birds'>Birds</option>
                            <option value= 'Reptiles'>Reptiles</option>
                            <option value= 'Fish'>Fish</option>
                            <option value= 'Bugs'>Bugs</option>
                            <option value= 'Rodents'>Rodents</option>
                        </select>
                        {errs.category ? (<span className='text-danger'>{errs.category.message}</span>) : null}
                    </div>
                    <div className="col s4 pull-s2">
                        <img src={HappyEyes} alt="happy eyes" className="circle responsive-img"/>
                    </div>
                </div>
                <div>
                    <div className="col s6 push-s3">
                        <input 
                            className="input-field center-align"
                            type='text' 
                            name="imageURL" 
                            value= {state.imageURL} 
                            onChange={(e) => onChange(e)} 
                            placeholder='paste an image link here!'
                        />
                        <label htmlFor="imageURL">image URL</label>
                    </div>
                </div>
                <div>
                    <div className="col s6 push-s3">
                        <input 
                            className="input-field center-align"    
                            type="text" 
                            name="videoURL" 
                            value= {state.videoURL} 
                            onChange={(e) => onChange(e)} 
                            placeholder='paste a video link here!'
                        />
                        <label htmlFor="videoURL">video URL</label>
                    </div>
                </div>
                <div>
                    <div className="col s12">
                        <textarea
                            className="materialize-textarea center-align" style={{height: "400px", width: "400px", border: "solid 2px #f8ccbd", borderRadius: "25px"}}
                            name="description" 
                            value= {state.description} 
                            onChange={(e) => onChange(e)} 
                            placeholder='Tell us a little about your submission'
                        />
                    </div>
                </div>
                <div>
                    <div className="col s6 push-s3">
                        <input 
                            className="input-field center-align"    
                            type="text" 
                            name="user" 
                            value= {state.user} 
                            onChange={(e) => onChange(e)} 
                            placeholder='let us know your name or nickname!'
                        />
                        <label htmlFor="user">user name</label>
                    </div>
                </div>
                    <p><span style={{margin: "5px", color:"orange"}}>Submit</span>
                        <button className="btn-floating btn-large orange pulse" type="submit" name="action">
                            <i className="material-icons right">send</i>
                        </button>
                    </p>
                    <div>
                <div className="col s8 push-s2">
                    {confirmation?
                                <h5 style={{color: 'green'}}>{confirmation}</h5>
                                :null
                                }
                </div>
            </div>
                </form>
            </div>
        </div>
    )
};

export default SubmissionForm;