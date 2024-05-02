import About from "../Components/Home/About";
import Banner from "../Components/Home/Banner";
import Contact from "../Components/Home/Contact";
import Core from "../Components/Home/Core";
import Popular from "../Components/Home/Popular";
import Services from "../Components/Home/Services";
import Team from "../Components/Home/Team";
import Testimonial from "../Components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Contact />
      <Popular />
      <Team />
      <Core />
      <Testimonial />
    </div>
  );
};

export default Home;
