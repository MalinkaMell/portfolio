import React from 'react';
import './pages.css';

const Resume = () => {
  return (
    <div className="row">
      <div className="col-md-8 animated bounceInLeft">
        <div className="category text-white text-uppercase">
          <i className="fas fa-briefcase"></i> Employment</div>
        <div className="category-inner">
          <div className="row ">
            <div className="col-8">
              <h6 className="text-white">
                Advertising Business Consultants, LLC</h6>
              <small>Web Design</small>
            </div>
            <div className="col-4 text-muted small">
              09/2015 - 08/2017<br />
              Phoenix AZ, US
            </div>
          </div>
          <hr className="dashed" />
          <div className="row ">
            <div className="col-8">
              <h6 className="text-white">
                Mousee Games, LLC</h6>
              <small>Mobile Games Design and Development in Unity 3D</small>
            </div>
            <div className="col-4 text-muted small">
              03/2012 - 06/2015<br />
              Phoenix AZ, US
            </div>
          </div>
          <hr className="dashed" />
          <div className="row ">
            <div className="col-8">
              <h6 className="text-white">
                Golden Worlds EMG</h6>
              <small>Product Development Specialist </small>
            </div>
            <div className="col-4 text-muted small">
              07/2011 - 02/2012<br />
              Phoenix AZ, US
            </div>
          </div>
          <hr className="dashed" />
          <div className="row ">
            <div className="col-8">
              <h6 className="text-white">
                Kalicanthus Entertainment S.R.L.</h6>
              <small>Product manager </small>
            </div>
            <div className="col-4 text-muted small">
              04/2007 - 05/2011<br />
              Milan, Italy
            </div>
          </div>
          <hr className="dashed" />
          <div className="row ">
            <div className="col-8">
              <h6 className="text-white">
                Intrasoft S.P.A.</h6>
              <small>Product manager </small>
            </div>
            <div className="col-4 text-muted small">
              06/2004 - 12/2006<br />
              Milan, Italy
            </div>
          </div>
        </div>


        <div className="category text-white text-uppercase">
          <i className="fas fa-university"></i> Education</div>
        <div className="category-inner">
          <div className="row ">
            <div className="col-8">
              <h6 className="text-white">
                Coding Bootcamp</h6>
              <small>University of Arizona</small>
            </div>
            <div className="col-4 text-muted small">
              08/2019 - current<br />
              Phoenix AZ, US
            </div>
          </div>

        </div>
      </div>
      <div className="col-md-4  animated bounceInRight">
        <div className="category text-white text-uppercase">
          <i className="fas fa-cog"></i> Programming Skills</div>
        <div className="category-inner">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">HTML/HTML 5/CSS3</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">jQuery</li>
            <li className="list-group-item">MySQL/NoSQL</li>
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">Express</li>
            <li className="list-group-item">ReactJS</li>
          </ul>
        </div>
        <div className="category text-white text-uppercase">
          <i className="fas fa-tools"></i> Tools</div>
        <div className="category-inner">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">AWS</li>
            <li className="list-group-item">Twitter Bootstrap</li>
            <li className="list-group-item">React Bootstrap</li>
            <li className="list-group-item">Wordpress</li>
            <li className="list-group-item">Drupal</li>
            <li className="list-group-item">Magento</li>
            <li className="list-group-item">Adobe Photoshop</li>

          </ul>
        </div>
        <div className="category text-white text-uppercase">
          <i className="fas fa-language"></i> Language Skills</div>
        <div className="category-inner">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Italian</li>
            <li className="list-group-item">Russian</li>
            <li className="list-group-item"><a href="assets/files/Berlitz.pdf"
              target="_blank" rel="noopener noreferrer" className="white-90">
              English - CEFR B2</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-1 w-100">
        <a href="/assets/files/Irina_Kudosova_Resume.docx"
          className="btn-resume hvr-bounce-to-right ubuntu text-uppercase">
          <i className="fas fa-download" aria-hidden="true"></i> Download resume</a>
      </div>

    </div>
  );
}

export default Resume;