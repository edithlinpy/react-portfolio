import React from "react";
import "./style.css";
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <Container>
      <Row>
        <Col className="text-center"><Link to="https://github.com/edithlinpy" target="_blank"><FaGithub style={{fontSize: '25px'}}/> http://bit.ly/3Qw1dhA</Link> 
        </Col>
        <Col className="text-center"><Link to="https://www.linkedin.com/in/edithlinpy/" target="_blank"><FaLinkedin style={{fontSize: '25px'}}/> http://bit.ly/3VSDBVr</Link> 
        </Col>
        <Col className="text-center"><Link to="mailto:edithlinpy@gmail.com"><FaAt style={{fontSize: '25px'}}/> edithlinpy@gmail.com</Link> 
        </Col>
      </Row>
      </Container>
    </footer>
  );
}

export default Footer;
