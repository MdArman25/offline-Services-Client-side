/* eslint-disable no-mixed-spaces-and-tabs */
import Context from "../Hooks/useContext";
import axios from "axios";

import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddService = () => {
  // const axios = require('axios');
  const { user } = Context();
  const provider_email = user.email;
  const provider_name = user.displayName;
  const provider_image = user.photoURL;
  console.log(provider_image);
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const service_name = form.service_name.value;
    const service_image = form.service_image.value;
    const service_price = form.service_price.value;
    // const Type = form.product.value;
    const Description = form.Description.value;
    const area = form.area.value;
    console.log(service_name, service_image, service_price, Description, area);
    const NewProduct = {
      service_name,
      service_image,
      service_price,
      provider_email,
      service_description: Description,
      service_area: area,
      provider_name,
      provider_image,
    };
    console.log(NewProduct);
    axios
      .post("http://localhost:5000/services", NewProduct, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "SerVice Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
    // useEffect(()=>{
    // fetch('http://localhost:5000/services',{
    // 	method :'POST',
    // 	headers:{
    // 		'content-type':'application/json'
    // 	},
    // 	body: JSON.stringify(NewProduct)
    // }).then(res=>res.json())
    // .then(data=>console.log(data))
    // },[])
  };

  // 	  useEffect (()=>{
  // },[])
  // console.log(user);
  return (
    <div>
      <Helmet>
        <title> Service Swap || ADD SERVICE</title>
      </Helmet>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50 max-w-screen-xl mx-auto">
        <form
          onSubmit={handleAddProduct}
          className="container flex flex-col mx-auto space-y-4 shadow-xl shadow-zinc-400"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-extrabold text-xl text-center">
                Add Service Information
              </p>
              <p className="text-xs"></p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Service Name</label>
                <input
                  type="text"
                  name="service_name"
                  placeholder="Service Name"
                  className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Service Image</label>
                <input
                  type="url"
                  name="service_image"
                  placeholder="Service Image"
                  className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Service Price</label>
                <input
                  name="service_price"
                  type="number"
                  placeholder="Service Price"
                  className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
              <br />
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Service Area</label>
                <input
                  type="text"
                  name="area"
                  placeholder="Service Area"
                  className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>

              <div className="col-span-full">
                <label className="text-sm">Description</label>
                <input
                  type="text"
                  name="Description"
                  placeholder=""
                  className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1 ">
              <p className="text-xl text-center font-bold m-5">Profile</p>
              <img
                className="w-4/5 m-auto rounded-md object-cover"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Your Name</label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Your Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  placeholder="user EMail"
                  className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
              {/* <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Your Email</label>
                <input
                  placeholder=""
                  defaultValue={user?.email}
                  className="w-full rounded-md border h-10 focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div> */}
              <div className="col-span-full sm:col-span-3 ">
                <input
                  type="submit"
                  value="Add Service"
                  className="btn btn-warning btn-outline w-full md:ml-32 mt-10"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddService;
