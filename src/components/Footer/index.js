import React from "react";
import "./style.css";
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <Container>
      <Row>
        <Col className="text-center"><a href="https://github.com/edithlinpy" target="_blank"><FaGithub style={{fontSize: '25px'}}/> http://bit.ly/3Qw1dhA</a> 
        </Col>
        <Col className="text-center"><a href="https://www.linkedin.com/in/edithlinpy/" target="_blank"><FaLinkedin style={{fontSize: '25px'}}/> http://bit.ly/3VSDBVr</a> 
        </Col>
        <Col className="text-center"><a href="mailto:edithlinpy@gmail.com"><FaAt style={{fontSize: '25px'}}/> edithlinpy@gmail.com</a> 
        </Col>
      </Row>
      </Container>
    </footer>
  );
}

export default Footer;
