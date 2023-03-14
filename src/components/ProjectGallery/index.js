import React from "react";
import "./style.css";
import { Container, Row, Col } from 'react-bootstrap';
import Project from "../../components/Project";
import projects from "../../projects.json";

const baseUrl = "https://raw.githubusercontent.com/edithlinpy/react-portfolio/main/public/images/";

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
            <Col>
              <Project
                  title={projects[1].title}
                  desc={projects[1].desc}
                  deploy={projects[1].deploy}
                  gitlink={projects[1].gitlink}
                  image={baseUrl + projects[1].image}
              />
            </Col>
            <Col>
              <Project
                  title={projects[2].title}
                  desc={projects[2].desc}
                  deploy={projects[2].deploy}
                  gitlink={projects[2].gitlink}
                  image={baseUrl + projects[2].image}
              />
            </Col>
            <Col>
              <Project
                  title={projects[3].title}
                  desc={projects[3].desc}
                  deploy={projects[3].deploy}
                  gitlink={projects[3].gitlink}
                  image={baseUrl + projects[3].image}
              />
            </Col>
            <Col>
              <Project
                  title={projects[4].title}
                  desc={projects[4].desc}
                  deploy={projects[4].deploy}
                  gitlink={projects[4].gitlink}
                  image={baseUrl + projects[4].image}
              />
            </Col>
            <Col>
              <Project
                  title={projects[5].title}
                  desc={projects[5].desc}
                  deploy={projects[5].deploy}
                  gitlink={projects[5].gitlink}
                  image={baseUrl + projects[5].image}
              />
            </Col>
        </Row>
    </Container>
  );
}

export default ProjectGallery;
