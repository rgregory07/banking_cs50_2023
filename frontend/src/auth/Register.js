import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, useField, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

// username parameters
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

// // password parameters
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState();
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [password, setPassword] = useState();
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [matchPassword, setMatchPassword] = useState();
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errorMsg, setErrorMsg] = useState();
  const [success, setSuccess] = useState(false);

  // set focus on username box when page loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // checks for username requirements
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  // checks for password requirements & that passwords match
  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  // clears error message once typing happens in username / password / match password boxes
  useEffect(() => {
    setErrorMsg("");
  }, [user, password, matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, password);
    setSuccess(true);
  };

  //   useEffect(() => {
  //     success && console.log("Success!");
  //     axios.post(
  //       `http://localhost:8000/api/users-api/`,
  //       {
  //         username: { user },
  //         password: { password },
  //       },
  //       { headers: { "Content-Type": "application/json" } }
  //     );
  //   }, [success]);

  console.log(user, validName);
  return (
    <>
      {success ? (
        <div>
          <h1>You are logged in!</h1>
          <br />
          <p>Go To home</p>
        </div>
      ) : (
        <div>
          <p ref={errorRef} className={errorMsg ? "error-message" : "hidden"}>
            {errorMsg}
          </p>
          <h1 className="mb-2">Register</h1>
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
                  required
                  pattern="^[a-zA-Z][a-zA-Z0-9-_]{3, 23}$"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                  type="password"
                  id="confirm-password"
                  onChange={(e) => setMatchPassword(e.target.value)}
                  required
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
              </div>

              <button
                className="btn-main"
                disabled={
                  !validName || !validPassword || !validMatch ? true : false
                }
              >
                Register
              </button>
            </div>
          </form>
          <div className="flex-down mt-2 justify-center align-center text-center">
            <p>
              Already have an account?
              <br />
              <span>
                <Link to={"/login"}>Sign In</Link>
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
