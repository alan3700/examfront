import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';

interface Pays {
  name: string;
  code:string
  emojiU:string;
  continent: {
    name: string;
  };
}
const GET_PAYS = gql`
query {
  countries {
    name
    code
    emojiU
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
   if( pays.continent.name == continent){
    return (
      <Link to={`/Pays/${pays.code}`}>
      <li key={pays.name}>
        <p>{pays.name}</p>
        <img src={`//s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/${pays?.name.toLowerCase()}.png`} alt="Flag" />
        </li>
      </Link>
    )
   }
  })}
  </ul>
</>


  );
}

export default ListPays;
