import React, { } from 'react';
import axios from 'axios';
import PostForm from '../components/PostForm';
import AllSubmissions from '../components/AllSubmissions';
import {Row, Col} from 'react-materialize';
import { navigate } from '@reach/router';

const Admin = () => {

    const logout = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/admin/logout')
        .then((response) => {
            console.log(response.data)
            navigate("/cuteinsurgence")})
        .catch(err => console.log("couldn't logout", err))
    }

    return (
        <div className= "container blue lighten-4 blue-text text-darken-2 componentBackground">
            <a className="waves-effect blue waves-light btn" onClick={logout}>Logout</a>
            <Row className="container whiteDiv">
                <Col className="col s6">                                      
                <PostForm />
                </Col>
                <Col className="col s6" style={{}}>
                    <AllSubmissions />
                </Col>
            </Row>
        </div>
    )
};
export default Admin;