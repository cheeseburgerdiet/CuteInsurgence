import React from 'react';
import {Col, Row} from 'react-materialize';


const AboutInfo = () =>{
    return(
        <div>
            <div>
                <div className="col s6 push-s3">
                    <h3>Who are we?</h3>
                </div>
            </div>
            <div>
                <div className="col s6">
                    <img
                            width={300}
                            className="left-align"
                            style={{marginTop: "20px"}}
                            src="https://i.pinimg.com/originals/b4/c9/9d/b4c99d060fe96a5b57bcd86e27775844.jpg"
                            alt="Rambo Hamster"
                            />
                </div>
                <div className="col s6">
                    <h5>We are warriors
                    </h5>
                    <blockquote>who fight bad days with incredibly cute animal pictures, videos and commentary.<br/>
                    Help us fight the good fight against boredom, grumpiness, and stinky attitudes! <br/> 
                    Follow the 5 sacred rules and send us a content submission with the form below to contribute to our cause!
                        <p>Rule 5 - it must be cute</p>
                        <p>Rule 4 - it must be kind</p>
                        <p>Rule 3 - it must be sweet</p>
                        <p>Rule 2 - it must be inspiring</p>
                        <p>Rule 1 - it must make you lolz</p>
                </blockquote>
                </div>
            </div>
        </div>
    )
};

export default AboutInfo;
