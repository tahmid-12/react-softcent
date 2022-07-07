import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <DIV>
      <Navbar />
      <Home />
      <Content />
    </DIV>
  );
}

const DIV = styled.div`
    
`;
export default App;
