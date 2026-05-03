import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  const shown = useRef(false);

  useEffect(() => {
  if (!user && location.state?.from && !shown.current) {
    toast.info("Please login to view details");
    shown.current = true;
  }
}, [user, location]);

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
      />
    );
  }

  return children;
};

export default PrivateRoute;