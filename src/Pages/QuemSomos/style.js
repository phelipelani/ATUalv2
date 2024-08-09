import { styled } from "styled-components";
import background from "../../Assets/bg.jpg";

export const MainStyle = styled.main`
  position: relative;
  width: 100vw;
  height: 100%;
  top: 20vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

`;

export const DivNameStyle = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  height: 20vh;
  margin: 0 auto;
  justify-content: space-between;
  background: linear-gradient(
      rgba(190, 207, 227, 0.8),
      rgba(190, 207, 227, 0.3)
    ),
    url(${background}) center/cover no-repeat;
  border-radius: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);

  img {
    margin-left: 1rem;
    height: auto;
    width: 20%;
    object-fit: cover;
  }
  div {
    align-items: center;
    display: flex;
    width: 80%;
    flex-direction: column;
    text-align: center;

    em {
      color: rgba(42, 26, 49, 1);
      font-weight: 900;
      font-size: 5vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      line-height: 1em;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 720px) {
    width: 85%;
    display: flex;
    margin-top: 10vh;
    height: 25vh;
    padding: 1rem;
    justify-content: space-around;

    img {
      height: 100%;
      width: 15%;
      object-fit: contain;
    }

    div {
      height: 100%;
      display: flex;
      width: 50%;
      justify-content: space-evenly;
      align-items: flex-start;

      em {
        overflow: hidden;
        color: #2a1a31;
        font-weight: 800;
        font-size: 2vw;
      }
    }
  }
`;
export const Div_title_style = styled.div`
  width: 80%;
  background: rgba(42, 26, 49, 1);
  text-align: center;
  font-style: italic;
  color: rgba(190, 207, 227, 1);
  margin: 2rem 4rem 1rem 2rem;
  border-radius: 1rem;

  @media (min-width: 720px) {
    width: 45%;
    margin: 2rem 4rem 1rem 4rem;
    text-align: center;

    h4 {
      background-color: rgba(42, 26, 49, 1);
      font-size: 2vw;
      color: rgba(190, 207, 227, 1);
      border-radius: 0.5rem;
      font-style: italic;
      margin: 0;
      padding: 2rem;
    }
  }
`;

export const TextStyle = styled.aside`
  width: 90%;
  margin: 0 auto;
  h3 {
    padding: 0rem 1rem;
    font-size: 4vw;
    color: #2a1a31;
  }
  @media (min-width: 720px) {
    width: 90%;
    margin: 0 auto;
    h3 {
      font-size: 1.5vw;
      color: #2a1a31;
    }
  }
`;
