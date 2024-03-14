import '@/app/globals.css';

interface ContentProps {
  topper: string;
  title: string;
  text: string;
}

const SectionHeader: React.FC<ContentProps> = ({ topper, title, text }) => (
  <>
    <span className="cs-topper">{topper}</span>
    <h2 className="cs-title">{title}</h2>
    <p className="cs-text">{text}</p>
  </>
);


export default SectionHeader;