import styled from "styled-components";

export const DivHeader = styled.header`
  background-color: rgb(74 54 83);
  display: flex;
  flex-direction: column;
  height: 20%;
  width: 100vw;
  align-items: center;
  box-shadow: 2px 0px 4px 4px rgba(42, 26, 49, 1);
  position: fixed;
  z-index: 100;

  @media (min-width: 720px) {
  }
`;

export const SociaisMidiasStyled = styled.div`
padding: 0.5rem;
width: 100%;
display: flex;
height: 15%;
background: #cecffb;
align-items: center;

  .socialContainer {
    margin: 5px;
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

    h5 {
      padding: 0.1rem;
      font-size: 1.8vw;
      color: #2a1a31;
    }
  }
  .socialContainer:hover {
    cursor: pointer;
  }

  @media (min-width: 720px) {
    .socialContainer {
      h5 {
        font-size: 1vw;
      }
    }
  }
`;

export const Menu_nav_social = styled.div`
  height: 85%;
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media (min-width: 720px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
`;

export const LogoDivStyle = styled.div`
  width: 40%;
  height: auto;
  padding: 1rem;
  align-items: center;

  img {
    width: calc(100% - 1rem);
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 720px) {
    width: 15%;
    height: 100%;
    align-items: center;
    display: flex;
    img {
      height: auto;
      width: 100%;
      object-fit: contain;
    }
  }
`;
export const Menu_nav_social_div = styled.div`
  @media (min-width: 720px) {
    height: 100%;
  }
`;

export const NavListStyle = styled.nav`
  position: fixed;
  top: 19vh;
  background: rgb(74 54 83);
  right: 0;
  border-bottom-left-radius: 10px;
  height: 60vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  a {
    padding: 1rem;
    color: #cecffb;
    text-decoration: none;
    opacity: 0.5;
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
  }
  a:hover {
    opacity: 1;
  }

  @media (min-width: 720px) {
    background: transparent;
    display: flex;
    flex-direction: row;
    position: unset;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-around;

    a {
      font-size: 1.8vw;
    }
  }
`;

export const MenuHamburgue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 45px;
  height: 30px;
  margin-right: 13vw;
  justify-content: space-around;

  div {
    width: 100%;
    height: 2px;
    background-color: #cecffb;
  }
  .open .line1 {
    transform: translateY(8px) rotate(45deg);
  }
  .open .line2 {
    opacity: 0;
  }
  .open .line3 {
    transform: translateY(-8px) rotate(-45deg);
  }

  @media (min-width: 720px) {
    display: none;
  }
`;
