import React from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

function Register() {
  return (
    <RegisterContainer>
      <h1>Register</h1>
      {/* Add registration form here */}
    </RegisterContainer>
  );
}

export default Register;