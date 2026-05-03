import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img src={logo} className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-lg">

          <NavLink to="/" className={({ isActive }) =>
            `px-2 py-1 rounded-md transition-all duration-200 
            ${isActive
              ? "bg-green-700 text-white shadow-sm"
              : "text-gray-700 hover:bg-green-100 hover:scale-105"}`
          }>
            Home
          </NavLink>

          <NavLink to="/animals" className={({ isActive }) =>
            `px-2 py-1 rounded-md transition-all duration-200 
            ${isActive
              ? "bg-green-700 text-white shadow-sm"
              : "text-gray-700 hover:bg-green-100 hover:scale-105"}`
          }>
            Animals
          </NavLink>

          {!user ? (
            <>
              <NavLink to="/login" className={({ isActive }) =>
                `px-2 py-1 rounded-md transition-all duration-200 
                ${isActive
                  ? "bg-green-700 text-white shadow-sm"
                  : "text-gray-700 hover:bg-green-100 hover:scale-105"}`
              }>
                Login
              </NavLink>

              <NavLink to="/register" className={({ isActive }) =>
                `px-2 py-1 rounded-md transition-all duration-200
                ${isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-green-100 hover:scale-105"}`
              }>
                Register
              </NavLink>
            </>
          ) : (
            // ✅ Profile Image + Dropdown (Desktop)
            <div className="relative" ref={menuRef}>

              <img
                src={user.photoURL || "https://i.ibb.co/2kR5zqK/user.png"}
                className="w-9 h-9 rounded-full cursor-pointer border"
                onClick={() => setOpen(!open)}
              />

              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border py-2 z-50 text-sm">

                  <NavLink
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Profile
                  </NavLink>

                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          )}

        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative" ref={menuRef}>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl"
          >
            ⋮
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg border py-2 z-50 text-sm shadow-lg hover:shadow-xl transition">

              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Home
              </NavLink>

              <NavLink
                to="/animals"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Animals
              </NavLink>

              {!user ? (
                <>
                  <NavLink
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Register
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Profile
                  </NavLink>

                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>
                </>
              )}

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;