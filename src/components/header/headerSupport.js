import "../../style/headerSupport.scss";
import HeaderBanner from "./headerBanner";
import HeaderImgs from "./headerImgs";
import Manu from "./manu";

function HeaderSupport() {
  return (
    <div className="headserSupport">
      <Manu />
      <HeaderBanner />
      <HeaderImgs />
    </div>
  );
}

export default HeaderSupport;
