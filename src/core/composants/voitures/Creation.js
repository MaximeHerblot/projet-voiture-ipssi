import { useContext, useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import LoginContext from "../../store/login-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Creation = () => {
  const navigate = useNavigate();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    //     "id": 18,
    // "model": "X7",
    // "price": 60000,
    // "dateOfCirculation": "2023-02-01T00:00:00",
    // "brand": null,
    // "brandID": 3
    formInfo.current.price = Number(formInfo.current.price)
    formInfo.current.brandID = Number(formInfo.current.brandID)
    formInfo.current.brand = null
    axios
      .post("https://formation.inow.fr/demo/api/v1/cars", formInfo.current)
      .then(() => {
        navigate("/voitures");
      });
  };

  const formInfo = useRef({});
  const handleInputChange = (e) => {
    if (e.target.name === "price" || e.target.name === "brand") {
      e.target.value = Number(e.target.value);
    }
    formInfo.current[e.target.name] = e.target.value;
  };
  const [marques, setMarques] = useState([]);
  const login = useContext(LoginContext);

  useEffect(() => {
    axios
      .get("https://formation.inow.fr/demo/api/v1/brands")
      .then((response) => {
        // let tmpMarque = {};
        // response.data.forEach((marque) => {
        //   tmpMarque[marque.id] = marque;
        // });
        setMarques(response.data);
      });
  }, []);

  return (
    <Form onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Modele</Form.Label>
        <Form.Control
          type="text"
          placeholder="Modele"
          name="model"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Prix</Form.Label>
        <Form.Control
          type="number"
          placeholder="prix"
          name="price"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Date de mise en circulation</Form.Label>
        <Form.Control
          type="date"
          placeholder="Date de mise en circulation"
          name="dateOfCirculation"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Select
        name="brandID"
        aria-label="Marque"
        onChange={handleInputChange}
        required
      >
        <option value="0">Veuillez choisir une marque</option>
        {marques.map((marque, index) => (
          <option key={index} value={marque.id}>
            {marque.name}
          </option>
        ))}
      </Form.Select>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Creation;
