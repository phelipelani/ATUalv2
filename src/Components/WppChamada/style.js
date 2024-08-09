import styled from "styled-components";

export const DivWpp = styled.div`
  display: flex;
  position: fixed;
  bottom: 3%;
  left: 89vw;
  color: #becfe3;
  align-items: center;
  gap: 1rem;

  .wppLogo {
    font-size: 7vw;
    cursor: pointer;
    color: rgb(18, 140, 126);;
  }
  .wppLogo:hover {
    color: #17c34a;
  }
  @media (min-width: 720px) {
    bottom: 3%;
    left: 93vw;

    .wppLogo {
      font-size: 4vw;
    }
  }
`;
