import bannerImg from "../assets/images/checkout/checkout.png";
const Banner = () => {
  return (
    <div className="h-auto w-full relative">
      <img className="h-full w-full object-cover" src={bannerImg} alt="" />
      <div
        className="absolute top-0 w-full h-full"
        style={{
          borderRadius: "10px",
          background:
            "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)",
        }}
      >
        <h3 className="text-white font-bold text-2xl lg:text-5xl p-6 md:p-20 lg:p-24 ">
          Service Details
        </h3>
      </div>
      <svg
        className="absolute bottom-0 mx-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="296"
        height="40"
        viewBox="0 0 296 50"
        fill="none"
      >
        <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
      </svg>
      <p className="absolute bottom-0 text-center  w-full font-medium text-lg text-white mb-2">
        Home/Service Details
      </p>
    </div>
  );
};

export default Banner;
