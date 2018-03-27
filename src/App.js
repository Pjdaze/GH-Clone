import React from 'react';
import styled from 'styled-components';
import './App.css';

const MainLayout = styled.div`

height: 50vh; 

display: flex;
justify-content: center;
align-items: center;
h1 {
  text-align: center;
}
`;

class App extends React.Component {
  render() {
    return (
  <MainLayout>GH-Clone</MainLayout>
    );
  }
}

export default App;
