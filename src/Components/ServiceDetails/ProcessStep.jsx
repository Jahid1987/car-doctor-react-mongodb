const ProcessStep = ({ step }) => {
  return (
    <div
      className="flex flex-col items-center gap-3"
      style={{
        borderRadius: "10px",
        border: `1px solid var(--Dark-06, #E8E8E8)`,
        padding: "30px",
        textAlign: "center",
        maxWidth: "235px",
      }}
    >
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="83"
          height="83"
          viewBox="0 0 83 83"
          fill="none"
        >
          <circle
            cx="41.5"
            cy="41.5"
            r="41.5"
            fill="#FF3811"
            fillOpacity="0.1"
          />
          <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
        </svg>
        <p
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="absolute text-white font-bold"
        >
          {step.num}
        </p>
      </div>
      <p className="font-bold text-xl text-[#151515] uppercase">
        Step {step.txt}
      </p>
      <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
    </div>
  );
};

export default ProcessStep;
