import React, { useEffect, useState } from "react";
import "./login.css";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useVideo } from "context/videoContext";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user, setUser} = useVideo()
  const navigate = useNavigate();

  useEffect(()=>{
    if(user){
      navigate("/")
    }
  },[user])

  const loginHandler = async (email, password) => {
    try {
      let formData = JSON.stringify({ email, password });
      const response = await axios.post("/api/auth/login", formData);
      console.log(response.data);
      localStorage.setItem(
        "user",
        JSON.stringify({
          encodedToken: response.data.encodedToken,
          firstName: response.data.foundUser.firstName,
          lastName: response.data.foundUser.lastName,
        })

      );
      setUser({
        encodedToken: response.data.encodedToken,
        firstName: response.data.foundUser.firstName,
        lastName: response.data.foundUser.lastName,
      })
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-wrapper">
        <h1>Login</h1>

        <TextField
          id="outlined-password-input"
          className="input-box"
          label="user"
          type="text"
          autoComplete="current-password"
          onInput={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          className="input-box"
          label="password"
          type="password"
          autoComplete="current-password"
          onInput={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={() => {
            loginHandler("adarshbalika@gmail.com", "adarshBalika123");
            // setEmail("adarshbalika@gmail.com");
            // setPassword("adarshBalika123");
          }}
        >
          Login with guest user
        </button>
        <button onClick={() => loginHandler(email, password)}>Login</button>
      </div>
    </div>
  );
};
