import React from 'react';
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Skills = () => {
  return (
    <React.Fragment>
      <div className="category text-white text-uppercase">
        <i className="fas fa-cog"></i> Programming Skills</div>
      <div className="category-inner">
        <ListGroup variant="flush">
          <ListGroupItem>HTML/HTML 5/CSS3</ListGroupItem>
          <ListGroupItem>JavaScript</ListGroupItem>
          <ListGroupItem>jQuery</ListGroupItem>
          <ListGroupItem>MySQL/NoSQL</ListGroupItem>
          <ListGroupItem>Node.js</ListGroupItem>
          <ListGroupItem>Express</ListGroupItem>
          <ListGroupItem>ReactJS</ListGroupItem>
        </ListGroup>
      </div>
    </React.Fragment>
  );
}

export default Skills;