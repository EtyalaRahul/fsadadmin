import React from 'react';
import './Signup.css'; // Assuming you have a CSS file for styling
const Signup = () => {
    return (
        <div className='signup'>
            <h1>Signup</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className='form-group'>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
                </div>

                <div className='form-group'>
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" required />
                </div>

                <div className='form-group'>
                    <label>Gender:</label>
                    <div>
                        <input type="radio" id="male" name="gender" value="male" required />
                        <label htmlFor="male">Male</label>

                        <input type="radio" id="female" name="gender" value="female" />
                        <label htmlFor="female">Female</label>

                        <input type="radio" id="other" name="gender" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>

                <div className='form-group'>
                    <label htmlFor="address">Address:</label>
                    <textarea id="address" name="address" rows="3" required></textarea>
                </div>

                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>

                <div className='form-group'>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                </div>

                <div className='form-group'>
                    <label htmlFor="role">Role:</label>
                    <select id="role" name="role" required>
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
