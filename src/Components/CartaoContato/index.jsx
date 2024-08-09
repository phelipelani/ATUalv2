import qrcode from "../../Assets/Atual Sindicos.png";
import { DivCartaoImg, DivCartaoStyle, DivCartaoText } from "./style";
export const CartaoContato = () => {
  function openInsta() {
    const url = "https://www.instagram.com/atual_sindicoprofissional/";
    window.open(url);
  }
  
  function openWhatsApp() {
    const phoneNumber = "+551238838005";
    const message = "Olá! Gostaria de conversar!";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  }
  return (
    <DivCartaoStyle>
      <DivCartaoImg>
        <img src={qrcode} alt="QR code Atual Sindico" />
      </DivCartaoImg>
      <DivCartaoText>
        <h4>
          Atual Síndicos Profissionais <br /> Gestão Condominial
        </h4>
        <div>
          <p>Email</p>
          <h6>sindicoprofissionalatual@gmail.com</h6>
        </div>
        <div>
          <p>Instagram</p>
          <h6 onClick={openInsta}>@atual_sindicoprofissional</h6>
        </div>
        <div>
          <p>Telefone</p>
          <h6 onClick={openWhatsApp}>(12) 3883 - 8005 </h6>
        </div>
      </DivCartaoText>
    </DivCartaoStyle>
  );
};
