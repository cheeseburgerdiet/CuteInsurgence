import React from 'react';
import {Jumbotron, Container, Row, Col, Image, Nav} from 'react-bootstrap';


const Header = () =>{
    return(
        <div>
            <Container className=''>
                <Nav className="justify-content-end">
                    <Nav.Item  >
                        <Nav.Link eventKey="link-2" href=" /admin/login">Admin</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div style = {{fontFamily: 'Underdog'}}>
                    <Jumbotron className='header-all' rounded= "true" fluid>
                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                <Image thumbnail= "true" src="https://i.pinimg.com/originals/cd/b6/f8/cdb6f8eda8afb3fa3046d8aad39cccd8.jpg" roundedCircle />
                                </Col>
                                <Col>
                                    <div style= {{color: "#477ff6"}}>
                                        <h1>Cute Insurgence!</h1>
                                        <h5>
                                        The cutest revolution of the 21st century, made by the people for the people. 
                                        </h5>
                                        <Nav className="justify-content-center" activeKey="/home">
                                        <Nav.Item>
                                            <Nav.Link href="/aboutus">About Us / Create Post</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="link-1" href=" /cuteinsurgence">Home</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </div>
                                </Col>
                                <Col xs={6} md={3}>
                                <Image  thumbnail= "true" src="https://i.pinimg.com/originals/9e/f4/8d/9ef48d4f13d46e494177b510c01f331a.png" roundedCircle/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>     
                </div>
            </Container>
        </div>
    )
};

export default Header;