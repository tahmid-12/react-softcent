import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import Customers from './components/Customers';
import './App.css';

function App() {
  return (
    <DIV>
      <Navbar />
      <Home />
      <Content />
      <Customers />
    </DIV>
  );
}

const DIV = styled.div`
    
`;
export default App;
