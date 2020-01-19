import React from 'react';
import './pages.css';
import { Row, Col, Image } from 'react-bootstrap';
import items from '../../portfolio.json';

class Portfolio extends React.Component {
  state = {
    items: items,
    tag: "all"
  }

  tagRender = (tag) => {
    if (tag === "All") {
      this.setState({ items: items })
    } else {
      this.setState({ items: items.filter(item => item.tags.includes(tag)) });    
    }
  }
  render() {
    return (
      <section id="portfolio">
        <Row className="d-flex justify-content-center">
          <button className="btn-filters hvr-bounce-to-bottom" onClick={() => this.tagRender("All")}>All</button>
          <button className="btn-filters hvr-bounce-to-bottom" onClick={() => this.tagRender("MySQL")}>MySQL</button>
          <button className="btn-filters hvr-bounce-to-bottom" onClick={() => this.tagRender("jQuery")}>jQuery</button>
          <button className="btn-filters hvr-bounce-to-bottom" onClick={() => this.tagRender("Ajax")}>Ajax</button>
          <button className="btn-filters hvr-bounce-to-bottom" onClick={() => this.tagRender("Node.js")}>Node.js</button>
          <button className="btn-filters hvr-bounce-to-bottom" onClick={() => this.tagRender("Express")}>Express</button>
          <button className="btn-filters hvr-bounce-to-bottom" onClick={() => this.tagRender("Handlebars")}>Handlebars</button>
          <button className="btn-filters hvr-bounce-to-bottom" onClick={() => this.tagRender("Sequelize")}>Sequelize</button>
          <button className="btn-filters hvr-bounce-to-bottom" onClick={() => this.tagRender("MongoDB")}>MongoDB</button>
          <button className="btn-filters hvr-bounce-to-bottom" onClick={() => this.tagRender("Mongoose")}>Mongoose</button>
          <button className="btn-filters hvr-bounce-to-bottom" onClick={() => this.tagRender("ReactJS")}>ReactJS</button>
          <button className="btn-filters hvr-bounce-to-bottom" onClick={() => this.tagRender("Axios")}>Axios</button>
        </Row>
        {
          this.state.items.map(item => (
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

}


export default Portfolio;