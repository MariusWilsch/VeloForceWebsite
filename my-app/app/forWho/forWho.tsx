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

const SideBySideContentBox = () => {
  const content = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu."
  ];

  return (
    <div className='p-section'>
      <Content topper="Why Choose 892?" title="We're the best in the business" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu." />
      {content.map((text, index) => (
        <div className="flex text-white m-10" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="w-1/2 p-4">
                <h1 className="text-xl font-bold mb-4">Header</h1>
                <p>{text}</p>
              </div>
              <div className="w-1/2 p-4"></div>
            </>
          ) : (
            <>
              <div className="w-1/2 p-4"></div>
              <div className="w-1/2 p-4">
                <h1 className="text-xl font-bold mb-4">Header</h1>
                <p>{text}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBySideContentBox;