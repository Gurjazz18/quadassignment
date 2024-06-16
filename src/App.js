// src/App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskLists';
import Weather from './components/Weather';
import './App.css';
import { login, logout } from './redux/authreducer/action';

const App = () => {
  const isAuthenticated = useSelector((state) => state.AuthReducer.isAuth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const [password, setPasswod] = useState("")
  const [location,setLocation]=useState("New York")

  const handleLogin = (e) => {
    e.preventDefault()
    if (email && password) {
      dispatch(login({ email, password })).then((res) => {
        console.log(res, "logged");
      })
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <button onClick={handleLogout} className='auth-btn'>Logout</button>
          <Weather location={location} />
          <TaskInput />
          <TaskList />
        </>
      ) : (

        <div className="formdiv">
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email</label>
              <input
                placeholder='email'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label>Password</label>
              <input
                placeholder='password'
                type="password"
                value={password}
                onChange={(e) => setPasswod(e.target.value)}
              />
            </div>

            <div>
              <label>Enter Location</label>
              <input
                placeholder='location'
                type="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <input type="submit" value="LOGIN" />
          </form>
        </div>

      )}
    </div>

  );
};

export default App;
