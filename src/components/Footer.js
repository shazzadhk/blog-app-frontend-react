import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_bottom}>
        <p>
          Design By - <span>Shazzad Hossain</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
