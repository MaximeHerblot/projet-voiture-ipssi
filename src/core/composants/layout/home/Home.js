import React, { useEffect, useState } from "react";
//import { Button } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";
//import { Image } from "react-bootstrap";



const Home =() => {

    const [marques, setMarques] = useState([]); 
    useEffect(() => {
        axios.get('https://formation.inow.fr/demo/api/v1/brands').then(resp => {
            setMarques(resp.data); // Assurez-vous que votre API renvoie des données sur les voitures
        }).catch(error => {
            alert(error.message);
        });
    }, []);

   
    return(
     <tbody>

    {marques?.map((marque, index) => (
        <tr key={index}>
            <td>{marque.name}</td>
            <td>
                <img src={`/voiture/${marque.image}`}/>
            </td>
            <td>
                <Link to={`/marque/${marque.id}`} className="btn btn-primary">
                    suivant
                    
                </Link>
            </td>
        </tr>
    ))}
    </tbody>

    );
       
}
export default Home;






    



