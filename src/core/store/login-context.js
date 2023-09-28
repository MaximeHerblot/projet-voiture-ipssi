import { createContext } from "react";

export const loginReducer = (login, action) => {
  let newLogin = {...login}
  if (action.type === "login"){
    newLogin.logged = true
    newLogin.email = action.data.email
    newLogin.password = action.data.password
  } else if (action.type === "logout"){
    newLogin = defaultLoginContext
  }
  return newLogin
};
export const defaultLoginContext = {
  email: "",
  password: "",
  logged: false,
};

const LoginContext = createContext(defaultLoginContext);
export const LoginDispatchContext = createContext(loginReducer);

export default LoginContext;
