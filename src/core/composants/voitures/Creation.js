import { useContext, useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import LoginContext from "../../store/login-context";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Creation = () => {
  const params = useParams();
  const [isCalled, setIsCalled] = useState(false);
  const type = useRef("creation");
  if (params.id) {
    type.current = "modification";
  }
  useEffect(() => {
    if (type.current === "modification") {
      axios
        .get(`https://formation.inow.fr/demo/api/v1/cars/${params.id}`)
        .then((response) => {
          setFormInfo(response.data);
          setIsCalled(true);
        });
    }
  }, []);
  const navigate = useNavigate();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    //     "id": 18,
    // "model": "X7",
    // "price": 60000,
    // "dateOfCirculation": "2023-02-01T00:00:00",
    // "brand": null,
    // "brandID": 3
    let newFormInfo = {
      ...formInfo,
      price: Number(formInfo.price),
      brandID: Number(formInfo.brandID),
      brand: null,
    };

    // formInfo.current.price = Number(formInfo.current.price);
    // formInfo.current.brandID = Number(formInfo.current.brandID);
    // formInfo.current.brand = null;
    if (type.current === "creation") {
      axios
        .post("https://formation.inow.fr/demo/api/v1/cars", newFormInfo)
        .then(() => {
          toast.success("Vous avez bien créer une voiture");

          navigate("/voitures");
        });
    } else if (type.current === "modification") {
      axios
        .put(
          `https://formation.inow.fr/demo/api/v1/cars/${params.id}`,
          newFormInfo
        )
        .then(() => {
          toast.success("Vous avez bien modifié une voiture");

          navigate("/voitures");
        });
    }
  };

  const [formInfo, setFormInfo] = useState({});
  const handleInputChange = (e) => {
    if (e.target.name === "price" || e.target.name === "brandID") {
      e.target.value = Number(e.target.value);
    }
    setFormInfo((previousState, value) => {
      return { ...previousState, [e.target.name]: e.target.value };
    });
    // formInfo[e.target.name] = e.target.value;
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
  const DateToHTMLDateInputValue = (date) => {
    console.log(date);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${date.getDate()}`;
  };
  return (
    <Form onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Modele</Form.Label>

        <Form.Control
          type="text"
          placeholder="Modele"
          name="model"
          onChange={handleInputChange}
          value={formInfo.model}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Prix</Form.Label>
        <Form.Control
          type="number"
          placeholder="prix"
          name="price"
          onChange={handleInputChange}
          value={formInfo.price}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Date de mise en circulation</Form.Label>
        <Form.Control
          type="date"
          placeholder="Date de mise en circulation"
          name="dateOfCirculation"
          onChange={handleInputChange}
          value={DateToHTMLDateInputValue(new Date(formInfo.dateOfCirculation))}
        />
      </Form.Group>
      <Form.Select
        name="brandID"
        aria-label="Marque"
        onChange={handleInputChange}
        required
        value={formInfo.brandID}
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
