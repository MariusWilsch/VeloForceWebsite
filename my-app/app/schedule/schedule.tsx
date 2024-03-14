'use client';
import React from 'react';

interface ContentProps {
  topper: string;
  title: string;
  text: string;
}

const Content: React.FC<ContentProps> = ({ topper, title, text }) => (
  <div className="flex flex-col items-center text-center">
    <span className="cs-topper">{topper}</span>
    <h2 className="cs-title">{title}</h2>
    <p className="cs-text">{text}</p>
  </div>
);

const CalendlyWidget = () => {
  React.useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {

      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className=''>
      <Content
        topper="Schedule a"
        title="30-minute meeting"
        text="Let's talk about your project and how we can help you."
      />
      <div
        className="calendly-inline-widget shadow-2xl"
        data-url="https://calendly.com/veloxforce/30min?background_color=000000&text_color=ffffff&primary_color=ffffff"
        style={{ minWidth: '320px', height: '700px', }}>
      </div>

    </div>
  );
};

export default CalendlyWidget;
