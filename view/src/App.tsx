import React from 'react';
import './App.styl';
import Operation from './components/Operation/Operation';
import Preview from './components/Preview/Preview';
import Container from '@material-ui/core/Container';

const App: React.FC = () => {
  return (
    <Container>
      <Operation></Operation>
      <Preview></Preview>
    </Container>
  );
}

export default App;
