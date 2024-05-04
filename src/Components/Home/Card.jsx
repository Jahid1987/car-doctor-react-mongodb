// import axios from "axios";
// import useAuth from "../../CustomHooks/useAuth";

import { Link } from "react-router-dom";

const Card = ({ service }) => {
  const { title, price, service_id, img, _id } = service;
  // const { user } = useAuth();

  // function handleAddToBook() {
  //   const bookItem = {
  //     title,
  //     price,
  //     service_id,
  //     img,
  //     userEmail: user?.email,
  //   };
  //   axios
  //     .post("http://localhost:5000/bookings", bookItem)
  //     .then((res) => console.log(res.data));
  //   // console.log(bookItem);
  // }
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="h-[208px] w-full">
        <img
          className="h-full w-full object-cover"
          src={img}
          alt={service_id}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="flex justify-between text-red-400 font-bold">
          <span>Price: {price}</span>
          <Link to={`/service/${_id}`}>
            <svg
              // onClick={handleAddToBook}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                stroke="#FF3811"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
