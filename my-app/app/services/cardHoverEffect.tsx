'use client';
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ServiceButton from "../components/serviceButton";
import Modal from "../components/modal";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  let [modalText, setModalText] = useState<string>("");

  return (
    <div
      //! Maybe add a custom breakpoint here at around 900 - 1100px depending on the text length
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card setModalText={setModalText} hoveredIndex={hoveredIndex}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};


export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-5 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Card = ({
  className,
  children,
  setModalText,
  hoveredIndex,
}: {
  className?: string;
  children: React.ReactNode;
  setModalText: (text: string) => void;
  hoveredIndex: number | null;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.5] group-hover:border-slate-500 relative z-20 flex flex-col justify-between",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}

const modalText = [
  "During our 1-hour consultation, we will discuss your business processes, identify areas for improvement, and determine the specific requirements needed to optimize your operations. Your participation in providing information about your company is crucial for us to develop an understanding of your needs. By the end of the consultation, we will have a plan for creating a solution that addresses your pain points and supports your business growth.",
  "In the pre-development stage, we will analyze your business processes and assess the technologies you currently use. Our team will develop a prototype that demonstrates how our software solution will integrate with your core technologies and improve your workflow. This prototype will allow you to test the functionality and ensure that the proposed solution meets your expectations. By testing and providing feedback on the prototype, you can be confident that the final product will be designed to meet your needs and integrate with your existing systems.",
  "After you approve the prototype, we will begin the development stage. The duration of this stage will depend on the complexity of your requirements. For highly customized solutions, the development process may take 1-3 months. However, if your needs align with our pre-built custom software tool packages, we can deliver the solution within 1-2 weeks. Our team will work to create a software solution that addresses your business challenges and improves efficiency and productivity. After implementation, we will continue to offer support and maintenance to ensure the smooth operation of your software solution.",
  "Our long-term collaboration plan is designed for businesses that want to stay current with technological advancements. As technologies continue to accelerate, it will become increasingly difficult for businesses to keep up, and those that fail to adapt risk being outcompeted. By partnering with Veloxforce, you gain access to our expertise and commitment to providing you with effective tools and solutions. We will monitor the performance of your software, gather feedback, and identify areas for improvement. As your business evolves and new challenges arise, we will support you with updates, enhancements, and features that keep your software solution aligned with your changing needs. This ongoing partnership ensures that your business maintains a competitive edge in your industry by leveraging the latest technologies and best practices.",
]


export const projects = [
  {
    title: "Consultation",
    description:
      "The goal here is to get to know how your business operates, diagnose painpoints and what your business needs to step to the next level.",
    link: "",
  },
  {
    title: "Pre-Development",
    description:
      "In this stage we will provide you with a prototype to ensure the eventual product will absolutely satify your needs.",
    link: "",
  },
  {
    title: "Development",
    description:
      "In the development phase we will have continues communication to ensure that the project is customized to your business needs.",
    link: "",
  },
  {
    title: "Long term Collaboration",
    description:
      "Since technology is accelerating at a rapid pace, we offer a long term collaboration to ensure that your business always stays ahead of the curve.",
    link: "",
  },
];

