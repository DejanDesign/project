import "../../style/main.scss";
import FirstOne from "./firstPage";
import SecondOne from "./secondPage";
import ThirdOne from "./thirdPage";
import FourthdOne from "./fourthPage";
import LastPage from "./lastPage";

function Main() {
  return (
    <div className="mainBody">
      <FirstOne />
      <SecondOne />
      <ThirdOne />
      <FourthdOne />
      <LastPage />
    </div>
  );
}

export default Main;
