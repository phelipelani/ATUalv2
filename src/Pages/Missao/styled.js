import { styled } from "styled-components";

export const MainStyle = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-sizing: border-box;
`;

export const HeaderStyle = styled.div`
  margin-top: 21vh;
  width: 85%;
  border-radius: 1rem;
  background-color: #2a1a31;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);

  img {
    height: auto;
    width: 40%;
    object-fit: cover;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 90%;
    gap: 1rem;

    li {
      font-size: 2vw;
      font-weight: 900;
      color: #becfe3;
    }
  }

  @media (min-width: 720px) {
    margin-top: 20vh;
    width: 90%;
    border-radius: 1rem;
    background-color: #2a1a31;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);

    img {
      height: auto;
      width: 30%;
      object-fit: cover;
    }

    ul {
      display: flex;
      flex-direction: column;
      width: 40%;
      height: 90%;
      gap: 1rem;

      li {
        height: 25%;
        font-size: 1.5vw;
        font-weight: 900;
        color: #becfe3;
      }
    }
  }
`;
export const DivVideoStyle = styled.div`
  display: flex;
  width: 90%;
  video {
    width: 60%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
  div {
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1rem;

    h2 {
      height: auto;
      font-size: 3vw;
      color: #2a1a31;
      font-weight: 900;
      font-style: italic;
    }
    p {
      height: 50%;
      font-size: 2.5vw;
      color: #2a1a31;
      font-weight: 700;
    }
  }

  @media (min-width: 720px) {
    display: flex;
    width: 90%;
    video {
      width: 60%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
    div {
      width: 35%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 1rem 2rem;

      h2 {
        height: auto;
        font-size: 2.2vw;
        color: #2a1a31;
        font-weight: 900;
        font-style: italic;
      }
      p {
        height: 50%;
        font-size: 1.5vw;
        color: #2a1a31;
        font-weight: 700;
      }
    }
  }
`;
export const DivClientesStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  h2 {
    font-size: 5vw;
    color: #2a1a31;
    font-weight: 900;
    font-style: italic;
    padding: 1rem;
  }
  div {
    width: 90%;
    display: flex;
    justify-content: space-around;

    img {
      height: 80%;
      width: 25%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    h2 {
      font-size: 2.2vw;
      color: #2a1a31;
      font-weight: 900;
      font-style: italic;
    }
    div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;

      img {
        height: 80%;
        width: 20%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
`;

export const DivSheetsStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  h2 {
    width: 80%;
    background: rgba(42, 26, 49, 1);
    text-align: center;
    font-style: italic;
    color: rgba(190, 207, 227, 1);
    margin: 2rem 4rem 1rem 2rem;
    border-radius: 1rem;
    font-weight: 900;
    padding: 1rem;
  }
  ul {
    width: 90%;
    height: 20rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
    overflow-x: auto;
    padding: 1rem 2rem;

    justify-content: center;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: #becfe3;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #2a1a31;
      border-radius: 10px;
    }

    li {
      padding: 1rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      width: 70%;
      height: 100%;
      font-weight: 900;
      border-radius: 1rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 1);
      box-sizing: border-box;
      h3 {
        font-size: 4vw;
        padding: 0 2rem;
        color: #2a1a31;
        font-weight: 700;
        height: 80%;
      }
      p {
        font-size: 2.5vw;
        text-align: center;
      }
    }
  }
  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    ul {
      width: 90%;
      height: 25rem;
      li{
        padding: 1rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        width: 60%;
        h3{
          font-size: 2.5vw;
        }
        p{
          margin-bottom:1rem;
          font-size: 2vw;
        }
      }
    }
`;
