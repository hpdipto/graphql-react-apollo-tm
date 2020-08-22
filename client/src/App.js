import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import './App.css';
import logo from './logo.png';

import Launches from './components/Launches';

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: 'http://localhost:5000/graphql'
});

const client = new ApolloClient({
  cache: cache,
  link: link
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
