import React from 'react';
import AboutInfo from '../components/AboutInfo';
import SubmissionForm from '../components/SubmissionForm'
import { } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <h1>Views/AboutUs.js</h1>
            <div style={{
                display: "flex", flexFlow: "row nowrap", justifyContent: "space-around", alignContent: "baseline", border: "3px solid black"
            }}>
                <AboutInfo />
            </div>
            <hr />
            <div>
                <SubmissionForm />
            </div>
        </div>
    )
};

export default AboutUs;