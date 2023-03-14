import React from "react";
import Home from '../components/Home';
import { Container, Row, Col } from 'react-bootstrap';
import headshot from '../images/profile1.webp';

function About() {
    return (
        <div>
            <Home backgroundImage="https://i.imgur.com/nhX3VEW.jpeg">
                <Container>
                    <Row>
                        <Col xs={4} className="d-flex align-items-end justify-content-end">
                            <img src={headshot} alt="Headshot"></img>
                        </Col>
                        <Col xs={8} className="align-items-start">
                            <h2>Welcome to My Portfolio</h2>
                            <h1>EDITH LIN</h1>
                        </Col>
                    </Row>
                </Container>
            </Home>
        </div>
    )
}

export default About;