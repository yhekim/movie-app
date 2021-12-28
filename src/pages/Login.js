import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import oscar1 from "../img/movie.ico";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register">
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <img
          className="oscar"
          style={{
            height: "150px",
            width: "150px",
            margin: "0 auto 20px",
            display: "block",
            // padding: "0 30px",
            // backgroundColor: "white",
            // borderRadius: "30%",
          }}
          src={oscar1}
          alt="oscar"
        />
        <h1 className="form-title display-3">Login </h1>

        <form id="login">
          <div className="mb-3">
            <label for="email" className="form-label display-4">
              Email
            </label>
            <input
              type="email"
              style={{ lineHeight: "36px" }}
              className="form-control"
              id="email"
              placeholder="Enter your email address..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label display-4">
              Password
            </label>
            <input
              style={{ lineHeight: "36px" }}
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            style={{ lineHeight: "36px" }}
            type="button"
            className="btn btn-primary form-control"
            value="Login"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
