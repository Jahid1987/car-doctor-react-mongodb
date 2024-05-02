const SectionTitle = ({ title1, title2, text }) => {
  return (
    <div className="text-center w-[90%] md:w-3/4 mx-auto my-5">
      <h3 className="text-red-400 text-lg font-bold">{title1}</h3>
      <h1 className="text-5xl font-bold">{title2}</h1>
      <p className="text-gray-400 text-base">{text}</p>
    </div>
  );
};

export default SectionTitle;
