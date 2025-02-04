import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

function Login() {
  return (
    <LoginContainer>
      <h1>Login</h1>
      {/* Add login form here */}
    </LoginContainer>
  );
}

export default Login;