import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="row justify-content-center" id="social-icons">
      <div className="col-md-9 social-bar d-flex p-2 justify-content-end align-items-center">
        <SocialIcon />
      </div>
    </header>
  );
}

const SocialIcon = () => {
  return (
    SocialIconsList.map((icon, index) =>
      <a
        key={index}
        href={icon.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 social-icon animated bounceInDown">
        <i className={"fa-lg " + icon.classFa}></i>
      </a>
    )
  )
}

const SocialIconsList = [
  { "name": "Facebook", "link": "https://www.facebook.com/malinka77", "classFa": "fab fa-facebook-f" },
  { "name": "Linkedin", "link": "https://www.linkedin.com/in/irina-kudosova-b5238914b/", "classFa": "fab fa-linkedin-in" },
  { "name": "Github", "link": "https://github.com/MalinkaMell", "classFa": "fab fa-github" },
  { "name": "Email", "link": "Mailto:irinakudosova@gmail.com", "classFa": "far fa-envelope" }
]

export default Header;