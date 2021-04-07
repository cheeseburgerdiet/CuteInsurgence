<<<<<<< HEAD
import React from "react";
import { Container, Row, Col, Media } from "react-bootstrap";

const AboutInfo = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Media>
              <img
                width={300}
                className=" mr-3"
                src="https://i.pinimg.com/originals/b4/c9/9d/b4c99d060fe96a5b57bcd86e27775844.jpg"
                alt="Rambo Hamster"
              />
              <Media.Body>
                <h1>Who are we?</h1>
                <h4>We are warriors</h4>
                <h5>
                  who fight bad days with incredibly cute animal pictures,
                  videos and commentary.
                  <br /> Help us fight the good fight against boredom,
                  grumpiness, and stinky attitudes! Follow the 5 sacred rules
                  and send us a content submission with the form below to
                  contribute to our cause!
                  <br />
                  <br />
                  The 5 sacred rules:
                  <br />
                  <br />
                  Rule 5 - it must be cute
                  <br />
                  <br />
                  Rule 4 - it must be kind
                  <br />
                  <br />
                  Rule 3 - it must be sweet
                  <br />
                  <br />
                  Rule 2 - it must be inspiring
                  <br />
                  <br />
                  Rule 1 - it must make you lolz
                  <br />
                  <br />
                </h5>
                <br />
              </Media.Body>
            </Media>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
=======
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
                    <blockquote>who fight bad days with incredibly cute animal pictures, videos and commentary.<br/> Help us fight the good fight against boredom, grumpiness, and stinky attitudes! Follow the 5 sacred rules and send us a content submission with the form below to contribute to our cause!
                        <p>Rule 5 -  it must be cute</p>
                        <p>Rule 4-  it must be kind</p>
                        <p>Rule 3- it must be sweet</p>
                        <p>Rule 2- it must be inspiring</p>
                        <p>Rule 1- it must make you lolz</p>
                </blockquote>
                </div>
            </div>
        </div>
    )
>>>>>>> 50492b843f7ebadc7d74aae1067d2a58eb6f9cb4
};

export default AboutInfo;
