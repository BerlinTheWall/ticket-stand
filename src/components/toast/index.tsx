import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";

const Toast = () => {
  const { appTheme } = useContext(AppContext);

  return (
    <ToastContainer
      position="bottom-right"
      className="!top-20"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={appTheme.palette.mode}
      progressStyle={{
        backgroundColor: "#00925D",
      }}
    />
  );
};

export default Toast;
