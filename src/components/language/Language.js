import React from 'react';
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Lang = () => {
  return (
    <React.Fragment>
      <div className="category text-white text-uppercase">
        <i className="fas fa-language"></i> Language Skills</div>
      <div className="category-inner">
        <ListGroup variant="flush">
          <ListGroupItem>Italian</ListGroupItem>
          <ListGroupItem>Russian</ListGroupItem>
          <ListGroupItem><a href="assets/files/Berlitz.pdf"
            target="_blank" rel="noopener noreferrer" className="white-90">English - CEFR B2</a></ListGroupItem>
        </ListGroup>
      </div>
    </React.Fragment>
  );
}

export default Lang;