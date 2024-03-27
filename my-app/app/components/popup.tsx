import React from 'react';

const Popup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <video controls width="100%" height="auto">
          <source src="/Users/verdant/Documents/VeloxForceWebsite/my-app/public/sample_vid.mov" type="video/mov" />
          Your browser does not support the video tag.
        </video>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Popup;