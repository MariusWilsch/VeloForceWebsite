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
    "Our services streamline operations and enhance productivity by taking away all repetitive tasks, allowing you to focus on strategic growth.",
    "Competitive startups aiming to outshine the competition. Veloxforce makes it possible to provide you with custom tools tailored to your needs to find untapped potential and get ahead of your competition.",
    "Established companies with outdated operations Upgrade your well-established business with software that simplifies daily tasks. Letting your administration, payments and customer service run on autopilot so your team can focus on the most valuable tasks.",
    "Our automations are a lifeline for businesses drowning in day-to-day tasks. For the business owner who spends more time managing emails and spreadsheets than growing their business.",
    "Our solutions make sure the high throughput of you operation will relieve you from your manual interventions. from the moment of receiving data to filing tax papers.",
    "Business developers looking for operational insights.\nOur softwares allow for extraction of the specific data you need  in order to give insights into the most valuable operations for the business, which allows for systematic growth over time."
  ];

  // Create an array of objets that has the headers and the text as values
  const contentArray = [
    {
      header: "Growing businesses aiming to build a foundation to scale upon.",
      text: "Our services streamline operations and enhance productivity by taking away all repetitive tasks, allowing you to focus on strategic growth."
    },
    {
      header: "Competitive Startups Aiming to Outshine the competition.",
      text: "Veloxforce makes it possible to provide you with custom tools tailored to your needs to find untapped potential and get ahead of your competition."
    },
    {
      header: "Established companies with outdated operations.",
      text: "Upgrade your well-established business with software that simplifies daily tasks, automating administration, payments, and customer service, thus allowing your team to focus on the most valuable tasks."
    },
    {
      header: "Overworked Teams Seeking a Breather.",
      text: "Our automations are a lifeline for businesses drowning in day-to-day tasks. For the business owner who spends more time managing emails and spreadsheets than growing their business."
    },
    {
      header: "Businesses facing high-frequency processing.",
      text: "Our solutions ensure the high throughput of your operation will relieve you from manual interventions, from the moment of receiving data to filing tax papers or invoices."
    },
    {
      header: "Business developers seeking data-driven insights for scalable growth.",
      text: "Our softwares allow for extraction of the specific data you need  in order to give insights into the most valuable operations for the business, which allows for systematic growth over time."
    }
  ];


  return (
    <div className='p-section w-full sm:w-4/5 mx-auto'>
      <Content topper="Why Choose Us?" title="We're the best in the business" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      {contentArray.map((item, index) => (
        <div className="flex flex-col sm:flex-row text-white m-10" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="w-full sm:w-1/2 p-4">
                <h1 className="text-xl font-bold mb-4">{item.header}</h1>
                <p className='text-slate-300'>{item.text}</p>
              </div>
              <div className="hidden sm:block sm:w-1/2 p-4"></div>
            </>
          ) : (
            <>
              <div className="hidden sm:block sm:w-1/2 p-4"></div>
              <div className="w-full sm:w-1/2 p-4">
                <h1 className="text-xl font-bold mb-4"> {item.header} </h1>
                <p className='text-slate-300'>{item.text}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBySideContentBox;
