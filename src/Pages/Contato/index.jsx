import { CartaoContato } from "../../Components/CartaoContato";
import ContactForm from "../../Components/Forms/Contato";
import Maps from "../../Components/Maps";
import { ContainerContato, ContainerStyle, MainStyle } from "./styled";

// eslint-disable-next-line react/prop-types
export const Contato = () => {
  return (
    <MainStyle>
      <ContainerStyle>
        <ContainerContato>
          <section>
            <CartaoContato />
            <Maps />
          </section>
          <ContactForm />
        </ContainerContato>
      </ContainerStyle>
    </MainStyle>
  );
};
