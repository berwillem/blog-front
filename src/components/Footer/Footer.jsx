import "./Footer.css";
import PDF from "./../../assets/term.pdf";

const Footer = () => {
  return (
    <>
      <div className="TermsAndPolicy">
        <h1 className="Terms">© 2024 GoMyCode, Inc.</h1>
        <a href={PDF} target="_blank">
          Terms And Policy
        </a>
      </div>
    </>
  );
};

export default Footer;
