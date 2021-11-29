import React, {useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8000/auth/handle_login', {
    credentials: 'include',
    method: 'POST',
    mode: 'cors',
    body: new URLSearchParams(credentials)
  })
    .then(data => data.json())
 }

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [csrfmiddlewaretoken, setCsrfToken] = useState();
  const cookies = new Cookies();

  useEffect(() => {
    fetch("http://localhost:8000/api/get-csrf-token/")
    .then(res => res.json())
    .then(
      (result)=> {
        setCsrfToken(result.csrftoken);
        cookies.set('csrftoken',result.csrftoken,{path: '/'});
        console.log(cookies.get('csrftoken'));
      })
  },[])

  const handleSubmit = async e => {
    e.preventDefault();
    await loginUser({
      username,
      password,
      csrfmiddlewaretoken,
    });
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};