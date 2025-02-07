
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import axios from 'axios';
import AuthRoute from './components/AuthRoute';
import Dashboard from './pages/Dashboard';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import CreateEvent from './pages/CreateEvent';
import Login from './pages/Login';
import Register from './pages/Register';

// Styled Components
const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: #0a0a2e;
  color: white;
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;


function App() {
    // In the parent component (likely App.js)
    const [events, setEvents] = useState([]); // Initialize with empty array

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/events`)
            .then(response => {
                if (Array.isArray(response.data)) {
                    setEvents(response.data);
                }
            })
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    return (
        <Router>
            <AppContainer>
                {/* Holographic Background */}
                <CanvasContainer>
                    <Canvas>
                        <Stars radius={100} depth={50} count={5000} factor={4} />
                    </Canvas>
                </CanvasContainer>

                {/* Navbar */}
                <Navbar />

                {/* Routes */}
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={
                        <AuthRoute>
                            <Dashboard />
                        </AuthRoute>
                    } />
                </Routes>
            </AppContainer>
        </Router>
    );
}

export default App;
