import { ToastContainer } from "react-toastify";
import { MainRouter } from "./Routes";
import "react-toastify/dist/ReactToastify.min.css";

export function App() {
  return (
    <>
      <MainRouter />;
      <ToastContainer />
    </>
  );
}
