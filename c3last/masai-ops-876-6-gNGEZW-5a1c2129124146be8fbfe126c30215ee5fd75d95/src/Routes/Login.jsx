import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const { userLogin, state } = useContext(AuthContext);
  console.log(userLogin, state);

  const Navigate = useNavigate();
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setpassword] = useState("eve.holt@reqres.in");
  const handleonsubit = (e) => {
    e.preventDefault();
    let obj = {
      email: email,
      password: password,
    };
    const fetcheddata = () => {
      fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          userLogin(data.token);
          Navigate("/dashboard");
          console.log(data.token);
        });
    };
    fetcheddata();
  };
  return (
    <div
      style={{
        border: "1px solid gray",
        width: "300px",
        margin: "auto",
        backgroundColor: "#D9AFD9",
        backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
        padding: "30px",
      }}
    >
      <h3>use given email , password- cityslicka</h3>{" "}
      <h1> eve.holt@reqres.in</h1>
      <form
        data-testid="login-form"
        onSubmit={handleonsubit}
      >
        <div>
          <label>
            Email :
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              data-testid="email-input"
              type="email"
              placeholder="email"
            />
          </label>
        </div>
        <div>
          <br />

          <label>
            Password :
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <input
            data-testid="form-submit"
            type="submit"
            value="SUBMIT"
          />
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
