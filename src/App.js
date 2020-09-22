import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PortfolioForm from './components/portfolioForm';

/*export default function App() {
  return (
    <div className="App">
      <PortfolioForm></PortfolioForm>
    </div>
  );
}*/

export default function App() {
  return (
      <Container maxWidth="sm" align="center">
        <Typography variant="h5" component="h1">
          Data submission protoype
        </Typography>
        <PortfolioForm />
      </Container>
  );
}
