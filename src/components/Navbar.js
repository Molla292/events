import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

function Navbar() {
  return (
    <Nav>
      <NavLink to="/">FutureEvents</NavLink>
      <div>
        <NavLink to="/create-event">Create Event</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </Nav>
  );
}

export default Navbar;