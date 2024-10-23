import React from 'react';
import styled from 'styled-components';

// Styled Components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f4f8;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

const App = () => {
  return (
    <HomeContainer>
      <Title>Home</Title>
      <Subtitle>
        Welcome to the homepage! This is a simple styled Home component using Styled Components.
      </Subtitle>
      <Button>Learn More</Button>
    </HomeContainer>
  );
}

export default App;
