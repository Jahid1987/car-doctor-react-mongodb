import SectionTitle from "./SectionTitle";
import Card from "./Card";
import ButtonOutline from "../ButtonOutline";
import useServices from "../../CustomHooks/useServices";

const Services = () => {
  const services = useServices();
  return (
    <div>
      <SectionTitle
        title1="Service"
        title2="Our Service Area"
        text="the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. "
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services?.map((service) => (
          <Card service={service} key={service._id}></Card>
        ))}
      </div>
      <div className="my-5 text-center">
        <ButtonOutline>More Services</ButtonOutline>
      </div>
    </div>
  );
};

export default Services;
