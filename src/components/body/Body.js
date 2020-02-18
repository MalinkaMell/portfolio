import React from 'react';
import './Body.css';
import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap';
import Profile from '../pages/Profile';
import Resume from '../pages/Resume';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';




class Body extends React.Component {
  state = {
    active: false
  }


  CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      this.setState(prevState => ({ active: !prevState.active }))
    );

    return (
      <div onClick={decoratedOnClick} className=" d-flex justify-content-start">
        {children}
      </div>
    );
  }

  render() {
    return (
      <section className="row justify-content-center" id="main">
        <div className="col-md-9">
          <Accordion defaultActiveKey={0}>
            {
              Pages.map((page, index) =>
                <Card key={index}>
                  <Card.Header>
                    <this.CustomToggle eventKey={index} className="mb-0">
                      <div className="col-auto card-icon one d-flex align-items-center">
                        <i className={"fa fa-2x " + page.iconName} aria-hidden="true"></i>
                      </div>

                      <div className="h5 col-auto h-title card-title d-flex align-items-center text-uppercase">
                        {page.name}
                      </div>

                      <div className="col-auto card-icon-end d-flex align-items-center">
                        <i className={this.state.active ? "fa fa-chevron-down fa-2x" : "fa fa-chevron-up fa-2x"} aria-hidden="true"></i>
                      </div>

                    </this.CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                      {page.renderPage}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            }

          </Accordion>
        </div>
      </section>
    );
  }

}

const Pages = [
  {
    "id": 1,
    "name": "Profile",
    "renderPage": <Profile />,
    "iconName": "fa-user"
  },
  {
    "id": 2,
    "name": "Resume",
    "renderPage": <Resume />,
    "iconName": "fa-bars"
  },
  {
    "id": 3,
    "name": "Portfolio",
    "renderPage": <Portfolio />,
    "iconName": "fa-briefcase"
  },
  {
    "id": 4,
    "name": "Contact",
    "renderPage": <Contact />,
    "iconName": "fa-envelope"
  }
];

export default Body;