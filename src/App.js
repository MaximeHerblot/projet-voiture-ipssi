import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./core/routes/MainRoutes";
import Layout from "./core/composants/layout/Layout";
import LoginContext, {
  LoginDispatchContext,
  defaultLoginContext,
  loginReducer,
} from "./core/store/login-context";
import { useContext, useReducer, useState } from "react";
import React from "react";
import Footer from "./core/footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Toast from "./core/composants/toast/Toast";
import ToastContext, {
  ToastDispatchContext,
  defaultToastContext,
  toastReducer,
} from "./core/store/toast-context";

function App() {
  // const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [login, dispatch] = useReducer(loginReducer, defaultLoginContext);
  // const [toast, dispatchToast] = useReducer(toastReducer, defaultToastContext);
  // const [loginInfo, dispatch]
  // const [loginInfo, setLoginInfo] = useState(defaultLoginContext);
  const toastContextRef = useContext(ToastContext);
  return (
    <LoginContext.Provider value={login}>
      <LoginDispatchContext.Provider value={dispatch}>
        <BrowserRouter basename="/">
          <Layout />
          <MainRoutes />
        </BrowserRouter>
        <ToastContainer />
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
}
export default App;
