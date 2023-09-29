import { useContext } from "react";
import ToastContext from "../../store/toast-context";

const Toast = (props) => {
  console.log("show toast")
    return <div>{props.message}</div>;
};

export default Toast;
