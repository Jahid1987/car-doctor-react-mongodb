import Button from "../Button";

const Card = ({ booking }) => {
  const { title, price, img } = booking;
  return (
    <tr>
      <th>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="20" fill="#FF3811" />
          <path
            d="M25 15L20 20L25 15ZM20 20L15 25L20 20ZM20 20L25 25L20 20ZM20 20L15 15L20 20Z"
            fill="#FF3811"
          />
          <path
            d="M20 20L15 15M25 15L20 20L25 15ZM20 20L15 25L20 20ZM20 20L25 25L20 20Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>Date</td>
      <th>
        <Button>Status</Button>
      </th>
    </tr>
  );
};

export default Card;
