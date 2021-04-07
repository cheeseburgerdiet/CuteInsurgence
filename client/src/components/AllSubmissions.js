
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row, Select } from 'react-materialize';
import M from 'materialize-css';

const AllSubmissions = (props) => {
    const [allSubmissions, setAllSubmissions] = useState([]);
    const [categoryType, setCategoryType] = useState('Sort by');
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/submissions") 
            .then((response) => {
                console.log('response.data');
                console.log(response.data);
                setAllSubmissions(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteSubmission = (id) => {
        axios.delete("http://localhost:8000/api/submissions/" + id, {
            withCredentials: true
        }) 
            .then((res) => {
                const deletedSub = res.data;
                console.log(deletedSub);
                const filteredSubArray = allSubmissions.filter((submission)=> submission._id !== id);
                setAllSubmissions(filteredSubArray)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        // Init select Materialize JS
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }, []);
    
    return (
        <div>
            <div>
                <div className="input-field col s12">
                    <select className='bg-success w-50 mx-auto mb-2 ' type='category' name="category" value={categoryType} onChange={(e) => setCategoryType(e.target.value)} placeholder='Category' required>
                        <option>Sort by</option>
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
            </div>
            <div>
                <div className="col s12">
                    { categoryType === 'Sort by' ?
                        <div className='myscroll'>
                            {
                                allSubmissions.map((element, index) => (
                                    <div key={index} style={{border: "lightblue 2px solid", marginBottom: "10px", padding: "5px", borderRadius:"10px"}}>
                                        <div>
                                            {element.imageURL? 
                                            <div>
                                                <div>
                                                    <div className= "col s12">
                                                        <img src={element.imageURL} alt={element.title} className="thumbnail"/>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className= "col s12">
                                                    <a href={element.imageURL} target="_blank" >Image URL</a>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                            }
                                            { element.videoURL?
                                                <div>
                                                    <div>
                                                        <div className="col s12">
                                                            <a href={element.videoURL}  target="_blank" >Video URL</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                :null
                                            }
                                            <div>
                                                <div className= "col s12">
                                                <h6>Category: {element.category}</h6>
                                                <p>Description: {element.description}</p>
                                                </div>
                                            </div>
                                            <p>Submitted by: {element.user}</p>
                                            <a className="waves-effect waves-teal btn-flat" onClick={()=> deleteSubmission(element._id)}>Delete</a>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        : <div className='myscroll'>
                            {
                                allSubmissions.filter(ele => ele.category === categoryType).map((element, index) => (
                                    <div key={index} style={{border: "lightblue 2px solid", marginBottom: "10px", padding: "5px", borderRadius:"10px"}}>
                                        <div>
                                        {element.imageURL? 
                                            <div>
                                                <div>
                                                    <div className= "col s12">
                                                        <img src={element.imageURL} className="thumbnail"/>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className= "col s12">
                                                    <a href={element.imageURL} target="_blank" >Image URL</a>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                            }
                                            { element.videoURL?
                                                <div>
                                                    <div>
                                                        <div className="col s12">
                                                            <a href={element.videoURL}  target="_blank" >Video URL</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                :null
                                            }
                                            <div>
                                                <div className= "col s12">
                                                    <h6>Category: {element.category}</h6>
                                                    <p>Description: {element.description}</p>
                                                </div>
                                            </div>
                                            <p>Submitted by: {element.user}</p>
                                            <a className="waves-effect waves-teal btn-flat" onClick={()=> deleteSubmission(element._id)}>Delete</a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </div >
    )
};

export default AllSubmissions;
