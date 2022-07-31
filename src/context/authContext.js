import { useNavigate } from "react-router-dom";
import { useVideo } from "./videoContext";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { user, setUser } = useVideo();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const loginHandler = async (email, password) => {
    try {
      let formData = JSON.stringify({ email, password });
      const response = await axios.post("/api/auth/login", formData);
      localStorage.setItem(
        "user",
        JSON.stringify({
          encodedToken: response.data.encodedToken,
          firstName: response.data.foundUser.firstName,
          lastName: response.data.foundUser.lastName,
          email: response.data.foundUser.email,
        })
      );
      setUser({
        encodedToken: response.data.encodedToken,
        firstName: response.data.foundUser.firstName,
        lastName: response.data.foundUser.lastName,
        email: response.data.foundUser.email,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signUpHandler = async (formData) => {
    try {
      const response = await axios.post("/api/auth/signup",formData);
      localStorage.setItem(
        "user",
        JSON.stringify({
          encodedToken: response.data.encodedToken,
          firstName: response.data.createdUser.firstName,
          lastName: response.data.createdUser.lastName,
          email: response.data.createdUser.email,
        })
      );
      setUser({
        encodedToken: response.data.encodedToken,
        firstName: response.data.createdUser.firstName,
        lastName: response.data.createdUser.lastName,
        email: response.data.createdUser.email,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <authContext.Provider
      value={{
        loginHandler,
        setEmail,
        email,
        password,
        setPassword,
        signUpHandler,
        firstName,
        lastName,
        setFirstName,
        setLastName,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
