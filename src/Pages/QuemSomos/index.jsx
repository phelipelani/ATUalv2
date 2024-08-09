import { WppApelo } from "../../Components/WppChamada";
import { DivNameStyle, MainStyle, Div_title_style, TextStyle } from "./style";
import logo from "../../Assets/LogoTipo.png";

export const QuemSomos = () => {
  return (
    <>
      <MainStyle>
        <DivNameStyle>
          <img src={logo} alt="LogoTipo Atual_Sindicos" />
          <div>
            <em className="Atual">Atual Síndico Profissional </em>{" "}
            <em className="slogan">Gestão Condominial </em>
          </div>
        </DivNameStyle>
        <Div_title_style>
          <h4>Quem Somos</h4>
        </Div_title_style>
        <TextStyle>
          <h3>
            Você está buscando uma gestão condominial de alta qualidade para o
            seu condomínio? A Atual Síndico Profissional e Gestão Condominial
            está aqui para ajudar! Com mais de 10 anos de experiência no ramo,
            somos uma equipe dedicada e experiente, pronta para oferecer
            soluções personalizadas que atendam às suas necessidades.
          </h3>
        </TextStyle>
        <TextStyle>
          <h3>
            Nossa empresa se destaca pela excelência em todos os aspectos da
            gestão condominial. Contamos com profissionais altamente
            capacitados, sempre atualizados com as melhores práticas do mercado,
            para garantir que o seu condomínio esteja em boas mãos.
          </h3>
        </TextStyle>
        <TextStyle>
          <h3>
            Administração financeira, gestão de pessoas, manutenção predial e
            mediação de conflitos são apenas algumas das áreas em que podemos
            ajudar. Estamos preparados para cuidar de todos os detalhes, visando
            a tranquilidade e a preservação do patrimônio dos condôminos.
          </h3>
        </TextStyle>

        <Div_title_style>
          <h4>Por que escolher a Atual Síndico Profissional?</h4>
        </Div_title_style>
        <TextStyle>
          <h3>
            Ao escolher os nossos serviços, você terá acesso a uma equipe de
            profissionais altamente capacitados, que conhecem profundamente as
            normas vigentes e aplicam as melhores práticas de gestão
            condominial. Valorizamos a transparência e o relacionamento próximo
            com os condôminos, buscando sempre a participação ativa de todos nas
            decisões importantes para o condomínio.
          </h3>
        </TextStyle>
        <TextStyle>
          <h3>
            A ética, a transparência e a responsabilidade são valores
            fundamentais para nós. Nossas ações são pautadas por uma gestão
            eficaz e confiável, que visa proporcionar o melhor para o seu
            condomínio.
          </h3>
        </TextStyle>
        <TextStyle>
          <h3>
            Não perca tempo e entre em contato conosco hoje mesmo! Descubra como
            podemos transformar a gestão do seu condomínio, garantindo a
            segurança, a tranquilidade e o bem-estar de todos os condôminos.
          </h3>
        </TextStyle>

        <WppApelo />
      </MainStyle>
    </>
  );
};
