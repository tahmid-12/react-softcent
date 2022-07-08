import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import Customers from './components/Customers';
import Work from './components/Work';
import './App.css';

function App() {
  return (
    <DIV>
      <Navbar />
      <Home />
      <Content />
      <Customers />
      <Work />
    </DIV>
  );
}

const DIV = styled.div`
    
`;
export default App;
