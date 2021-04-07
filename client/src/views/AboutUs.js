import React from 'react';
import AboutInfo from '../components/AboutInfo';
import SubmissionForm from '../components/SubmissionForm'

const AboutUs = () => {
    return (
        <div className="container componentBackground">
                    <div className="section">
                        <AboutInfo />
                    </div>
                <div className="divider"></div>
                    <div className="section">
                        <SubmissionForm />
                    </div>
                
            </div>
        
    )
};

export default AboutUs;