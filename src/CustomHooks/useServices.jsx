import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useServices = () => {
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);

  useEffect(() => {
    axiosSecure("/services").then((res) => setServices(res.data));
  }, []);

  return services;
};

export default useServices;
