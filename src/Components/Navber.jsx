/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/serviceman-cartoon-design-vector-illustration_693697-34-removebg-preview.png";
import Context from "../Hooks/useContext";
const Navbar = () => {
  const { user, logOut } = Context();
  return (
    <div className=" w-full max-w-[1250px] px-[25px] mx-auto flex  justify-between">
      <div className="flex items-center ">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <Link to={"/"} className="flex w-24 text-xl items-center font-bold ">
          <img className="" src={Logo} alt="" />
          <p className="text-xl font-extrabold">ServiceSwap</p>
        </Link>
      </div>
      <div className="flex-none hidden  justify-end lg:block">
        <div className="flex items-center gap-2">
          {/* Navbar menu content here */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            About
          </NavLink>
          
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            Services
          </NavLink>
          {user?.email && (
            <ul className="md:flex gap-5 pr-20">
              <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            Contact
          </NavLink>
              <NavLink
                to="/add_service"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
                }
              >
                <li className="">Add Service</li>
              </NavLink>
              <NavLink
                to="/my_service"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
                }
              >
                <li className="">My Service</li>
              </NavLink>
            </ul>
          )}
          <div className="navbar-end ">
            {user?.email ? (
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.display} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button className="btn btn-sm  btn-ghost">
                      {user.displayName}
                    </button>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "btn btn-warning " : "btn btn-ghost "
                      }
                      onClick={logOut}
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending "
                    : isPending
                    ? "pending "
                    : isActive
                    ? "btn btn-warning "
                    : "btn btn-ghost "
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
