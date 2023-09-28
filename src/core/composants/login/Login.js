import { useContext, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import LoginContext, { LoginDispatchContext } from "../../store/login-context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const login = useContext(LoginContext);
  const loginDispatch = useContext(LoginDispatchContext);
  const navigate = useNavigate()
  const formInfo = useRef({
    email: "",
    password: ""
  })
  const handleSubmitForm = (e) => {
    e.preventDefault();

    

    loginDispatch({type: "login", data: formInfo.current})
    navigate("/")
  };

  const handleInputChange = (e) => {
    formInfo.current[e.target.type] = e.target.value
  }

  return (
    <Form onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleInputChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters" name="password" onChange={handleInputChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
