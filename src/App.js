import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./core/routes/MainRoutes";
import Layout from "./core/composants/layout/Layout";
import LoginContext, {
  LoginDispatchContext,
  defaultLoginContext,
  loginReducer,
} from "./core/store/login-context";
import { useReducer, useState } from "react";

function App() {
  // const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [login, dispatch] = useReducer(loginReducer, defaultLoginContext);
  // const [loginInfo, dispatch]
  // const [loginInfo, setLoginInfo] = useState(defaultLoginContext);
  return (
    <LoginContext.Provider value={login}>
      <LoginDispatchContext.Provider value={dispatch}>
        <BrowserRouter basename="/">
          <Layout />
          <MainRoutes />
        </BrowserRouter>
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
