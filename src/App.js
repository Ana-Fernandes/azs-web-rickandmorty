import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import Home from './pages/Home';

const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

export default App;
