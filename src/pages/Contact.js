import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-links">
        <a href="mailto:vsubs28@gmail.com" className="contact-link" aria-label="Email">
          <FaEnvelope className="contact-icon" />
          vsubs28@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/vyaassubramanian" target="_blank" rel="noreferrer" className="contact-link" aria-label="LinkedIn">
          <FaLinkedin className="contact-icon" />
          vyaassubramanian
        </a>
        <a href="https://github.com/Vysubs28" target="_blank" rel="noreferrer" className="contact-link" aria-label="GitHub">
          <FaGithub className="contact-icon" />
          Vysubs28
        </a>
      </div>
    </div>
  );
}
