import { useEffect, useState } from "react";
import useAuth from "../CustomHooks/useAuth";
import Card from "../Components/Bookings/Card";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";

const Bookings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  const url = `/bookings/?userEmail=${user?.email}`;
  useEffect(() => {
    axiosSecure(url).then((res) => setBookings(res.data));
  }, [url]);

  return (
    <div>
      {
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {bookings?.map((booking) => (
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
