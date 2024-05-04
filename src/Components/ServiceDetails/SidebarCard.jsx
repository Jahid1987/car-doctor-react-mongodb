const SidebarCard = ({ text }) => {
  return (
    <div
      className={`bg-[#FFFFFF] mb-4 text-black text-base font-semibold p-3 rounded-lg flex justify-between items-center`}
    >
      <p>{text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
          stroke="#FF3811"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SidebarCard;
