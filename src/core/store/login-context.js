import { createContext } from "react";
import { toast } from "react-toastify";

export const loginReducer = (login, action) => {

  let newLogin = { ...login };
  if (action.type === "login") {
    newLogin.logged = true;
    newLogin.email = action.data.email;
    newLogin.password = action.data.password;
    localStorage.setItem("login", JSON.stringify(newLogin));
  } else if (action.type === "logout") {
    newLogin = {
      email: "",
      password: "",
      logged: false,
    }
    localStorage.setItem(
      "login",
      JSON.stringify(newLogin)
    );
  }
  return newLogin;
};
export const defaultLoginContext = JSON.parse(
  localStorage.getItem("login")
) ?? {
  email: "",
  password: "",
  logged: false,
};

const LoginContext = createContext(defaultLoginContext);
export const LoginDispatchContext = createContext(loginReducer);

export default LoginContext;
