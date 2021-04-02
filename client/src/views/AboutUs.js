import React from 'react';
import AboutInfo from '../components/AboutInfo';
import SubmissionForm from '../components/SubmissionForm'
import { Container, Row, Col} from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <Container className= 'cuteinsurgence-single-post'>
                <Row> 
                    <Col>
                        <AboutInfo />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SubmissionForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default AboutUs;