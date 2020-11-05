import React, { useState, useEffect } from 'react';
import Background from '../assets/movies2.jpg';
import './Register.css';
import axios from 'axios';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  function validateForm() {
    if (password === password2) {
      return true;
    } else {
      return false;
    }
  }

  const sendData = () => {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password,
    };
    console.log(userData);
    axios({
      method: 'POST',
      url: 'http://localhost:8080/signup',
      data: userData,
    }).catch(error => {
      console.log(error);
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    sendData();
  }

  return (
    <div className='login-container'>
      <div className='Login'>
        <form onSubmit={handleSubmit}>
          <p className='label'>Sign Up for Free</p>
          <FormGroup controlId='text' bsSize='large' className='text-container'>
            <FormControl
              className='text-box-name'
              autoFocus
              type='text'
              placeholder='First Name'
              value={firstName}
              required
              onChange={e => setFirstName(e.target.value)}
            />
            <FormControl
              className='text-box-name'
              autoFocus
              type='text'
              placeholder='Last Name'
              value={lastName}
              required
              onChange={e => setLastName(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='text' className='text-container'>
            <FormControl
              className='text-box'
              autoFocus
              type='text'
              placeholder='User Name'
              value={userName}
              required
              onChange={e => setUserName(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='password' className='text-container'>
            <FormControl
              className='text-box'
              value={password}
              required
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
              type='password'
              minLength='6'
            />
          </FormGroup>
          <FormGroup controlId='password' className='text-container'>
            <FormControl
              className='text-box'
              value={password2}
              required
              placeholder='Confirm Password'
              onChange={e => setPassword2(e.target.value)}
              type='password'
              minLength='6'
            />
          </FormGroup>
          <Button
            block
            bsSize='large'
            className='button'
            disabled={!validateForm()}
            type='submit'
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
