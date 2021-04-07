import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DropDown = (props) => {

const [allSubmissions, setAllSubmissions] = useState([]);
const [allSortSubmissions, setAllSortSubmissions] = useState([]);
const [categoryType, setCategoryType] = useState('Sort by');

useEffect(() => {
    axios
        .get("http://localhost:8000/api/posts")
        .then((response) => {
            console.log('response.data');
            console.log(response.data);
            setAllSubmissions(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

useEffect(() => {
    axios
        .get(`http://localhost:8000/api/posts/category/${categoryType}`)
        .then((response) => {
            console.log('response.data');
            console.log(response.data);
            setAllSortSubmissions(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

return (
    <div className='w-100 mx-auto p-2 px-4 border border-dark'>
        <select className='bg-success w-50 mx-auto' 
            type='category' 
            name="category" 
            value={categoryType} 
            onChange={(e) => setCategoryType(e.target.value)} 
            placeholder='Category' required>
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
        <h4>You selected {categoryType}</h4>
        { categoryType === 'Sort by'?
            <div>
                {
                    allSubmissions.map((element, index) => (
                        <div key={index} className='border border-dark mb-2 p-1'>
                            <div className="row">
                                <div className="col s12">
                                    <div className="col s6">
                                        <img src={element.imageURL} thumbnail />
                                    </div>
                                    <div className="col s6">
                                        <p>{element.category}</p>
                                        <p>{element.description}</p>
                                    </div>
                                </div>
                                <p>Submitted by: {element.user}</p>
                                <button className='p-1 m-1' variant='secondary' >Delete</button>
                            </div>
                        </div>
                    ))
                }

            </div> 
            :<div>
                {
                    allSortSubmissions.map((element, index) => (
                        <div key={index} className='border border-dark mb-2 p-1'>
                            <div className="container">
                                <div className="row">
                                    <div className="col s6">
                                        <img src={element.imageURL} thumbnail />
                                    </div>
                                    <div className="col s6">
                                        <p>{element.category}</p>
                                        <p>{element.description}</p>
                                    </div>
                                </div>
                                <p>Submitted by: {element.user}</p>
                                <button className='p-1 m-1' variant='secondary' >Delete</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        }
    </div >
)
};

export default DropDown;
