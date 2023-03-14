import React from "react";
import Contact from "../components/Contact";

// import images for cards
import bgImg from '../images/starry-night.jpg';

function ContactForm() {
    return (
        <div style={{ backgroundImage: `url(${bgImg})` }}>
            <Contact />
        </div>
    )
}

export default ContactForm;