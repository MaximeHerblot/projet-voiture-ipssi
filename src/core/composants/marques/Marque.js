import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Marque = () => {
    const {id}  = useParams();
    console.log(id)

    
    const [voitures, setVoitures] = useState([]);
    console.log(voitures)
    
    useEffect(() => {
        axios.get(`https://formation.inow.fr/demo/api/v1/cars`).then(resp => {
            console.log(resp.data)
        
        setVoitures(resp.data.filter((voiture) => voiture.brandID == id));
        }).catch(er => {
            alert(er.message);
        });
    }, []);

    console.log(voitures)
    return (

        
        <ul className="list-group">

         {voitures?.map((voiture) => (

            <li key={voiture.id} className="list-group-item">

                <strong>Modèle :</strong> {voiture.model}

                <br />

                <strong>Prix :</strong> {voiture.price} €

                <br />

                <strong>Date de circulation :</strong> {voiture.dateOfCirculation}

            </li>

        ))}

    </ul>

    );

} 

export default Marque;
