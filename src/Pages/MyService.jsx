import { useEffect, useState } from "react";
import Context from "../Hooks/useContext";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../Components/ServiceCard";
import Swal from "sweetalert2";

const ManageService = () => {
  const { user } = Context();
  const [Service, setService] = useState([]);
  const handleDelete = (id) => {
    //     axios.delete(`http://localhost:5000/Addservice/${id}`)
    // const proceed = confirm('Are You sure you want to delete');
    fetch(`http://localhost:5000/Addservice/${id}`, {
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
          const remaining = Service.filter((service) => service._id !== id);
          setService(remaining);
        }
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/myService?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setService(res.data);
        console.log(res.data);
      });
    // fetch(url, { credentials: 'include' })
    //     .then(res => res.json())
    //     .then(data => setService(data))
  }, [user.email]);

  // useEffect(() => {

  //     axios.get(`http://localhost:5000/AddServices?email=${user.email}`,{withCredentials:true}).then(res => {
  //         setService(res.data)
  //        console.log( res.data);
  //     })
  //     // fetch(url, { credentials: 'include' })
  //     //     .then(res => res.json())
  //     //     .then(data => setService(data))

  // }, [user.email]);

  return (
    <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 max-w-screen-xl mx-auto">
      <Helmet>
        <title> Service Swap || MANAGE SERVICE</title>
      </Helmet>
      {Service.length > 0 ? (
        Service.map((ser) => (
          <ServiceCard
            key={ser._id}
            service={ser}
            handleDelete={handleDelete}
          ></ServiceCard>
        ))
      ) : (
        <p className="  text-center font-bold text-xl my-40 ">
          No services available...{" "}
        </p>
      )}
    </div>
  );
};
export default ManageService;
