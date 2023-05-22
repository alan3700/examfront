import { DocumentNode, gql } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Pays {
  name: string;
  code:string;
  continent: {
    name: string;
  };
}

const GET_PAYS = gql`
  query GetCountry($countryCode: String!) {
    country(code: $countryCode) {
      name
      code
      continent {
        name
      }
    }
  }
`;

function Pays() {
  
  const { id } = useParams();

  // const { loading, data, error } = useQuery(GET_PAYS, {
  //   variables: {
  //     countryCode: id,
  //   },
  // });
  return (
<>
<h1>{id}</h1>
</>
  );
}

export default Pays;
function useQuery<T>(GET_PAYS: DocumentNode): { loading: any; error: any; data: any; } {
  throw new Error("Function not implemented.");
}

