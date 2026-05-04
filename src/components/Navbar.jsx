import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-2">

        {/* Logo */}
        <Link to="/">
          <img src={logo} className="h-10" />
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-3 md:gap-6 text-sm md:text-lg flex-wrap">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-2 py-1 rounded-md transition 
              ${isActive
                ? "bg-green-700 text-white"
                : "text-gray-700 hover:bg-green-100"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/animals"
            className={({ isActive }) =>
              `px-2 py-1 rounded-md transition 
              ${isActive
                ? "bg-green-700 text-white"
                : "text-gray-700 hover:bg-green-100"}`
            }
          >
            All Animals
          </NavLink>

          {!user ? (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-2 py-1 rounded-md transition 
                  ${isActive
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:bg-green-100"}`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `px-2 py-1 rounded-md transition 
                  ${isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-green-100"}`
                }
              >
                Register
              </NavLink>
            </>
          ) : (
            <div className="relative" ref={menuRef}>

              {/* Profile Image */}
              <img
                src={user.photoURL || "https://i.ibb.co/2kR5zqK/user.png"}
                className="w-9 h-9 rounded-full cursor-pointer border"
                onClick={() => setOpen(!open)}
              />

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border py-2 z-50 text-sm">

                  <NavLink
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 hover:bg-green-600 hover:text-white transition"
                  >
                    My Profile
                  </NavLink>

                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-700 hover:text-white transition"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;