import { DocumentNode, gql, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactEmojiRender from 'react-emoji-render';

interface Pays {
  name: string;
  code:string;
  continent: {
    name: string;
  };
}

const GET_PAYS = gql`
query GetCountry($countryCode: ID!) {
  country(code: $countryCode) {
    name
    currency
    capital
    emoji
  }
}
`;

function Pays() {
  
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PAYS, {
    variables: {
      countryCode:id
    }
  });


  return (
<>
<h1>{data?.country?.name}</h1>
<img src={`//s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/${data?.country.name.toLowerCase()}.png`} alt="Flag" />
<p>Currency:{data?.country?.currency}</p>
<p>Capital:{data?.country?.capital}</p>

</>
  );
}

export default Pays;

