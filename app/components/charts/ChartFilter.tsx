const ChartFilter = ({ text, active, onClick }: any) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${
          active ? "bg-indigo-600 border-indigo-700 text-gray" : "border-indigo-300 text-indigo-300"
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default ChartFilter;
