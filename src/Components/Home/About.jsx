import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
import Button from "../Button";
const About = () => {
  return (
    <div className="hero bg-base-100 my-10">
      <div className="flex gap-6 flex-col md:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            className=" w-full md:w-3/4 rounded-lg top-0 left-0"
          />
          <img
            src={parts}
            alt=""
            className="absolute w-full md:w-2/4 bottom-0 border-8 border-white rounded-lg right-0"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-red-400 font-bold text-base">About Us</h2>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <Button>Get More Info</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
