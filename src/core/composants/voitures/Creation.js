import { useContext, useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import LoginContext from "../../store/login-context";
import axios from "axios";

const Creation = () => {
  const handleSubmitForm = () => {};
  const formInfo = useRef({});
  const handleInputChange = (e) => {
    formInfo.current[e.target.type] = e.target.value;
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
        name="brand"
        aria-label="Marque"
        onChange={handleInputChange}
      >
        {marques.map((marque) => (
          <option value={marque.id}>{marque.name}</option>
        ))}
      </Form.Select>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Creation;
