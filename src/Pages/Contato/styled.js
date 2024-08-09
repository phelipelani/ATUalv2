import { styled } from "styled-components";

export const MainStyle = styled.main`
  width: 100vw;
  height: 100%;
  position: relative;
  top: 21vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
  align-items: center;
`;

export const ContainerStyle = styled.div`
  width: 80%;
  height: 100%;
`;

export const ContainerContato = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  background-color: rgba(49, 29, 59, 0.8);
  border-radius: 1rem;
  padding: 1rem 0.5rem;
  section {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    height: 95%;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(49, 29, 59, 1);
    background-color: rgba(49, 29, 59, 0.8);

    section {
      height: 100%;
      width: 50%;
    }
  }
`;
