import React from 'react'

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
}

const GridItem: React.FC<GridItemProps> = ({ children, className }) => (
  <div className={`p-4 flex justify-center items-center border text-white  border-gray-600 min-w-[200px] min-h-[200px] ${className}`}>
    {children}
  </div>
);

const WhyUs = () => {
  const texts = [
    "Veloxforce solutions",
    "Regular software",
    "Hiring more employees",
    "Build excactly based and intergradable with your current workflow",
    "Will not satisfy all your needs, so you will still be left with some manual work",
    "Need training to get started, which will take time and money",
    "After initial implementation there is always and option to build on top of it, which will make scaling easier",
    "Bad customer support in case of any issues which will lead to downtime and loss of money",
    "As your business grows, you will need to hire more employees which will increase your expenses and decrease your profit margin."
  ];

  const borderClasses = [
    "border-l-0",
    "",
    "border-r-0",
    "border-l-0",
    "",
    "border-r-0",
    "border-l-0",
    "",
    " border-r-0"
  ];

  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-center w-full p-section'>
      <span className="cs-topper">The goal of every business is to grow and thrive</span>
      <h2 className="cs-title">What to choose?</h2>
      <div className='grid grid-cols-3 grid-rows-3 px-4 w-full md:w-[90%] mx-auto'>
        {texts.map((text, index) => (
          <GridItem key={index} className={borderClasses[index]}>
            {text}
          </GridItem>
        ))}
      </div>
    </div>
  )
}
export default WhyUs 