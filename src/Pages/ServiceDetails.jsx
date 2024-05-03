import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div>
      <h3>Service Details</h3>
    </div>
  );
};

export default ServiceDetails;
