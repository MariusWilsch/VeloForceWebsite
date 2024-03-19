import React from 'react';
import { IconThumbUp, IconThumbDown } from '@tabler/icons-react';

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ children, className, icon }) => (
  <div className={`p-4 flex justify-center items-center border text-white border-gray-600 md:min-w-[10rem] md:min-h-[15rem]  ${className}`}>
    <div className="flex items-start">
      {icon}
      {children}
    </div>
  </div>
);

const WhyUs = () => {
  const texts = [
    "Veloxforce solutions",
    "Regular software",
    "Hiring more employees",
    "Build exactly based and integrable with your current workflow",
    "Will not satisfy all your needs, so you will still be left with some manual work",
    "Need training to get started, which will take time and money",
    "After initial implementation there is always an option to build on top of it, which will make scaling easier",
    "Bad customer support in case of any issues which will lead to downtime and loss of money",
    "As your business grows, you will need to hire more employees which will increase your expenses and decrease your profit margin.",
    "After initial implementation there is always an option to build on top of it, which will make scaling easier",
    "Bad customer support in case of any issues which will lead to downtime and loss of money",
    "As your business grows, you will need to hire more employees which will increase your expenses and decrease your profit margin."
  ];

  const icons = [
    null,
    null,
    null,
    <IconThumbUp key={'1'} size={24} className="mr-2 flex-shrink-0 " />,
    <IconThumbDown key={'2'} size={24} className="mr-2 flex-shrink-0" />,
    <IconThumbDown key={'3'} size={24} className="mr-2 flex-shrink-0" />,
    <IconThumbUp key={'4'} size={24} className="mr-2 flex-shrink-0" />,
    <IconThumbDown key={'5'} size={24} className="mr-2 flex-shrink-0" />,
    <IconThumbDown key={'6'} size={24} className="mr-2 flex-shrink-0" />,
    <IconThumbUp key={'4'} size={24} className="mr-2 flex-shrink-0" />,
    <IconThumbDown key={'5'} size={24} className="mr-2 flex-shrink-0" />,
    <IconThumbDown key={'6'} size={24} className="mr-2 flex-shrink-0" />
  ];

  const borderClasses = [
    "border-l-0 text-3xl md:text-[32px] lg:text-5xl ",
    "text-2xl md:text-[32px] lg:text-5xl",
    "border-r-0 text-2xl md:text-[32px] lg:text-5xl",
    "border-l-0 text-left text-slate-300",
    " text-left text-slate-300",
    "border-r-0 text-left text-slate-300",
    "border-l-0 text-left text-slate-300",
    " text-left text-slate-300",
    " border-r-0 text-left text-slate-300",
    "border-l-0 text-left text-slate-300",
    " text-left text-slate-300",
    " border-r-0 text-left text-slate-300"
  ];

  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-center w-full p-section'>
      <span className="cs-topper">The goal of every business is to grow and thrive</span>
      <h2 className="cs-title">What to choose?</h2>
      <div className='mt-4 grid grid-cols-3 grid-rows-3 px-4 w-full md:w-[90%] mx-auto'>

        {texts.map((text, index) => (
          <GridItem key={index} className={borderClasses[index]} icon={icons[index]}>
            {text}
          </GridItem>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;