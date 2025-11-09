import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function LogIn() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    function HandleSubmit(event) {
        event.preventDefault();
        // Handle form submission logic here
        axios.post('http://localhost:3001/Login', {Email, Password})  
        .then((response) => {
        console.log(response.data);
        window.location.href = '/home';
        })  .catch((error) => {
          console.error('There was an error!', error);
        });
        console.log({ Email, Password });

      }
      // this page will direct to home page after login successfull

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 rounded-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={HandleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 rounded-3">
            Login
          </button>

         
        </form>
      </div>
    </div>
    );

}

export default LogIn;