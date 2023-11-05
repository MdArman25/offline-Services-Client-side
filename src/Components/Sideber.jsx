import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* Navbar menu content here */}
      <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'btn btn-warning btn-sm' : 'btn btn-ghost btn-sm'
            }
          >
            Home
          </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'btn btn-warning ' : 'btn btn-ghost '
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? 'btn btn-warning ' : 'btn btn-ghost '
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/Services"
        className={({ isActive }) =>
          isActive ? 'btn btn-warning ' : 'btn btn-ghost '
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? 'btn btn-warning ' : 'btn btn-ghost '
        }
      >
        Login
      </NavLink>
    </div>
  );
};

export default Sidebar;