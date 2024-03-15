import { CardHoverEffectDemo } from './cardHoverEffect';
import './services.css'


interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => (
  <section id="why-choose-892">
    <div className="cs-container">
      {children}
    </div>
  </section>
);


interface ContentProps {
  topper: string;
  title: string;
  text: string;
}

const Content: React.FC<ContentProps> = ({ topper, title, text }) => (
  <div className="cs-content">
    <span className="cs-topper">{topper}</span>
    <h2 className="cs-title">{title}</h2>
    <p className="cs-text text-slate-300">{text}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <Section>
      <Content topper="What can you expect?" title="Services" text="" />
      <CardHoverEffectDemo />
    </Section>
  );
};


export default Services;





