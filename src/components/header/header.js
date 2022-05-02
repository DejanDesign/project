import "../../style/header.scss";
import HeaderSupport from "./headerSupport";
import MobileMenu from "./mobileManu";
import React, { useState } from "react";

function Header() {
  const [showMobile, setShowMobile] = useState(true);
  function overflow() {
    if (showMobile === false) {
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    }
  }

  overflow();

  return (
    <div className="banner">
      <div className="btnManu">
        <div className="button" onClick={() => setShowMobile(!showMobile)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>

      {showMobile ? <HeaderSupport /> : <MobileMenu />}
    </div>
  );
}

export default Header;
