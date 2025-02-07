import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api from '../api'; // Assuming this is your axios instance

// Styled components for the login form
const LoginContainer = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 1;
  max-width: 500px;
  margin: 2rem auto;
  background: rgba(25, 25, 65, 0.8);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
`;

const Input = styled.input`
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0ff;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #0ff, #f0f);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  margin-top: 1rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.4);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  background: rgba(255, 68, 68, 0.1);
`;

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await api.post('/auth/login', formData); // Using the api instance

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            navigate('/dashboard'); // Redirect to the dashboard
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginContainer>
            <h1>Welcome Back</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <SubmitButton type="submit" disabled={loading}>
                    {loading ? 'Logging In...' : 'Sign In'}
                </SubmitButton>
            </Form>
        </LoginContainer>
    );
};

export default Login;