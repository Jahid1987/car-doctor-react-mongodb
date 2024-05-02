import Button from "../Button";

const BannerContent = () => {
  return (
    <div
      className="h-full w-full absolute flex items-center"
      style={{
        borderRadius: "10px",
        background:
          "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)",
      }}
    >
      <div className="text-white md:w-2/3 p-5 md:p-10 lg:p-20 space-y-4 ">
        <h1 className="text-4xl lg:text-6xl">
          Affordable Price For Car Servicing
        </h1>
        <p className="text-lg uppercase">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div className="space-x-2">
          <Button>Discover More</Button>
          <button className="btn btn-outline btn-sm md:btn-md text-white border-white">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
