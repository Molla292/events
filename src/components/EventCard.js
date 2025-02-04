import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

const EventCard = ({ event }) => {
  return (
    <Card>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <Link to={`/event/${event._id}`}>View Details</Link>
    </Card>
  );
};

export default EventCard;