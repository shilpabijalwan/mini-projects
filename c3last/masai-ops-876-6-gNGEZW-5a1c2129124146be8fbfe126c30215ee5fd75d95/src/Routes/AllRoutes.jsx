import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from "../Components/PrivateRoute";
import SingleRestaurantPage from "./SingleRestaurantPage";
function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            {" "}
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/singleproductspage/:id"
        element={
          <PrivateRoute>
            <SingleRestaurantPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
