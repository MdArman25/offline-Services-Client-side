import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Context from "../Hooks/useContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySchedule = () => {
  const [booking, setbooking] = useState([]);
  const [panding, setpanding] = useState([]);

  const { user } = Context();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/booking?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setbooking(res.data);
      });
  }, [user.email]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/myService?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setpanding(res.data);
        console.log(res.data);
      });
  }, [user.email]);
  const handleDelete = (id) => {
    //     axios.delete(`http://localhost:5000/Addservice/${id}`)
    // const proceed = confirm('Are You sure you want to delete');
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "service Updated Successfully",
            icon: "success",
            confirmButtonText: "OKh",
          });
          const remaining = booking.filter((service) => service._id !== id);
          setbooking(remaining);
        }
      });
  };

  //     (bookingItem) => bookingItem.provide_email
  //     === user?.email
  //   );
  // useEffect(()=>{
  // // Filter bookings based on user's email

  // //   setUserbooking(filteredBookings);
  // }
  // ,[user?.email])
  // console.log(Userbooking);
  return (
    <div className=" max-w-screen-xl mx-auto my-10 w-full ">
      <Helmet>
        <title> Service Swap || MY SCHEDULE</title>
      </Helmet>
      <div className="shadow-xl shadow-slate-400 py-10 my-20 ">
        <p className="text-center font-bold text-xl my-10">
          My BOOKING SERVICE{" "}
        </p>
        {booking.length > 0 ? (
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2"> Service Name</th>
                <th className="px-4 py-2">Provider Email</th>
                <th className="px-4 py-2">service_price</th>
                <th className="px-4 py-2">service_date</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((userData) => (
                <tr className="text-center" key={userData.id}>
                  <td className="border px-4 py-2">
                    <img
                      className="w-10 rounded-full h-10 "
                      src={userData.service_image}
                      alt=""
                    />
                  </td>
                  <td className="border  px-4 py-2">{userData.service_name}</td>
                  <td className="border px-4 py-2">{userData.provide_email}</td>
                  <td className="border px-4 py-2">{userData.service_price}</td>
                  <td className="border px-4 py-2">{userData.service_date}</td>
                  <td className="border px-4 py-2">
                    <Link onClick={() => handleDelete(userData._id)}>
                      DELETE
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center font-bold text-xl my-20">
            No booking services available...
          </p>
        )}
      </div>
      <div
        className="shadow-xl
shadow-slate-400  py-10 my-20  "
      >
        <p className="text-center font-bold text-xl ">My PENDING SERVICE </p>

        {panding.length > 0 ? (
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2"> Service Name</th>
                <th className="px-4 py-2">Provider Email</th>
                <th className="px-4 py-2">service_price</th>
                <th className="px-4 py-2">service_date</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {panding.map((userData) => (
                <tr className="text-center" key={userData.id}>
                  <td className="border px-4 py-2">
                    <img
                      className="w-10 rounded-full h-10 "
                      src={userData.service_image}
                      alt=""
                    />
                  </td>
                  <td className="border  px-4 py-2">{userData.service_name}</td>
                  <td className="border px-4 py-2">
                    {userData.provider_email}
                  </td>
                  <td className="border px-4 py-2">{userData.service_price}</td>
                  <td className="border px-4 py-2">{userData.service_date}</td>
                  <td className="border px-4 py-2">
                    <select className="select select-info w-full max-w-xs">
                      <option selected>Pending</option>
                      <option>In Progress</option>

                      <option> Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center font-bold text-xl my-20">
            No pending services available...{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default MySchedule;
