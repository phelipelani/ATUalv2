import { IoLogoWhatsapp } from "react-icons/io";
import { DivWpp } from "./style";
export const WppApelo = () => {
  function openWhatsApp() {
    const phoneNumber = "+551238838005";
    const message = "Olá! Gostaria de conversar!";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  }
  return (
    <DivWpp onClick={openWhatsApp}>
        <IoLogoWhatsapp className="wppLogo" />
    </DivWpp>
  );
};
