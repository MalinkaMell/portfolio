import React from 'react';
import './pages.css';

const Contact = () => {
  return (
      <div className="row">
        <div className="col-md-5">
          <address>
            <ul>
              <li className="contact white-90 hvr-sweep-to-right">
                <i className="fa fa-phone text-white" aria-hidden="true"></i>
                <a href="Tel:+16024779497">+1 (602) 477-9497</a></li>
              <li className="contact white-90 hvr-sweep-to-right"><i
                className="fa fa-envelope text-white" aria-hidden="true"></i>
                <a href="Mailto:irinakudosova@gmail.com">irinakudosova@gmail.com</a>
              </li>
            </ul>
          </address>
        </div>
        <div className="col-md-3">
          <address>
            <ul>
              <li className="contact white-90 hvr-sweep-to-right"><i
                className="fab fa-linkedin-in text-white"
                aria-hidden="true"></i>
                <a href="https://www.linkedin.com/in/irina-kudosova-b5238914b/"
                  target="_blank" rel="noopener noreferrer">
                  Linkedin Profile</a></li>
              <li className="contact white-90 hvr-sweep-to-right"><i
                className="fab fa-github text-white" aria-hidden="true"></i>
                <a href="https://github.com/MalinkaMell" target="_blank" rel="noopener noreferrer">
                  Github repository</a></li>
            </ul>
          </address>
        </div>
        <div className="col-md-4">
          <a href="/assets/files/Irina_Kudosova_Resume.docx"
            className="btn-resume hvr-bounce-to-right ubuntu text-uppercase">
            <i className="fas fa-download" aria-hidden="true"></i> Download resume</a>
        </div>
      </div>
  );
}

export default Contact;