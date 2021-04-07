import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  navigate } from '@reach/router';
import {Row, Select} from 'react-materialize';
import DropDown from './DropDown';

const AllPosts = (props) => {
    const [allPosts, setAllPosts] = useState([]);
    const [categoryType, setCategoryType] = useState('All Cuties');
    
    useEffect(()=> {
        axios.get("http://localhost:8000/api/posts")
            .then((response) => {
                console.log(response.data);
                setAllPosts(response.data);
            })
            .catch(err=> console.log(err))
    }, []);

    return (
        <div className= "container deep-orange lighten-4 componentBackground">
            <Row>
                <form className='col s2' style={{backgroundImage:"linear-gradient(to right ,darkorange, #ee5923, #ee6e73", borderRadius:"50px"}}>
                    <Select
                        type='category' 
                        name="category" 
                        value={categoryType} 
                        onChange={(e) => setCategoryType(e.target.value)} 
                        placeholder='Category'>
                        <option>All Cuties</option>
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
                </form>
            </Row>
            <div>
                {categoryType === 'All Cuties' ? 
                    <div>
                        {allPosts.map((post, index) => (
                                <div 
                                    key={index}  
                                    className= "container col s12" style={{marginBottom: "50px"}}
                                    >
                                    <div className="row">
                                        <div  className="col s8 push-s2">
                                            <div className="card large card-style">
                                                <div className="card-image">
                                                    <img className="responsive-img"
                                                        style={{borderTopLeftRadius:"25px", 
                                                            borderTopRightRadius: "25px"}}
                                                        src={post.imageURL} 
                                                        alt={post.title}/>
                                                </div>
                                                <div className="card-content">
                                                    <span className="card-title">{post.title}</span>
                                                    <p className="truncate">{post.description}</p>
                                                </div>
                                                <div className="card-action">
                                                    <a className="waves-effect waves-light btn-small" onClick={() => navigate(`/posts/${post._id}`)}>View Post</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    : 
                        <div>
                        {
                            allPosts.filter(post => post.category === categoryType).map((post, index) => (
                                <div key={index}  
                                    className= "container col s12" style={{marginBottom: "50px"}}> 
                                    <div className="row">
                                        <div className="col s8 push-s2">
                                            <div className="card large card-style">
                                                <div className="card-image ">
                                                    <img className="responsive-img"
                                                        style={{borderTopLeftRadius:"25px", 
                                                        borderTopRightRadius: "25px"}}
                                                        src={post.imageURL} 
                                                        alt={post.title}/>
                                                    <span className="card-title">{post.title}</span>
                                                </div>
                                                <div className="card-content">
                                                    <p className="truncate">{post.description}</p>
                                                </div>
                                                <div className="card-action">
                                                    <a className="waves-effect waves-light btn-small" onClick={() => navigate(`/posts/${post._id}`)}>View Post</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default AllPosts;



