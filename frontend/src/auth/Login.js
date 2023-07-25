import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const LOGIN_URL = "/users";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [success, setSuccess] = useState(false);

  // set focus on username box when page loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // clears error message once typing happens in username or password boxes
  useEffect(() => {
    setErrorMsg("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      setAuth({ user, password, accessToken });
      setUser("");
      setPassword("");
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrorMsg("No Server Response");
      } else {
        setErrorMsg("Login Failed");
      }
    }
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="input-container">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <button className="btn-main">Sign In</button>
            <p ref={errorRef} className={errorMsg ? "error-message" : "hidden"}>
              {errorMsg}
            </p>
          </div>
        </form>
        <div>
          <div className="flex-down mt-2 justify-center align-center text-center">
            <p>
              Don't have an account?
              <br />
              <span>
                <Link to={"/register"}>Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
