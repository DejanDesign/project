import "../../style/footer.scss";
import img from "../../assets/footer.png";

function Footer() {
  return (
    <div className="footer">
      <div className="Logo">
        <img className="imgFooter" src={img} alt="Logo" />
      </div>

      <div className="footerList">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Contact Us</a>
        <a href="#">Careers</a>
      </div>
    </div>
  );
}

export default Footer;
