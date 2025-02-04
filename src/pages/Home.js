import React from 'react';
import styled from 'styled-components';
import EventCard from '../components/EventCard';

const HomeContainer = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

function Home({ events }) {
  return (
    <HomeContainer>
      <h1>Upcoming Events</h1>
      <div>
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </HomeContainer>
  );
}

export default Home;