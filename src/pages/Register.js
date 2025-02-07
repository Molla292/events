import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterContainer = styled.div`
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

const SuccessMessage = styled.div`
  color: #00ff88;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  background: rgba(0, 255, 136, 0.1);
`;

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);

        try {
            // Send POST request to backend
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/auth/register`,
                {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }
            );

            // Handle successful registration
            setSuccess('Registration successful! Redirecting...');
            localStorage.setItem('token', response.data.token); // Save token
            setTimeout(() => {
                navigate('/'); // Redirect to home page
            }, 2000);
        } catch (err) {
            // Handle errors
            setError(err.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <RegisterContainer>
            <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="6"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    minLength="6"
                />

                {error && <ErrorMessage>{error}</ErrorMessage>}
                {success && <SuccessMessage>{success}</SuccessMessage>}

                <SubmitButton type="submit" disabled={loading}>
                    {loading ? 'Creating Account...' : 'Register Now'}
                </SubmitButton>
            </Form>
        </RegisterContainer>
    );
}

export default Register;