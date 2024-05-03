import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../CustomHooks/useAuth";
import Card from "../Components/Bookings/Card";

const Bookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings/?userEmail=${user?.email}`;

  useEffect(() => {
    // fetch("http://localhost:5000/bookings", {
    //   withCredentials: true,
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    axios
      .get(url, {
        withCredentials: true,
      })
      .then((res) => setBookings(res.data))
      .catch(console.error);
  }, [url]);

  return (
    <div>
      <h3>Bookings {bookings.length}</h3>
      {
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {bookings.map((booking) => (
                <Card key={booking._id} booking={booking}></Card>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default Bookings;
