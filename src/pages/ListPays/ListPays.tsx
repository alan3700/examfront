import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';

interface Pays {
  name: string;
  continent: {
    name: string;
  };
}
const GET_PAYS = gql`
query {
  countries {
    name
    continent{
      name
    }
  }
}
`;

function ListPays() {
  const { continent } = useParams();
  const { loading, error, data } = useQuery<{ countries: Pays[] }>(GET_PAYS)
  return (
<>
  <h1>ListPays {continent}</h1>

  <ul>

  {data &&
  data?.countries?.map((pays:Pays) => {
    console.log(pays.continent.name, continent)
   if( pays.continent.name == continent){
    
    return (
      <Link to={`/Pays/${pays.name}`}>
      <li key={pays.name}>{pays.name}</li>
      </Link>
    )
   }
  
  })}
  </ul>
</>


  );
}

export default ListPays;
