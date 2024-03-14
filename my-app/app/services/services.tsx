import { MeteorsSource } from './meteors';
import { CardHoverEffectDemo } from './cardHoverEffect';

import './services.css'

// Section Component
interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => (
  <section id="why-choose-892">
    <div className="cs-container">
      {children}
    </div>
  </section>
);

// Content Component
interface ContentProps {
  topper: string;
  title: string;
  text: string;
}

const Content: React.FC<ContentProps> = ({ topper, title, text }) => (
  <div className="cs-content">
    <span className="cs-topper">{topper}</span>
    <h2 className="cs-title">{title}</h2>
    <p className="cs-text">{text}</p>
  </div>
);


// Button Component
interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => (
  <a href={href} className="cs-button-solid">{children}</a>
);

// export function Meteors() {
//   return (
//     <div className="transition-transform duration-700 hover:scale-105">
//       <div className=" w-full relative max-w-xs">
//         <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
//         <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
//           <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="h-2 w-2 text-gray-300"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
//               />
//             </svg>
//           </div>

//           <h1 className="font-bold text-xl text-white mb-4 relative z-50">
//             Implemntation & Development
//           </h1>

//           <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
//             I don&apos;t know what to write so I&apos;ll just paste something
//             cool here. One more sentence because lorem ipsum is just
//             unacceptable. Won&apos;t ChatGPT the shit out of this.
//           </p>

//           <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
//             Explore
//           </button>

//           {/* Meaty part - Meteor effect */}
//           <MeteorsSource number={20} />
//         </div>
//       </div>
//     </div>
//   );
// }

const Services: React.FC = () => {
  return (
    <Section>
      <Content topper="Services" title="Our Services" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia incidunt quia enim mollitia delectus? Perferendis sapiente quaerat quos. Odit quasi similique nobis earum laudantium ad doloribus quos eos quod. Delectus?" />
      <CardHoverEffectDemo />
    </Section>
  );
};
// const Services: React.FC = () => {
//   return (
//     <Section>
//       <Content topper="Services" title="Our Services" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia incidunt quia enim mollitia delectus? Perferendis sapiente quaerat quos. Odit quasi similique nobis earum laudantium ad doloribus quos eos quod. Delectus?" />
//       <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 2xl:gap-x-8'>
//         <Meteors />
//         <Meteors />
//         <Meteors />
//         <Meteors />
//       </div>
//       <Button href="">Contact Us</Button>
//     </Section>
//   );
// };

export default Services;



