import React from 'react';
import styled from 'styled-components';
import EventCard from '../components/EventCard';
import PropTypes from 'prop-types'; // Add prop-type validation

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
                {Array.isArray(events) && events.length > 0 ? (
                    events.map((event) => (
                        <EventCard key={event._id} event={event} />
                    ))
                ) : (
                    <p>No upcoming events found</p>
                )}
            </div>
        </HomeContainer>
    );
}

// Add prop type validation
Home.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            // Add other required event properties
        })
    )
};

// Set default props
Home.defaultProps = {
    events: []
};

export default Home;