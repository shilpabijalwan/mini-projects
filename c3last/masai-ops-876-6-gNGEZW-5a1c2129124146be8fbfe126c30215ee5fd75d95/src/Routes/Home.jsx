import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        border: "1px solid gray",
        textDecoration: "none",
      }}
    >
      <Link
        to="/login"
        style={{ textDecoration: "none" }}
      >
        <h3 data-testid="login-link">Login Page</h3>
      </Link>
      <Link
        to="/dashboard"
        style={{ textDecoration: "none" }}
      >
        <h3 data-testid="home-link">Dashboard</h3>
      </Link>
    </div>
  );
}
export default Home;
