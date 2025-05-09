import React from 'react';
import './Login.css'; // Assuming you have a CSS file for styling
const Login = () => {
  return (
    <div className='login'> 
      <h1>Login</h1>
      <form>
        <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className='role'>
          <label htmlFor="role">Role:</label>
          <select id="role" name="role" required>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Login;
