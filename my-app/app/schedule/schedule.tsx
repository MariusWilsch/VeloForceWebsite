'use client';
import React from 'react';

const CalendlyWidget = () => {
  React.useEffect(() => {
    // Dynamically load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script from the body to prevent duplicates
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div className=''>
      {/* Calendly inline widget begin */}
      <div
        className="calendly-inline-widget shadow-2xl"
        data-url="https://calendly.com/veloxforce/30min?background_color=000000&text_color=ffffff&primary_color=ffffff"
        style={{ minWidth: '320px', height: '700px', }}>
      </div>
      {/* Calendly inline widget end */}
    </div>
  );
};

export default CalendlyWidget;
