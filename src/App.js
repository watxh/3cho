import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import Time from "./component/Time"

function App() {
  return (
    <Page>
      <Time/>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
