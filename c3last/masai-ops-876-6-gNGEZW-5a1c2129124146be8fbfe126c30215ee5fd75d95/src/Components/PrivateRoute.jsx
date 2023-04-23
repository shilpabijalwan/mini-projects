import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
  const { state } = useContext(AuthContext);
  if (!state.isAuth) {
    alert("this is a privateRoute you have to login first");
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
