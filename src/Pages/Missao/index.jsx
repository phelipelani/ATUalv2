import {
  DivClientesStyle,
  DivSheetsStyle,
  DivVideoStyle,
  HeaderStyle,
  MainStyle,
} from "./styled";
import logo from "../../Assets/lg1.png";
import cond1 from "../../Assets/cond1.jpeg";
import cond2 from "../../Assets/cond2.jpeg";
import cond3 from "../../Assets/cond3.jpeg";
import Video from "../../Assets/video.mp4";
// eslint-disable-next-line react/prop-types
export const Depoimentos = () => {
  return (
    <MainStyle>
      <HeaderStyle>
        <ul>
          <li>Gestão administrativa e financeira do condomínio</li>
          <li>Elaboração de previsão orçamentária e controle de gastos</li>
          <li>Mediação e resolução de conflitos entre condôminos</li>
          <li>Supervisão de obras e manutenção predial</li>
        </ul>
        <img src={logo} alt="Logo Atual Sindicos" />
      </HeaderStyle>
      <DivVideoStyle>
        <video src={Video} controls />

        <div>
          <h2>Buscamos ser diferentes, fazer primeiro e fazer mais. </h2>
          <br />
          <p>
            Acima de tudo atuamos com ética e justiça, sempre valorizando o
            respeito ao ser humano.
          </p>
        </div>
      </DivVideoStyle>
      <DivClientesStyle>
        <h2>Alguns de nossos clientes</h2>
        <div>
          <img src={cond1} alt="Foto Condominio 1" />
          <img src={cond2} alt="Foto Condominio 2" />
          <img src={cond3} alt="Foto Condominio 3" />
        </div>
      </DivClientesStyle>
      {/* <DivSheetsStyle>
        <h2>Avaliação de nossos clientes</h2>
        <ul>
          <li>
            <h3>
              "Atendimento do Alex muito satisfatório! Sanou todas as minhas
              dúvidas. Indico de olhos fechados."
            </h3>
            <p>Luis Claudio</p>
          </li>
          <li>
            <h3>
              "Muito eficiente, profissional de altíssimo gabarito, atende
              sempre as demandas solicitadas."
            </h3>
            <p>Ricardo Leite</p>
          </li>
          <li>
            <h3>
              "Profissionalismo competência e dedicação, parabéns pela gestão
              dos envolvidos, sucesso a vocês."
            </h3>
            <p>Cleitinho Oliveira</p>
          </li>
          <li>
            <h3>
              "Excelente, zero arrependimentos, profissionais competentes...
              Recomendo!!"
            </h3>
            <p>Érica</p>
          </li>
        </ul>
      </DivSheetsStyle> */}
    </MainStyle>
  );
};
