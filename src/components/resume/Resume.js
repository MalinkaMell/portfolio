import React from 'react';
import Expirience from './Expirience';
import Education from './Education';
import Lang from './Language';
import Skills from './Skills';
import Tools from './Tools';

const Resume = () => {
  return (
    <div className="row">
      <div className="col-md-8 animated bounceInLeft">
        <Expirience />
        <Education />
      </div>
      <div className="col-md-4  animated bounceInRight">
        <Skills />
        <Tools />
        <Lang />
      </div>
      <div className="mt-1 w-100">
        <a href="assets/files/Irina_Kudosova_Resume.pdf"
          className="btn-resume hvr-bounce-to-right ubuntu text-uppercase"
          rel="noopener noreferrer"
          target="blank"  >
          <i className="fas fa-download" aria-hidden="true"></i> Download resume</a>
      </div>

    </div>
  );
}

export default Resume;