import React from "react";
import SocialIcons from "./Icons"

const Header = () => {
  return (
    <header className="row justify-content-center" id="social-icons">
      <div className="col-md-9 social-bar d-flex p-2 justify-content-end align-items-center">
        <SocialIcons />
      </div>
    </header>
  );
}

export default Header;