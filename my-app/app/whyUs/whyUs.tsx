import React from 'react'

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
}

const GridItem: React.FC<GridItemProps> = ({ children, className }) => (
  <div className={`p-4 flex justify-center items-center border text-white border-gray-600 ${className}`}>
    {children}
  </div>
);

const WhyUs = () => {
  const texts = [
    "Lorem ipsum dolor sit amet.",
    "Consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt.",
    "Ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam.",
    "Quis nostrud exercitation ullamco laboris.",
    "Nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit.",
    "In voluptate velit esse cillum dolore."
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
    <div id='whyUs' className='flex flex-col justify-center items-center min-h-screen text-center w-full p-section'>
      <span className="cs-topper">Why choose us</span>
      <h2 className="cs-title">Lorem ipsum 3rdWord</h2>
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