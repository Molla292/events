import React from 'react';
import styled from 'styled-components';

const EventDetailsContainer = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

function EventDetails() {
  return (
    <EventDetailsContainer>
      <h1>Event Details</h1>
      {/* Add event details here */}
    </EventDetailsContainer>
  );
}

export default EventDetails;