import React from 'react';
import styled from 'styled-components';

const CreateEventContainer = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

function CreateEvent() {
  return (
    <CreateEventContainer>
      <h1>Create Event</h1>
      {/* Add event creation form here */}
    </CreateEventContainer>
  );
}

export default CreateEvent;