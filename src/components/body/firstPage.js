import "../../style/firstPage.scss";
import imCenter from "../../assets/Group15.png";

function firstPage() {
  return (
    <div className="firstLoadPage">
      <p>Open new tabs is sh*t </p>
      <div className="center">
        <div className="center-content">
          <img className="imgCenter" src={imCenter} alt="TabImg" />
        </div>
      </div>
      <p className="secondP">
        A solution for your browser tabs and don’t make your device get slower
        over time. <br /> Get ease and faster to discover a trend with just one
        tab.
      </p>
    </div>
  );
}

export default firstPage;
