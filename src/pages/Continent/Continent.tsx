import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

interface Continent {
  name: string;
  code:string;
}

const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      name
      code
    }
  }
`;

function ContinentList (){
  const { loading, error, data } = useQuery<{ continents: Continent[] }>(GET_CONTINENTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const continents = data?.continents || [];

  return (
    <div>
      <h2>List of Continents</h2>
      <ul>
        {continents.map((continent:Continent) => (
          <Link to={`/ListPays/${continent.name}`}>
          <li key={continent.name}>{continent.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};



export default ContinentList;