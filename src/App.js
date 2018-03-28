import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
const MainLayout = styled.div`
height: 100vh;

`;

class App extends React.Component {
  render() {
    return (
  <MainLayout>
<Header />
  </MainLayout>
    );
  }
}

export default App;
