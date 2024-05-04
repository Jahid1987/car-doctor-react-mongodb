import Button from "../Button";
import Logo from "../Logo";
const Quote = () => {
  return (
    <div
      style={{
        borderRadius: "10px",
        background: "var(--Dark-01, #151515)",
        padding: "24px",
        marginTop: "16px",
      }}
    >
      <div className="relative flex gap-2 flex-col w-full items-center">
        <Logo />
        <p className="text-2xl font-bold text-white">Car Doctor</p>
        <p className="text-xl font-bold text-white mt-3 text-center">
          Need Help? We Are Here To Help You
        </p>

        <div
          className="px-4 pt-3 pb-12 mt-3 mb-6 "
          style={{
            borderRadius: `10px`,
            background: "#FFF",
          }}
        >
          <p className="font-bold text-lg text-center">
            <span className="text-[#FF3811]">Car Doctor</span> Special
          </p>
          <p className="font-bold text-center">
            <span className="text-[#737373]">Save up to</span>{" "}
            <span className="text-[#FF3811]">60% off</span>
          </p>
        </div>

        <div className="absolute bottom-0">
          <Button>Get A Quote</Button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
