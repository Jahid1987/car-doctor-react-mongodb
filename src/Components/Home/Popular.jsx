import ButtonOutline from "../ButtonOutline";
import SectionTitle from "./SectionTitle";

const Popular = () => {
  return (
    <div>
      <SectionTitle
        title1="Popular Products"
        title2="Browse Our Products"
        text="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      />
      <div>
        <h3>All Popular Products will be shown here</h3>
      </div>
      <div className="text-center my-5">
        <ButtonOutline>More Products</ButtonOutline>
      </div>
    </div>
  );
};

export default Popular;
