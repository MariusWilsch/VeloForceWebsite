import './footer.css';

const SocialLink = ({ label, url, iconSrc }) => {
  return (
    <li className="cs-social-li">
      <a href={url} className="cs-social-link" aria-label={label} target="_blank" rel="noopener">
        <img className="cs-social-icon cs-default" src={iconSrc} alt="icon" loading="lazy" decoding="async" width="12" height="12" aria-hidden="true" />
      </a>
    </li>
  );
};

const BottomSection = () => {
  return (
    <div className="cs-bottom">
      <ul className="cs-social">
        <SocialLink label="facebook" url="" iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-ba.svg" />
        <SocialLink label="twitter" url="" iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-ba.svg" />
        <SocialLink label="instagram" url="" iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-ba.svg" />
        <SocialLink label="youtube" url="" iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-ba.svg" />
      </ul>
      <span className="cs-copyright">
        © Copyright 2023 - <a href="" className="cs-copyright-link">Veloxforce</a>
      </span>
      <div className="cs-flex">
        <a href="" className="cs-copyright-link underline-on-hover">Privacy Policy</a>
        <span className="cs-separater">|</span>
        <a href="" className="cs-copyright-link underline-on-hover">Terms of Use</a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <section id="footer-1390">

      <div className="cs-container ">
        <div className="cs-top">
        </div>
        <BottomSection />
      </div>
    </section>
  );
};

export default Footer;