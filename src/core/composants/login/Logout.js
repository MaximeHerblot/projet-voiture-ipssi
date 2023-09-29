import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext, { LoginDispatchContext } from "../../store/login-context";
import { toast } from "react-toastify";

const Logout = () => {
  useEffect(() => {
  }, []);
  const navigate = useNavigate();
  const loginDispatch = useContext(LoginDispatchContext);
  loginDispatch({ type: "logout" });
  navigate("/");
};

export default Logout;
