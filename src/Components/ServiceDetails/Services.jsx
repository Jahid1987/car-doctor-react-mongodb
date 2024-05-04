import SidebarCard from "./SidebarCard";

const Services = () => {
  return (
    <div
      style={{
        borderRadius: "10px",
        background: "var(--Dark-07, #F3F3F3)",
        padding: "24px",
      }}
    >
      <h2 className="font-bold text-2xl">Services</h2>
      <div
        className={`bg-[#FF3811] my-4 text-white text-base font-semibold p-3 rounded-lg flex justify-between items-center`}
      >
        <p>Full Car Repair</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <SidebarCard text={"Automatic Services"} />
      <SidebarCard text={"Engine Oil Change"} />
      <SidebarCard text={"Engine Repair"} />
      <SidebarCard text={"Battery Charge"} />
    </div>
  );
};

export default Services;
