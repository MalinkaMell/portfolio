import React from 'react';
import './pages.css';
import { Row, Col, Image } from 'react-bootstrap';
import items from '../../portfolio.json'

class Portfolio extends React.Component {
  state = {
    items: items,
    tag: "all"
  }

  tagRender = (tag) => {
      let items = this.state.items.filter(item => item.tags.includes(tag));
      this.setState({  items: items })
      console.log(items);
      console.log(tag);
      
  }

  render() {
    console.log(items);
    return (
      <section id="portfolio">
        
        <div><button onClick={()=> this.tagRender("MySQL")}>MySQL</button></div>
        {
          items.reverse().map(item => (
            <div key={item.id}>
              <Row className="my-bg-light py-3 shadow-2dp rounded m-3">
                <Col md={6}>
                  <Image fluid rounded src={"assets/images/portfolio/" + item.image} />
                </Col>
                <Col md={6}>
                  <h5 className="text-white">{item.title}</h5>
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

const one = props => {
  
}

export default Portfolio;