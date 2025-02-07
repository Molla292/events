import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';


const Nav = styled.nav`
  position: relative;
  z-index: 1;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(25, 25, 65, 0.7);
  backdrop-filter: blur(10px);
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.2rem;
  &:hover {
    color: #0ff;
  }
`;

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.location.href = '/login';
    };

    return (
        <Nav>
            <NavLink to="/">FutureEvents</NavLink>
            <div>
                {isLoggedIn ? (
                    <NavLink to="#" onClick={handleLogout}>Logout</NavLink>
                ) : (
                    <>
                        <NavLink to="/register">Register</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </>
                )}
            </div>
        </Nav>
    );
};

export default Navbar;