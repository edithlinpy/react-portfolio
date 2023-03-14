import React from "react";
import { Container } from 'react-bootstrap';
import './style.css';

function Contact (props) {

  return (
    <Container className="contact">
      <h5 className="mb-3">Send a message to find out more about me.</h5>
      <form
        onSubmit="handleSubmit"
        method="GET"
        target="_blank"
        >
        <div className="mb-3 pt-0">
            <input
            type="text"
            placeholder="Your name"
            name="name"
            required
            />
        </div>
        <div className="mb-3 pt-0">
            <input
            type="email"
            placeholder="Email"
            name="email"
            required
            />
        </div>
        <div className="mb-3 pt-0">
            <textarea
            placeholder="Your message"
            name="message"
            required
            />
        </div>
        <div className="mb-3 pt-0">
            <button
            type="submit"
            >
            Send a message
            </button>
        </div>
      </form>
    </Container>
  )
}

export default Contact;