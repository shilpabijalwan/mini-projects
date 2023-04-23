import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import RestaurantTable from "../Components/RestaurantTable";
import Pagination from "../Components/Pagination";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const { state, userLogout } = useContext(AuthContext);
  console.log(state);
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);

  const fetcheddata = (page) => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`,
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        console.log(data);

        setData(data);
      });
  };

  useEffect(() => {
    fetcheddata(page);
  }, [page]);
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button
          data-testid="logout-btn"
          onClick={userLogout}
        >
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{state.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={data}  loading={loading}/>
      </div>
      <div data-testid="pagination-container">
        <Pagination
          totalpages={data.totalPages}
          handlepageChange={(page) => setPage(page)}
          currentPage={page}
        />
      </div>
    </div>
  );
}

export default Dashboard;
