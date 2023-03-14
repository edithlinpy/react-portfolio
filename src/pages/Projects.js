import React from "react"
import ProjectGallery from '../components/ProjectGallery';

// import images for cards
import bgImg from '../images/starry-night.jpg';

function Projects() {
    return (
        <div className="projects" style={{ backgroundImage: `url(${bgImg})` }}>
            <h1 className="text-center">My recent projects</h1>
            <ProjectGallery />
        </div>
    )
}

export default Projects;