import "../../style/secondPage.scss";
import firstIcon from "../../assets/Microsoft.png";
import secondIcon from "../../assets/allianz.png";
import thirdIcon from "../../assets/upwork.png";
import forthIcon from "../../assets/volvo.png";
import fifthIcon from "../../assets/grab.png";
import sixthIcon from "../../assets/verizon.png";
import seventhIcon from "../../assets/coinbase.png";
import eighthIcon from "../../assets/expadia.png";
import ninethIcon from "../../assets/airtable.png";
import tenthIcon from "../../assets/magento.png";
import eleventhIcon from "../../assets/carrera.png";
import twelvethIcon from "../../assets/bonnanza.png";
import thirteenthIcon from "../../assets/weTransfer.png";
import fourteenthIcon from "../../assets/suzuki.png";
import fifteenthIcon from "../../assets/algolia.png";
import sixteenthIcon from "../../assets/heineken.png";

function secondPage() {
  return (
    <div className="secondLoadPage">
      <div className="firstContent">
        <h3>
          Findtrend helps you to increase your productivity and reduce your
          computer's memory load,
          <a>an application that can fulfill your daily browsing needs.</a>
        </h3>
      </div>
      <p>Findtrend make +1000 Startup grow</p>
      <div className="iconList">
        <a href="#">
          <img src={firstIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={secondIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={thirdIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={forthIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={fifthIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={sixthIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={seventhIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={eighthIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={ninethIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={tenthIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={eleventhIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={twelvethIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={thirteenthIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={fourteenthIcon} alt="Microsoft" />
        </a>
        <a href="#">
          <img src={fifteenthIcon} alt="Microsoft" />
        </a>
        <a>
          <img src={sixteenthIcon} alt="Microsoft" />
        </a>
      </div>
    </div>
  );
}

export default secondPage;
