import React from 'react';
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Tools = () => {
  return (
    <React.Fragment>
      <div className="category text-white text-uppercase">
        <i className="fas fa-tools"></i> Tools</div>
      <div className="category-inner">
        <ListGroup variant="flush">
          <ListGroupItem>Twitter Bootstrap</ListGroupItem>
          <ListGroupItem>React Bootstrap</ListGroupItem>
          <ListGroupItem>MDBootstrap</ListGroupItem>
          <ListGroupItem>WordPress</ListGroupItem>
          <ListGroupItem>Big Commerce</ListGroupItem>
          <ListGroupItem>Adobe Photoshop</ListGroupItem>
        </ListGroup>
      </div>
    </React.Fragment>
  );
}

export default Tools;