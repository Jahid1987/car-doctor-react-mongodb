const Facility = ({ facility }) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        borderTop: "2px solid var(--ff-3811, #FF3811)",
        background: "var(--Dark-07, #F3F3F3)",
        padding: "40px",
        maxWidth: "360px",
      }}
    >
      <h3 className="text-xl font-bold mb-2">{facility.name} </h3>
      <p className="text-[#737373]">{facility.details}</p>
    </div>
  );
};

export default Facility;
