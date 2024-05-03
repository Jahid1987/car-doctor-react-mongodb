import axios from "axios";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/bookings", {
        withCredentials: true,
      })
      .then((res) => console.log(res.data));
  }, []);
  return (
    <div>
      <h3>This is about page</h3>
    </div>
  );
};

export default About;
