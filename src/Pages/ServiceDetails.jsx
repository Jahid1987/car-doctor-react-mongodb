import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Services from "../Components/ServiceDetails/Services";
import Download from "../Components/ServiceDetails/Download";
import Quote from "../Components/ServiceDetails/Quote";
import Facility from "../Components/ServiceDetails/Facility";
import ProcessStep from "../Components/ServiceDetails/ProcessStep";

const ServiceDetails = () => {
  const service = useLoaderData();

  console.log(service);
  return (
    <main>
      <Banner page="Service Details" />
      <div className="grid gap-2 grid-cols-1 md:grid-cols-4 my-4 md:my-8">
        {/* left side  */}
        <div className="md:col-span-3 ">
          {/* image of the product */}
          <div className="h-[400px] w-full">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={service.img}
              alt={`Image of ${service.title}`}
            />
          </div>
          {/* content of the product  */}
          <div className="space-y-3 mt-3">
            <h3 className="text-3xl font-bold">{service.title}</h3>
            <p className="text-[#737373]">{service.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.facility.map((item, index) => (
                <Facility key={index} facility={item} />
              ))}
            </div>
          </div>

          {/* steps to proceed to checkout */}
          <div className="mt-5 space-y-3">
            <h3 className="text-3xl font-bold">3 Simple Steps to Process</h3>
            <p className="text-[#737373]">{service.description}</p>
            <div className="grid grid-cols-1 justify-around md:grid-cols-3 gap-3">
              <ProcessStep step={{ num: "01", txt: "ONE" }} />
              <ProcessStep step={{ num: "02", txt: "TWO" }} />
              <ProcessStep step={{ num: "03", txt: "THREE" }} />
            </div>
          </div>

          {/* video show  */}
          <div
            style={{
              borderRadius: "10px",
              background: `url(${service.img}) lightgray 50% / cover no-repeat`,
            }}
            className="mt-6 h-[400px] flex justify-center items-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="126"
                viewBox="0 0 126 126"
                fill="none"
              >
                <path
                  d="M110.25 63C110.25 69.205 109.028 75.3492 106.653 81.0818C104.279 86.8144 100.798 92.0232 96.4108 96.4108C92.0232 100.798 86.8144 104.279 81.0818 106.653C75.3492 109.028 69.205 110.25 63 110.25C56.795 110.25 50.6508 109.028 44.9182 106.653C39.1856 104.279 33.9768 100.798 29.5892 96.4108C25.2016 92.0232 21.7212 86.8144 19.3467 81.0818C16.9722 75.3492 15.75 69.205 15.75 63C15.75 50.4685 20.7281 38.4503 29.5892 29.5892C38.4503 20.7281 50.4685 15.75 63 15.75C75.5315 15.75 87.5497 20.7281 96.4108 29.5892C105.272 38.4503 110.25 50.4685 110.25 63Z"
                  stroke="#FF3811"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M83.5275 61.278C83.8349 61.4484 84.0911 61.6979 84.2695 62.0007C84.4479 62.3035 84.5419 62.6486 84.5419 63C84.5419 63.3515 84.4479 63.6965 84.2695 63.9993C84.0911 64.3021 83.8349 64.5517 83.5275 64.722L54.1118 81.0653C53.812 81.2316 53.474 81.3169 53.1312 81.3125C52.7884 81.3082 52.4527 81.2143 52.1573 81.0404C51.8618 80.8664 51.617 80.6183 51.4469 80.3207C51.2768 80.023 51.1874 79.6861 51.1875 79.3433V46.6568C51.1875 45.1553 52.7993 44.2103 54.1118 44.94L83.5275 61.278Z"
                  stroke="#FF3811"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* right side  */}

        <div className="md:col-span-1">
          <Services />
          <Download />
          <Quote />
          <p className="text-3xl my-3 font-bold text-[#151515]">
            Price ${service.price}
          </p>
          <button className="btn btn-sm md:btn-md w-full bg-[#FF3811] text-white hover:bg-[#cf2d0d]">
            Proceed Checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;
