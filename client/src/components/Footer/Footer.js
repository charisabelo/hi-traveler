import "./Footer.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footer__logo"></div>
      <div className="footer__copyright">
        © {year} Island Traveler, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
