import React from "react";
import Icon from "../../assets/images/icon.png";


const Header = () => {
  return (
    <>
      <div className="header">
        <div className="icon">
          <img height={90} width={210} src={Icon} alt="icon-1" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Info</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="btns">
          <button className="sign-in">Sign-Up</button>
          <button className="log-in">Log-in</button>
        </div>
      </div>
    </>
  );
};

export default Header;
