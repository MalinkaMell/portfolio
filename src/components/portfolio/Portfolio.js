import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import portfolio from '../../data/portfolio.json';

const tags = ["All", "JavaScript", "MySQL", "jQuery", "Ajax", "Node.js", "Express", "Handlebars", "Sequelize", "MongoDB", "ReactJS", "Axios"]

const Portfolio = () => {
  const [items, setItems] = useState(portfolio);
  
  const tagRender = (tag) => {
    let selectedTag = portfolio.filter(item => item.tags.includes(tag));
    tag === "All" ? setItems(portfolio) : setItems(selectedTag);
  }

  return (
    <section id="portfolio">
      
      <Row className="d-flex justify-content-center">
        {tags.map(tag => <button className="btn-filters hvr-bounce-to-bottom" onClick={() => tagRender(tag)}>{tag}</button>)}
      </Row>
      <Row className="d-flex justify-content-center text-center m-3">
      <p>
        This website is made from "bootscracth": designed and developed by myself using ReacJs, React Bootstrap, Font Awesome and Animate.css.
      </p>
      </Row>
      {
        items.map(item => (
          <div key={item.id}>
            <Row className="my-bg-light py-3 shadow-2dp rounded m-3">
              <Col md={6}>
                <Image fluid rounded src={"assets/images/portfolio/" + item.image} />
              </Col>
              <Col md={6}>
                <h5 className="text-white mt-2 mt-md-0">{item.title}</h5>
                <hr className="dashed-light-gray" />
                <small>{[...item.tags].join(" | ")}</small>

                <p className="my-2 text-white">{item.desc}</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                      <small>Github repository</small></a></li>
                  <li className="list-inline-item">
                    <a href={item.demo} target="_blank" rel="noopener noreferrer">
                      <small>Project Demo</small></a></li>
                </ul>
              </Col>
            </Row>
            <hr className="dashed-gray" />
          </div>
        ))
      }
    </section>
  );
}


export default Portfolio;