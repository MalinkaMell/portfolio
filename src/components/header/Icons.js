import React from "react";
import icons from "../../data/icons.json";

const SocialIcons = () => {
  return (
    icons.map((icon, index) =>
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

export default SocialIcons;