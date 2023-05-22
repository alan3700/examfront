import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Continent from './pages/Continent/Continent';
import ListPays from './pages/ListPays/ListPays';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Pays from './pages/Pays/Pays';
function App() {
  
  const client = new ApolloClient({
    uri: 'https://countries.nausicaa.wilders.dev/graphql',
    cache: new InMemoryCache(),
  });
  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Continent/>} />
          <Route path="/ListPays/:continent" element={<ListPays/>} />
          <Route path="/Pays/:id" element={<Pays/>} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

