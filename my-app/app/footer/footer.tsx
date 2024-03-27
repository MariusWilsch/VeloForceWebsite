import Link from 'next/link';
import './footer.css';
import Image from 'next/image';

interface SocialLinkProps {
  label: string;
  url: string;
  iconSrc: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ label, url, iconSrc }) => {
  return (
    <li className="cs-social-li">
      <Link href={url} target='_blank'>
        <div className="cs-social-link" aria-label={label} >
          <Image
            className="cs-social-icon cs-default"
            src={iconSrc}
            alt="icon"
            width={12}
            height={12}
          />
        </div>
      </Link>
    </li>
  );
};;

const BottomSection = () => {
  return (
    <div className="cs-bottom">
      <ul className="cs-social">
        <SocialLink label="twitter" url="https://twitter.com/veloxforce" iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-ba.svg" />
        {/* <SocialLink label="instagram" url="" iconSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-ba.svg" /> */}
      </ul>
      <span className="cs-copyright">
        © Copyright 2023 - <a href="" className="cs-copyright-link">Veloxforce</a>
      </span>
      <div className="cs-flex">
        {/* <a href="" className="cs-copyright-link underline-on-hover">Privacy Policy</a>
        <span className="cs-separater">|</span>
        <a href="" className="cs-copyright-link underline-on-hover">Terms of Use</a> */}
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