import { styled } from "styled-components";

export const DivCartaoStyle = styled.div`
  display: flex;
  width: 100%;
  height: 55%;
  justify-content: center;
`;

export const DivCartaoImg = styled.div`
  display: none;

  @media (min-width: 720px) {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }
`;

export const DivCartaoText = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 5px;
  height: 150%;

  h4 {
    font-size: 3vw;
    color: rgb(190, 207, 227);
    height: 25%;
  }
  div {
    display: flex;
    flex-direction: column;

    p {
      height: 50%;

      font-size: 3vw;
      font-weight: 600;
      color: rgb(190, 207, 227);
    }
    h6 {
      height: 50%;

      font-size: 2.3vw;
      font-weight: 500;
      color: rgb(190, 207, 227);
    }
  }
  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;

    h4 {
      font-size: 1.4vw;
      color: rgb(190, 207, 227);
      font-weight: 900;
      margin: 0;
      height: 20%;
      padding-top: 1rem;
    }
    div {
      display: flex;
      flex-direction: column;
      height: 80%;
      p {
        height: 50%;
        font-size: 1.1vw;
        font-weight: 700;
        color: rgb(190, 207, 227);
        margin: 0;
      }

      h6 {
        height: 35%;
        font-size: 1vw;
        font-weight: 500;
        color: rgb(190, 207, 227);
        margin: 0;
      }
    }
  }
`;
