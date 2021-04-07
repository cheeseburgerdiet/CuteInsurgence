import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link, } from '@reach/router';


const AdminLogin = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/admin/login', {
            name: name,
            password: password
        },
        { withCredentials : true})
            .then(response => {
                console.log("login data", response.data);
                navigate(`/admin/home`)
            })
            .catch(error => {
                console.log("problem with login.js", error);
                setErrMessage(error.response.data.msg);
            })
    };
    return (
        <div className= "container blue lighten-4 blue-text text-darken-2" style={{borderRadius: "25px", padding: "15px", marginTop: "25px", boxShadow: "#fbe9e7 0px 30px 90px"
        }}>
            <div className= "row">
                <div className="col s6">
                        <p><Link to='/admin/home'>Admin Home</Link></p>
                        <p>{errMessage ? errMessage : ""}</p>
                        <form onSubmit={login}>
                            <h3>Welcome Back! Please log in </h3>
                            <div className="input-field col s12 input-field input[type=text]:focus">
                                <input
                                    type="text"
                                    placeholder="Enter Admin Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                                    <label>Admin Name:</label>
                            </div>
                            <div className="input-field col s12 blue-field">  
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <label>Password:</label>
                            </div>
                            <button className="btn waves-effect waves-light blue" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    )
};

export default AdminLogin;