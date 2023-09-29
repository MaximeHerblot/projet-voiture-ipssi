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
    const buttonStyle = {
        marginTop: "auto", // Alignez les boutons en bas de leur conteneur
    };
   
    return(
        <div className="container">
        <div className="row">
            {marques?.map((marque, index) => (
                <div key={index} className="col-md-3 text-center mb-4">
                    <div className="d-flex flex-column align-items-center" >
                        <h4>{marque.name}</h4>
                        <img src={`/voiture/${marque.image}`} alt={marque.name} />
                        <Link to={`/marque/${marque.id}`} className="btn btn-primary mt-2">
                            Suivant
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}






export default Home;













    



