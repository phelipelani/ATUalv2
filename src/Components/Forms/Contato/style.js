import { styled } from "styled-components";

export const FormStyle = styled.form`
  border-radius: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  width: 90%;

  @media (min-width: 720px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
  }
`;

export const HeaderForm = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 20%;
    height: auto;
    object-fit: cover;
  }
  h3 {
    padding: 1rem;
    text-align: center;
    font-size: 4vw;
    color: rgb(190, 207, 227);
  }
  @media (min-width: 720px) {
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    img {
      object-fit: cover;
      height: auto;
      width: 10%;
    }
    h3 {
      font-size: 2vw;
      color: rgb(190, 207, 227);
    }
  }
`;
export const BodyForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  gap: 1vw;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 20%;
  }
  label {
    font-size: 3.5vw;
    color: rgb(190, 207, 227);
    font-weight: 900;
  }
  input {
    width: 100%;
    padding: 8px;
    font-size: 1rem;
    border: none;
    color: rgb(250, 250, 227);
    border-bottom: 1px solid #fff;
    background: transparent;
  }
  imput:focus {
    outline: none;
  }
  textarea {
    background-color: rgba(218, 233, 240, 0.3);
    color: rgb(250, 250, 227);
    font-size: 1vw;
    padding: 1rem 1rem 2.5rem;
    overflow: auto;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }
  .errors {
    color: #e74c3c;
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  button {
    margin-top: 2rem;
    width: 40vw;
    height: 5vh;
    border-radius: 2rem;
    background-color: #411052;
    color: rgba(218, 233, 240, 1);
    cursor: pointer;
    font-size: 5vw;
    transition: 0.3s;
  }

  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    gap: 1vw;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 15%;

      label {
        font-size: 1vw;
        color: rgb(190, 207, 227);
        font-weight: 900;
      }
      input {
        width: 100%;
        padding: 8px;
        font-size: 0.8vw;
        border: none;
        color: rgb(250, 250, 227);
        border-bottom: 1px solid #fff;
        background: transparent;
      }
      input:focus {
        outline: none;
      }
      textarea {
        background-color: rgba(218, 233, 240, 0.3);
        color: rgb(250, 250, 227);
        font-size: 0.8vw;
        padding: 1rem 1rem 2.5rem;
        overflow: auto;
        resize: none;
      }
      textarea:focus {
        outline: none;
      }
    }
    button {
      margin-top: 1rem;
      width: 15vw;
      height: 5vh;
      border-radius: 1rem;
      background-color: #411052;
      color: rgba(218, 233, 240, 1);
      cursor: pointer;
      font-size: 1.2vw;
      transition: 0.3s;
      border: none;
    }
    button:hover {
      background-color: rgba(218, 233, 240, 1);
      color: #411052;
      transition: 0.3s;
    }
  }
`;
