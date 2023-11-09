

import { useEffect, useState } from "react";
import axios from "axios";
import PopularService from "../Components/PopularService";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    axios.get("http://localhost:5000/services").then((res) => {
      const data = res.data;
      setServices(data);
    });
  }, []);

  useEffect(() => {

    if (search) {
      axios.get(`http://localhost:5000/services?search=${search}`).then((res) => {
        const data = res.data;
        console.log(data);
        setServices(data);
      });
    }
  }, [search]);
  console.log(search);



  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
    // axios.get(`http://localhost:5000/services?search=${search}`).then((res) => {
    //     const data = res.data;
    //     console.log(data);
    //     setServices(data);
    //   });
  }

  return (
    <div className="max-w-screen-xl">
      <Helmet>
        <title> Service Swap || SERVICE</title>
      </Helmet>
      <div className="items-center flex justify-center pb-4 bg-white dark:bg-gray-900">
        <form className="flex gap-4 items-center w-full justify-center" onSubmit={handleSearch}>
          <div className="relative w-1/2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="search"
              id="table-search-users"
              className="w-full block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for services"
            />
          </div>
          <div className="border-2">
            <input type="submit" value="Search" className="btn btn-outline btn-warning btn-md" />
          </div>
        </form>
      </div>
      <div className="grid gap-10 justify-center">
        {services.map((service) => (
          <PopularService key={service._id} service={service}></PopularService>
        ))}
      </div>
    </div>
  );
};

export default Services;
