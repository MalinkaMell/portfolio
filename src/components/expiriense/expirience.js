import React from 'react';
import { Row, Col } from "react-bootstrap";
import exp from '../../expirience.json'

const Expirience = () => {
  return (
    <React.Fragment>
      <div className="category text-white text-uppercase">
        <i className="fas fa-briefcase"></i> Employment</div>
      <div className="category-inner">

        {
          exp.map((item, index) => (
            <Row key={index}>
              <Col xs={8}>
                <h6 className="text-white">
                  {item.companyName}</h6>
                <small>Web Design</small>
              </Col>
              <Col xs={4} className="text-muted small">
                {`${item.startDate} - ${item.endDate}`}<br />
                {item.location}
              </Col>
              <hr className="dashed w-100" />
            </Row>
          ))
        }

      </div>
    </React.Fragment>
  );

}

export default Expirience;