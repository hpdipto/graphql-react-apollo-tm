import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import logo from './logo.png';

import Launches from './components/Launches';
import Launch from './components/Launch';

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: '/graphql'
});

const client = new ApolloClient({
  cache: cache,
  link: link
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />

          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
