import React from 'react';
import { Row, Col } from "react-bootstrap";

const Education = () => {
  return (
    <React.Fragment>
      <div className="category text-white text-uppercase">
        <i className="fas fa-university"></i> Education</div>
      <div className="category-inner">
        <Row>
          <Col xs={8} >
            <h6>Coding Bootcamp</h6>
            <small>University of Arizona</small>
          </Col>
          <Col xs={4} className="text-muted small">
            08/2019 - 02/2020<br />
            Phoenix AZ, US
          </Col>
        </Row>
        <hr className="dashed w-100" />
      </div >
    </React.Fragment>
  );
}

export default Education;