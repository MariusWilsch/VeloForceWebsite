import './footer.css';

// Create a list item component that I can reuse in Top Section

interface ListItemProps {
  link: string;
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ link, text }) => {
  return (
    <li className="cs-li underline-on-hover">
      <a href={link} className="cs-link ">{text}</a>
    </li>
  );
}

const TopSection = () => {
  return (
    <div className="cs-top">
      <a aria-label="go back to home" className="cs-logo" href="">
        <img className="cs-logo-img" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Logos/agency-logo.svg" alt="logo" width="209" height="40" />
      </a>
      <ul className="cs-ul">
        <ListItem link="" text="Home" />
        <ListItem link="" text="About" />
        <ListItem link="" text="Services" />
        <ListItem link="" text="Contact" />
      </ul>
    </div>
  );
};

const BottomSection = () => {
  return (
    <div className="cs-bottom">
      <ul className="cs-social">
        <li className="cs-social-li">
          <a href="" className="cs-social-link" aria-label="facebook" target="_blank" rel="noopener">
            <img className="cs-social-icon cs-default" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-ba.svg" alt="icon" loading="lazy" decoding="async" width="12" height="12" aria-hidden="true" />
          </a>
        </li>
        <li className="cs-social-li">
          <a href="" className="cs-social-link" aria-label="twitter" target="_blank" rel="noopener">
            <img className="cs-social-icon cs-default" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-ba.svg" alt="icon" loading="lazy" decoding="async" width="12" height="12" aria-hidden="true" />
          </a>
        </li>
        <li className="cs-social-li">
          <a href="" className="cs-social-link" aria-label="instagram" target="_blank" rel="noopener">
            <img className="cs-social-icon cs-default" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-ba.svg" alt="icon" loading="lazy" decoding="async" width="12" height="12" aria-hidden="true" />
          </a>
        </li>
        <li className="cs-social-li">
          <a href="" className="cs-social-link" aria-label="twitter" target="_blank" rel="noopener">
            <img className="cs-social-icon cs-default" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-ba.svg" alt="icon" loading="lazy" decoding="async" width="12" height="12" aria-hidden="true" />
          </a>
        </li>
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
      <div className="cs-container">
        <TopSection />
        <BottomSection />
      </div>
    </section>
  );
};

export default Footer;