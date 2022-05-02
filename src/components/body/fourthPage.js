import "../../style/fourthPage.scss";
import Card from "../../components/body/card";
import CardYear from "../../components/body/cardYear";
import React, { useState } from "react";

function FourthPage() {
  const [show, setShow] = useState(true);
  return (
    <div className="fourthLoadPage">
      <p>Get your best deal</p>
      <div className="switchBtn">
        <p className="firstPtag">Monthly</p>
        <label class="switch">
          <input type="checkbox" onClick={() => setShow(!show)} />
          <span class="slider round"></span>
        </label>
        <p className="secondPtag">Yearly</p>
      </div>

      {show ? <Card /> : <CardYear />}
    </div>
  );
}

export default FourthPage;
