import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import axios from 'axios';

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
    const [events, setEvents] = useState([]);

    // Fetch events from the backend
    useEffect(() => {
        axios.get('/api/events')
            .then((response) => setEvents(response.data))
            .catch((err) => console.error('Error fetching events:', err));
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
                    <Route path="/" element={<Home events={events} />} />
                    <Route path="/event/:id" element={<EventDetails />} />
                    <Route path="/create-event" element={<CreateEvent />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </AppContainer>
        </Router>
    );
}

export default App;