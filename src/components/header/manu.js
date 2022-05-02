import "../../style/header.scss";
import logo from "../../assets/DejanDjukic.jpg";

function Manu() {
  return (
    <div className="manu">
      <div className="logo">
        <a href="https://www.facebook.com/Djule86/" target="_blank">
          <img src={logo} alt="Logo" />
        </a>
        <h3>FindTrend</h3>
      </div>
      <div className="list">
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
      <div className="lastMenu">
        <a href="#" className="login">
          Login
        </a>
        <a href="#" className="register">
          Register
        </a>
      </div>
    </div>
  );
}

export default Manu;
