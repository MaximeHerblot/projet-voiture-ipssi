import { useContext, useEffect, useState } from "react";
import LoginContext from "../../store/login-context";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Voitures = () => {
  const [voitures, setVoitures] = useState([]);
  const [marques, setMarques] = useState({});
  const login = useContext(LoginContext);
  useEffect(() => {
    axios.get("https://formation.inow.fr/demo/api/v1/cars").then((response) => {
      setVoitures(response.data);
    });
    axios
      .get("https://formation.inow.fr/demo/api/v1/brands")
      .then((response) => {
        let tmpMarque = {};
        response.data.forEach((marque) => {
          tmpMarque[marque.id] = marque;
        });
        setMarques(tmpMarque);
      });
  }, []);

  const handleDeleteVoiture = (idVoiture) => {
    if (window.confirm(`Voulez-vous supprimer la voitures avec l'id ${idVoiture} `)) {

      axios
        .delete(`https://formation.inow.fr/demo/api/v1/cars/${idVoiture}`)
        .then(()=> {
            let tmpVoitures = []
            voitures.forEach((voiture, index)=>{
                if (!(voiture.id === idVoiture)){
                    tmpVoitures.push(voiture)
                }
            })
            setVoitures(tmpVoitures)
        });
    }
  };

  return (
    <table>
      <tr>
        <th>Model</th>
        <th>Prix</th>
        <th>Date de Circulation</th>
        <th>Marque</th>
        {login.logged && <th>Action</th>}
      </tr>
      {voitures.map((voiture, index) => (
        <tr key={index}>
          <td>{voiture?.model}</td>
          <td>{voiture?.price}</td>
          <td>{new Date(voiture?.dateOfCirculation).toDateString()}</td>
          <td>{marques[voiture?.brandID]?.name}</td>
          {login.logged && (
            <td>
              <Button>
                <Link to={`/voitures/modifier/${voiture.id}`}> Modifier </Link>
              </Button>
              <Button onClick={handleDeleteVoiture.bind(undefined, voiture.id)}>
                Supprimer
              </Button>
            </td>
          )}
        </tr>
      ))}
    </table>
  );
};

export default Voitures;
