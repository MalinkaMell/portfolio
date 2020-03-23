import React, { useState } from 'react';
import './Body.css';
import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap';
import Profile from '../profile/Profile';
import Resume from '../resume/Resume';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact'; 
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


const Body = () => {
  const [section, setSection] = useState(pages);

  const CustomToggle = ({ children, eventKey, id }) => {
    const decoratedOnClick = useAccordionToggle(eventKey, () => {
      const newSection = section.map(item => {
        if (id === item.id) {
          if(item.active) {
            item.active = false
          } else {
            item.active = true
          }
        }
        return item;
      })
      setSection(newSection)
    });
    return (
      <div onClick={decoratedOnClick} className=" d-flex justify-content-start">
        {children}
      </div>
    );
  }

  return (
    <section className="row justify-content-center" id="main" >
      <div className="col-md-9">

        <Accordion defaultActiveKey={0}>
          {
            section.map((page, index) =>
              <Card key={index}>
                <Card.Header>
                  <CustomToggle eventKey={index} className="mb-0" id={page.id}>
                    <div className="col-auto card-icon one d-flex align-items-center">
                      <i className={"fa fa-2x " + page.iconName} aria-hidden="true"></i>
                    </div>

                    <div className="h5 col-auto h-title card-title d-flex align-items-center text-uppercase">
                      {page.name}
                    </div>

                    <div className="col-auto card-icon-end d-flex align-items-center">
                      <i className={page.active ? "fa fa-chevron-up fa-2x" : "fa fa-chevron-down fa-2x"} aria-hidden="true"></i>
                    </div>

                  </CustomToggle>
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

const pages = [
  {
    "id": 1,
    "name": "Profile",
    "renderPage": <Profile />,
    "iconName": "fa-user",
    "active": true
  },
  {
    "id": 2,
    "name": "Resume",
    "renderPage": <Resume />,
    "iconName": "fa-bars",
    "active": false
  },
  {
    "id": 3,
    "name": "Portfolio",
    "renderPage": <Portfolio />,
    "iconName": "fa-briefcase",
    "active": false
  },
  {
    "id": 4,
    "name": "Contact",
    "renderPage": <Contact />,
    "iconName": "fa-envelope",
    "active": false
  }
];

export default Body;