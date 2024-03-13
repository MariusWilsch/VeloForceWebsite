import React from 'react';
import './process.css';


const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section id="steps-889" className="cs-container">
    {children}
  </section>
);

const Content: React.FC = () => (
  <div className="cs-content">
    <span className="cs-topper">Our Process</span>
    <h2 className="cs-title">How It Works</h2>
    <p className="cs-text">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
      velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
      consequat duis enim velit mollit.
    </p>
  </div>
);

const CardItem: React.FC<{ title: string, text: string, imgSrc: string }> = ({ title, text, imgSrc }) => (
  <li className="cs-item">
    <picture className="cs-picture">
      <img className="cs-icon" src={imgSrc} alt="icon" width="32" height="32" loading="lazy" decoding="async" aria-hidden="true" />
    </picture>
    <h3 className="cs-h3">{title}</h3>
    <p className="cs-item-p">{text}</p>
  </li>
);

const ArrowItem: React.FC = () => (
  <li className="cs-item cs-arrow" aria-hidden="true">
    <img className="cs-arrow-img" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Farrow-curve-right.svg"
      alt="icon" width="80" height="76" loading="lazy" decoding="async" aria-hidden="true" />
  </li>
);

const CardGroup: React.FC = () => (
  <ul className="cs-card-group">
    <CardItem title="Contact Us" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nemo voluptate." imgSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Ficon-orange.svg" />
    <ArrowItem />
    <CardItem title="Initial Evaluation" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nemo voluptate." imgSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Ficon-orange.svg" />
    <ArrowItem />
    <CardItem title="Develop a Plan" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nemo voluptate." imgSrc="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Ficon-orange.svg" />
  </ul>
);

const Button: React.FC<{ href: string }> = ({ href }) => (
  <div className='flex justify-center '>
    <a href={href} className="cs-button-solid">View All Projects</a>
  </div>
);
const HowItWorks: React.FC = () => {
  return (
    <Section>
      <Content />
      <CardGroup />
      <Button href="" />
    </Section>
  );
};

export default HowItWorks;