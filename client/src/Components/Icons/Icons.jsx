import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './icons.css';

function icons() {
  return (
    <div id="icons">
      <a href="https://www.github.com/Arevi" title="GitHub">
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
      <a href="mailto:Arevi.Dev@gmail.com" title="Email">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
      </a>
      <a href="Resume.pdf" title="Resume">
        <FontAwesomeIcon icon={faFile} className="icon" />
      </a>
    </div>
  );
}

export default icons;
