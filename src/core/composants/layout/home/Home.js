import React, { useEffect, useState } from "react";
//import { Button } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";
//import { Image } from "react-bootstrap";



const Home =() => {

    const [Car, setCar] = useState([]); 
    useEffect(() => {
        axios.get('https://formation.inow.fr/demo/api/v1/brands').then(resp => {
            setCar(resp.data); // Assurez-vous que votre API renvoie des données sur les voitures
        }).catch(error => {
            alert(error.message);
        });
    }, []);

    <div>
    <img src="C:\Users\salim\Downloads" alt="Tesla" />
    
  </div>
    

    return(
     <tbody>
    {Car?.map((Car, index) => (
        <tr key={index}>
            <td>{Car.name}</td>
            <td>
                <img src={`/voiture/${Car.image}` }/>
            </td>
            <td>
                <Link to={`/cars/name/${Car.name}`} className="btn btn-primary">
                    suivant
                </Link>
            </td>
        </tr>
    ))}
    </tbody>

    );
       
}
export default Home;






    



