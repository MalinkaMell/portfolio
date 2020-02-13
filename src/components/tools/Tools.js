import React from 'react';
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Tools = () => {
  return (
    <React.Fragment>
      <div className="category text-white text-uppercase">
        <i className="fas fa-tools"></i> Tools</div>
      <div className="category-inner">
        <ListGroup variant="flush">
          <ListGroupItem>AWS</ListGroupItem>
          <ListGroupItem>Twitter Bootstrap</ListGroupItem>
          <ListGroupItem>React Bootstrap</ListGroupItem>
          <ListGroupItem>Wordpress</ListGroupItem>
          <ListGroupItem>Drupal</ListGroupItem>
          <ListGroupItem>Magento</ListGroupItem>
          <ListGroupItem>Adobe Photoshop</ListGroupItem>
        </ListGroup>
      </div>
    </React.Fragment>
  );
}

export default Tools;