import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import styles from '../../App.module.css';
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
  <div className={styles.containerContinent}>
  {data &&
  data?.countries?.map((pays:Pays) => {
   if( pays.continent.name == continent){
    return (
      
      <Link className={styles.link} to={`/Pays/${pays.code}`}>
      <div key={pays.name}>
        <img className={styles.flag} src={`//s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/${pays?.name.toLowerCase()}.png`} alt="Flag" />
        <p>{pays.name}</p>
        </div>
      </Link>
      
    )
   }
  })}
  </div>
</>


  );
}

export default ListPays;
