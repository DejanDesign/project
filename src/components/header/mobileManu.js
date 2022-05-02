import "../../style/mobileMenu.scss";
import img from "../../assets/footer.png";
import React, { useEffect } from "react";

function MobileMenu() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div className="mobileMenu">
      <div className="first"></div>
      <div className="second"></div>
      <div className="third"></div>
      <div className="fourth"></div>
      <div className="fifth">
        <div className="list-mobile">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">How It Work</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Solution</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </div>
        <div className="lastMenu-mobile">
          <a href="#" className="login">
            Login
          </a>
          <a href="#" className="register">
            Register
          </a>
        </div>
        <div className="LogoMobile">
          <img className="imgMobile" src={img} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
