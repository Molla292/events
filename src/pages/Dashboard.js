import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const SummaryCard = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin: 0 1rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 0.5rem;
`;

const CardValue = styled.p`
  font-size: 2rem;
  color: #333;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ActionButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Dashboard = () => {
  // Sample data for demonstration
  const upcomingEventsCount = 5; // Replace with actual data
  const pastEventsCount = 10; // Replace with actual data

  return (
    <DashboardContainer>
      <Title>Welcome to Your Events Dashboard</Title>
      <Summary>
        <SummaryCard>
          <CardTitle>Upcoming Events</CardTitle>
          <CardValue>{upcomingEventsCount}</CardValue>
        </SummaryCard>
        <SummaryCard>
          <CardTitle>Past Events</CardTitle>
          <CardValue>{pastEventsCount}</CardValue>
        </SummaryCard>
      </Summary>
      <ActionsContainer>
        <ActionButton onClick={() => alert('Create New Event')}>Create New Event</ActionButton>
        <ActionButton onClick={() => alert('View All Events')}>View All Events</ActionButton>
      </ActionsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;