import "../../style/headerImgs.scss";
import tab1 from "../../assets/tab1.png";
import tab2 from "../../assets/tab2.png";
import tab3 from "../../assets/tab3.png";
import tab4 from "../../assets/tab4.png";

function HeaderImgs() {
  return (
    <div className="images">
      <a href="https://twitter.com/" target="_blank" className="tab1">
        <img src={tab1} alt="TabImg" />
      </a>
      <a href="https://www.pinterest.com/" target="_blank" className="tab2">
        <img src={tab2} alt="TabImg" />
      </a>
      <a href="https://www.facebook.com/" target="_blank" className="tab3">
        <img src={tab3} alt="TabImg" />
      </a>
      <a
        href="https://news.sky.com/topic/elon-musk-6730"
        target="_blank"
        className="tab4"
      >
        <img src={tab4} alt="TabImg" />
      </a>
    </div>
  );
}

export default HeaderImgs;
