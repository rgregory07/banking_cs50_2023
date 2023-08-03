import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, useField, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof (user, password));
    let url = `http://localhost:8000/users/users/`;
    axios
      .post(
        url,
        {
          username: user,
          password: password,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log(response.data);
        setSuccess(true);
      })
      .catch((err) => console.log(err));
  };

  console.log(user, validName);
  return (
    <>
      {success ? (
        <div>
          <h1>You are Registered!</h1>
          <br />
          <span>
            <Link to={"/"}>Go to Dashboard</Link>
          </span>
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
                <label htmlFor="username">
                  Username
                  <span className={validName ? "valid" : "hide"}>
                    <TaskAltIcon />
                  </span>
                  <span className={validName || !user ? "hide" : "invalid"}>
                    <HighlightOffIcon />
                  </span>
                </label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  value={user}
                  pattern="^[a-zA-Z][a-zA-Z0-9-_]{3, 19}$"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <p
                  id="username-instructions"
                  className={
                    userFocus && user && !validName ? "instructions" : "hide"
                  }
                >
                  4 - 20 Characters
                  <br />
                  Letters, Numbers, Hyphens & Unserscores are allowed{" "}
                </p>
              </div>
              <div className="input-container">
                <label htmlFor="password">
                  Password
                  <span className={validPassword ? "valid" : "hide"}>
                    <TaskAltIcon />
                  </span>
                  <span className={validPassword || !user ? "hide" : "invalid"}>
                    <HighlightOffIcon />
                  </span>
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  value={password}
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                />
                <p
                  id="username-instructions"
                  className={
                    passwordFocus && password && !validPassword
                      ? "instructions"
                      : "hide"
                  }
                >
                  8 - 24 Characters
                  <br />
                  Must include uppercase and lowecase letters, a number, and a
                  special character.
                  <br />
                  Special characters include: !@#$%
                </p>
              </div>
              <div className="input-container">
                <label htmlFor="confirm-password">
                  Confirm Password
                  <span className={validMatch ? "valid" : "hide"}>
                    <TaskAltIcon />
                  </span>
                  <span
                    className={validMatch || !password ? "hide" : "invalid"}
                  >
                    <HighlightOffIcon />
                  </span>
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  onChange={(e) => setMatchPassword(e.target.value)}
                  required
                  value={matchPassword}
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
