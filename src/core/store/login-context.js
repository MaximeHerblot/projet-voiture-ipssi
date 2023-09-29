import { createContext } from "react";

export const loginReducer = (login, action) => {
  let newLogin = { ...login };
  if (action.type === "login") {
    newLogin.logged = true;
    newLogin.email = action.data.email;
    newLogin.password = action.data.password;
    localStorage.setItem("login", newLogin);
  } else if (action.type === "logout") {
    newLogin = defaultLoginContext;
    localStorage.setItem("login", defaultLoginContext);
  }
  return newLogin;
};
export const defaultLoginContext = localStorage.getItem("login") ?? {
  email: "",
  password: "",
  logged: false,
};

const LoginContext = createContext(defaultLoginContext);
export const LoginDispatchContext = createContext(loginReducer);

export default LoginContext;
