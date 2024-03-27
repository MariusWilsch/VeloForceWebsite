
const ServiceButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="mt-10 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
      onClick={onClick}
    >
      Learn more
    </button>
  );
};

export default ServiceButton;
