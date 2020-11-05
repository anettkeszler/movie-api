import React, { useState, useEffect } from 'react';
import Background from '../assets/movies2.jpg';
import './Login.css';
import axios from 'axios';
import { Button, FormGroup, FormControl } from "react-bootstrap";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return userName.length > 4 && password.length > 4;
  }

  const sendData = () => {
    const userData = {
      userName: userName,
      password: password
    };
    console.log(userData)
    axios.post('http://localhost:8080/auth/login', userData).catch(error => {
      console.log(error);
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    sendData();
  }

  return (
    <div className="login-container">
      <div className="Login">
        <form onSubmit={handleSubmit}>
        <p className="label">Log in</p>
          <FormGroup controlId="text" className="text-container">
            <FormControl className="text-box"
              autoFocus
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" className="text-container">
            <FormControl className="text-box"
              value={password}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button block className="button" disabled={!validateForm()} type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}