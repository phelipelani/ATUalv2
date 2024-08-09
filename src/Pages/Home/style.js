import { styled } from "styled-components";

export const MainStyle = styled.main`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: relative;
  top: 22vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
  align-items: center;
`;

export const CarouselStyled = styled.div`
  display: flex;
  border-radius: 2rem;
  width: 85%;
  justify-content: center;
  height: 80%;

  .carousel {
    display: flex;
    width: 100%;
    height: 65vh;
    border-radius: 2rem;
    margin-bottom:2rem;

    @media (min-width: 720px) {
      width: 100%;
      height: 70vh;
      box-shadow: 0 0 10px rgba(0, 0, 0, 1);
      margin-bottom:0rem;
    }
  }

  .slide-container {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }

  .slide-text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 30%;
    color: white;
    background: rgba(49, 29, 59, 0.5);
    font-size: 5vw;
    left: 6vw;
    top: -50%;
    animation: fadeInOut 5s infinite;
    position: relative;
    border-radius: 1rem;
    padding: 1vw;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    16.66% {
      opacity: 1;
      transform: translateY(0);
    }
    83.33% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }

  @media (min-width: 720px) {
    .slide-text {
      border-radius: 0.5rem;
      display: flex;
      width: 75vw;
      height: 30%;
      left: 6vw;
      top: -50%;
      align-items: center;
      padding: 0.5rem;
      font-size: 3vw;
      position: relative;
    }
  }
`;
