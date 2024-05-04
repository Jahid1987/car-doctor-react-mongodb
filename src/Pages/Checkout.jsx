import Banner from "../Components/Banner";

const Checkout = () => {
  const handleCheckout = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <Banner page="Checkout" />
      {/* checkout form  */}
      <div
        className="p-10 md:p-20 my-5 md:my-10"
        style={{
          borderRadius: "10px",
          background: "var(--Dark-07, #F3F3F3)",
        }}
      >
        <form onSubmit={handleCheckout} className="w-full mx-auto">
          {/* form row 1 */}
          <div className="flex justify-between gap-3 mb-3 flex-col md:flex-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered w-full"
            />
          </div>
          {/* form row  2*/}
          <div className="flex justify-between gap-3 mb-3 flex-col md:flex-row">
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>
          {/* form row  3*/}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>
          <button className="mt-6 w-full btn btn-sm md:btn-md bg-[#FF3811] text-white hover:bg-[#cf2d0d]">
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
