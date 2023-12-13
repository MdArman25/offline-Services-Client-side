// import Swal from 'sweetalert2'

import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Context from "../Hooks/useContext";

const Updateservice = () => {
  const service = useLoaderData();
  console.log(service);
  // const [service_name,service_image,service_description,provider_name,service_provider,service_area,service_price, provider_email,provider_image]=service;

  console.log(service);
  const { user } = Context();
  const handleUpdateservice = (event) => {
    event.preventDefault();

    const form = event.target;
    const service_name = form.service_name.value;
    const service_image = form.service_image.value;
    const provider_name = form.provider_name.value;
    const provider_email = form.provider_name.value;
    const provider_image = form.provider_name.value;
    const service_price = form.service_price.value;
    const service_description = form.service_description.value;
    const service_area = form.service_area.value;
    const Updateservice = {
      service_name,
      provider_name,
      service_image,
      provider_email,
      service_price,
      service_description,
      provider_image,
      service_area,
    };

    console.log(Updateservice);

    axios
      .put(`http://localhost:5000/Addservice/${service?._id}`, Updateservice)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "service Updated Successfully",
            icon: "success",
            confirmButtonText: "OKh",
          });
        }
      });

    // fetch(
    //   `https://assignment-ewfoba5f2-md-armans-projects-bf1c950b.vercel.app/Addservice/${service._id}`,
    //   {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(Updateservice),
    //   }
    // )
    //   .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    //   if (data.modifiedCount > 0) {
    //     Swal.fire({
    //       title: "Success!",
    //       text: "service Updated Successfully",
    //       icon: "success",
    //       confirmButtonText: "OKh",
    //     });
    //   }
    // });

    // fetch(`https://assignment-otikipoul-md-armans-projects-bf1c950b.vercel.app/Addservice/${service._id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(Updateservice),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  return (
    <div className="md:w-6/12 w-10/12 mx-auto my-16">
      <h1 className="mb-12  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
        Services Details Update{" "}
      </h1>
      <form onSubmit={handleUpdateservice}>
        {/* email */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            defaultValue={service?.service_name}
            type="text"
            name="service_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            htmlFor="sellerEmail"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            service_name
          </label>
        </div>
        {/* seller name */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            defaultValue={service?.service_image}
            type="text"
            name="service_image"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="sellerName"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Service Image
          </label>
        </div>
        {/* toy name */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            defaultValue={service?.provider_name}
            type="text"
            name="provider_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Provider Nname
          </label>
        </div>
        {/* toy URL */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            defaultValue={service?.provider_email}
            type="email"
            name="provider_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            htmlFor="pictureURL"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            provide email
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          {/* service_price */}

          {/* rating */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              defaultValue={service?.service_price}
              type="textarea"
              name="service_price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="service_price"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              service price
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              defaultValue={service?.service_area}
              type="textarea"
              name="service_area"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="service_area"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              service area
            </label>
          </div>

          {/* availableQuantity */}
        </div>
        {/* description */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            value={service.service_description}
            type="text"
            name="service_description"
            min="1"
            max="5"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="rating"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            service description
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Updateservice;
