import React, { useState } from "react";
import "../../style/thirdPage.scss";
import ic1 from "../../assets/firstIcon.png";
import ic2 from "../../assets/secondIcon.png";
import ic3 from "../../assets/thirdIcon.png";
import ic4 from "../../assets/forthIcon.png";
import ic5 from "../../assets/fifthIcon.png";
import ic6 from "../../assets/sixthIcon.png";
import ic7 from "../../assets/seventhIcon.png";
import ic8 from "../../assets/eighthIcon.png";
// import news1 from "../../assets/news1.png";
// import news2 from "../../assets/news2.png";
// import news3 from "../../assets/news3.png";
import News from "../../components/body/news";
import n1 from "../../assets/news1.png";
import n2 from "../../assets/news2.png";
import n3 from "../../assets/tesla.png";
import n4 from "../../assets/tesla2.png";
import n5 from "../../assets/tesla3.png";
import n6 from "../../assets/tesla4.png";
import n7 from "../../assets/tesla5.png";
import n8 from "../../assets/tesla6.png";

function ThirdPage() {
  // const [show, setShow] = useState(true);
  const [active, setActive] = useState("firstNews");

  return (
    <div className="thirdLoadPage">
      <p>All platform connect to Findtrend </p>
      <div className="icons">
        <a onClick={() => setActive("firstNews")}>
          <img src={ic1} alt="Icon" />
        </a>
        <a onClick={() => setActive("secondNews")}>
          <img src={ic2} alt="Icon" />
        </a>
        <a onClick={() => setActive("thirdNews")}>
          <img src={ic3} alt="Icon" />
        </a>
        <a onClick={() => setActive("fourthNews")}>
          <img src={ic4} alt="Icon" />
        </a>
        <a onClick={() => setActive("fifthhNews")}>
          <img src={ic5} alt="Icon" />
        </a>
        <a onClick={() => setActive("sixththNews")}>
          <img src={ic6} alt="Icon" />
        </a>
        <a onClick={() => setActive("seventhhNews")}>
          <img src={ic7} alt="Icon" />
        </a>
        <a onClick={() => setActive("eighthNews")}>
          <img src={ic8} alt="Icon" />
        </a>
      </div>
      <div className="news">
        {active === "firstNews" && <News img={n1} />}
        {active === "secondNews" && <News img={n2} />}
        {active === "thirdNews" && <News img={n3} />}
        {active === "fourthNews" && <News img={n4} />}
        {active === "fifthhNews" && <News img={n5} />}
        {active === "sixththNews" && <News img={n6} />}
        {active === "seventhhNews" && <News img={n7} />}
        {active === "eighthNews" && <News img={n8} />}

        {/* <img src={news1} alt="News" />
        <img src={news2} alt="News" />
        <img src={news3} alt="News" /> */}
      </div>

      {/* {show && (
        <div className="news2">
          <img src={news1} alt="News" />
          <img src={news2} alt="News" />
          <img src={news3} alt="News" />
        </div>
      )} */}
      {/* onClick={() => setShow(!show)} */}

      {/* <a className="btn">View more/less trend</a> */}
    </div>
  );
}

export default ThirdPage;
