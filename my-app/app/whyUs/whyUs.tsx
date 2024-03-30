import React from 'react';
import { IconThumbUp, IconThumbDown } from '@tabler/icons-react';

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ children, className, icon }) => (
  <div className={`p-4 flex justify-center items-center md:border text-white border-gray-600 md:min-w-[10rem] md:min-h-[15rem]  ${className}`}>
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
    "Veloxforce solutions provides a competitive advantage by enabling unique, value-adding features that differentiate the company, attracting more customers and driving revenue growth.",
    "SaaS's one-size-fits-all approach limits customization, forcing businesses to adapt their processes to software constraints, leading to inefficiencies and reduced productivity.",
    "Hiring more employees to compensate for inefficiencies leads to increased salaries and overhead costs, reducing profit margins and limiting investment in innovation.",
    "Veloxforce software seamlessly integrates with existing workflows, automating data transfer and synchronization, reducing errors and increasing efficiency and productivity.",
    "Bad customer support in case of any issues which will lead to downtime, loss of money and irritation.",
    "SaaS's recurring subscription fees strain budgets and create long-term financial burdens, limiting resources for other critical areas of the business.",
    "Custom software automates repetitive tasks, streamlining workflows and minimizing human error, allowing employees to focus on higher-value activities that drive business growth.    ",
    "Poor SaaS customer support leads to prolonged downtime, causing financial losses, missed opportunities, and frustration for employees and customers.",
    "Relying on a growing workforce leads to communication breakdowns, duplication of efforts, and management challenges, resulting in decreased agility and efficiency.",
    "Custom software's scalability allows for easy addition of new features as the business grows, ensuring the software adapts to changing needs without compromising efficiency.",
    "SaaS providers' unilateral updates may disrupt workflows, require retraining, and introduce bugs, leading to lost productivity and increased costs.",
    "Hiring more employees necessitates additional office space and resources, increasing overhead costs, reducing profitability, and creating a rigid cost structure."
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
    <IconThumbDown key={'6'} size={24} className="mr-2 flex-shrink-0" />,
    <IconThumbUp key={'4'} size={24} className="mr-2 flex-shrink-0" />,
    <IconThumbDown key={'5'} size={24} className="mr-2 flex-shrink-0" />,
    <IconThumbDown key={'6'} size={24} className="mr-2 flex-shrink-0" />

  ];

  const borderClasses = [
    "border-l-0  text-3xl lg:text-5xl",
    "text-3xl lg:text-5xl",
    "border-r-0 text-3xl  lg:text-5xl",
    "text-lg md:text-1xl border-l-0 text-left text-slate-300",
    "text-lg md:text-1xl  text-left text-slate-300",
    "text-lg md:text-1xl border-r-0 text-left text-slate-300",
    "text-lg md:text-1xl border-l-0 text-left text-slate-300",
    "text-lg md:text-1xl  text-left text-slate-300",
    "text-lg md:text-1xl  border-r-0 text-left text-slate-300",
    "text-lg md:text-1xl border-l-0 text-left text-slate-300",
    "text-lg md:text-1xl  text-left text-slate-300",
    "text-lg md:text-1xl border-r-0 text-left text-slate-300",
    "text-lg md:text-1xl border-l-0 text-left text-slate-300",
    "text-lg md:text-1xl  text-left text-slate-300",
    "text-lg md:text-1xl border-r-0 text-left text-slate-300"
  ];

  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-center w-full p-section'>
      <span className="cs-topper">Is your software giving you a competitive edge, or are you blending in with the crowd?</span>
      <h2 className="cs-title">What to choose?</h2>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-3 px-4 w-full md:w-[90%] mx-auto'>

        {texts.map((text, index) => (
          <GridItem
            key={index}
            className={`${borderClasses[index]} ${index % 3 !== 0 ? 'sm:flex hidden' : ''}`}
            icon={icons[index]}
          >
            {text}
          </GridItem>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;