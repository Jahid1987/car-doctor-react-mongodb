import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Services from "../Components/ServiceDetails/Services";
import Download from "../Components/ServiceDetails/Download";
import Quote from "../Components/ServiceDetails/Quote";

const ServiceDetails = () => {
  const service = useLoaderData();

  console.log(service);
  return (
    <main>
      <Banner />
      <div className="grid gap-2 grid-cols-1 md:grid-cols-4 my-4 md:my-8">
        {/* left side  */}
        <div className="md:col-span-3 ">
          <div className="h-[400px] w-full">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={service.img}
              alt={`Image of ${service.title}`}
            />
          </div>
        </div>
        {/* right side  */}

        <div className="md:col-span-1">
          <Services />
          <Download />
          <Quote />
          <p className="text-3xl my-3 font-bold text-[#151515]">
            Price $250.00
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
