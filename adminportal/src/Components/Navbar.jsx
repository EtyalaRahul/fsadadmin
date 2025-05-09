import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='nav-link home'>
        <img src="https://res.cloudinary.com/dasm9k1z9/image/upload/v1746799451/zqk5rpokluhqbybf9lfw.jpg" alt="icon" className="nav-icon" />
      </Link>
      <Link to="/farmfresh" className='nav-link'>Farm Fresh</Link>
      <Link to="/dailybasket" className='nav-link'>Daily Basket</Link>
      <Link to="/decoratives" className='nav-link'>Decoratives</Link>
      <Link to="/cosmetics" className='nav-link'>Cosmetics</Link>
      <Link to="/electronics" className='nav-link'>Electronics</Link>
      <Link to="/cleaners" className='nav-link'>Cleaners</Link>
      <Link to="/login" className='nav-link'>Login</Link>
    </nav>
  );
};

export default Navbar;
