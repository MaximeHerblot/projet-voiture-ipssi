import { createContext } from "react";

export const toastReducer = (toast, action) => {
  return toast;
};

export const defaultToastContext = { message: "", show: false };

const ToastContext = createContext(defaultToastContext);
export const ToastDispatchContext = createContext(toastReducer);

export default ToastContext;
