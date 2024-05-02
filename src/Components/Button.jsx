const Button = ({ children }) => {
  return (
    <button className="btn btn-sm md:btn-md bg-[#FF3811] text-white hover:bg-[#cf2d0d]">
      {children}
    </button>
  );
};

export default Button;
