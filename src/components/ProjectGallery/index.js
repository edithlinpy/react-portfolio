import React from "react";
import "./style.css";
import { Container, Row, Col } from 'react-bootstrap';
import Project from "../../components/Project";
import projects from "../../projects.json";

const baseUrl = "https://github.com/edithlinpy/react-portfolio/blob/main/public/images/";


function ProjectGallery(props) {
  return (
    <Container className="project">
        <Row>
            <Col>
              <Project
                  title={projects[0].title}
                  desc={projects[0].desc}
                  deploy={projects[0].deploy}
                  gitlink={projects[0].gitlink}
                  image={baseUrl + projects[0].image}
              />
            </Col>
            {/* <Col>
              <Project
                  title={projects[1].title}
                  desc={projects[1].desc}
                  deploy={projects[1].deploy}
                  gitlink={projects[1].gitlink}
                  image={projects[1].image}
              />
            </Col>
            <Col>
              <Project
                  title={projects[2].title}
                  desc={projects[2].desc}
                  deploy={projects[2].deploy}
                  gitlink={projects[2].gitlink}
                  image={projects[2].image}
              />
            </Col> */}
        </Row>
    </Container>
  );
}

export default ProjectGallery;
