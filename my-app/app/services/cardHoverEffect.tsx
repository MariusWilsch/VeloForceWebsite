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
      <Modal text={modalText[hoveredIndex || 0]} />
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
  "Text 1",
  "Text 2",
  "Text 3",
  "Text 4",
]


export const projects = [
  {
    title: "Consultation",
    description:
      "The goal here is to get to know how your business operates, want to achieve and what your business need to step to the next level.",
    link: "#why-choose-892",
  },
  {
    title: "Consultation",
    description:
      "The goal here is to get to know how your business operates, want to achieve and what your business need to step to the next level.",
    link: "#why-choose-892",
  },
  {
    title: "Development",
    description:
      "In the development phase we will have continues communication to ensure that the project is customized to your business needs.",
    link: "#why-choose-892",
  },
  {
    title: "Long term Collaboration",
    description:
      "Since technology is accelerating at a rapid pace, we offer a long term collaboration to ensure that your business always stays ahead of the curve.",
    link: "#why-choose-892",
  },
];


