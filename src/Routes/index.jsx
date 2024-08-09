import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Depoimentos } from "../Pages/Missao";
import { QuemSomos } from "../Pages/QuemSomos";
import { Contato } from "../Pages/Contato";
import { NavBar } from "../Components/NavBar";
import { useState, useRef, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Footer } from "../Components/Footer";


export const MainRouter = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const location = useLocation();
  const [nextPagePosition, setNextPagePosition] = useState(0);
  const routesRef = useRef(null);
  const pagePaths = ["/", "/quem_somos", "/NossoTrabalho", "/contato"];

  const calculateNextPagePosition = () => {
    const windowHeight = window.innerHeight;
    const routesHeight = routesRef.current.offsetHeight;
    const currentPageBottom =
      routesRef.current.getBoundingClientRect().bottom - windowHeight;
    const nextPageTop = currentPageBottom - 1;
    const nextPagePosition =
      Math.min(nextPageTop, routesHeight - windowHeight) - currentPageBottom;
    setNextPagePosition(nextPagePosition);
  };

  useEffect(() => {
    routesRef.current.scrollIntoView({ behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <NavBar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <InfiniteScroll
        dataLength={pagePaths.length}
        next={() => {
          // Carrega mais conteúdo para a página
        }}
        hasMore={true}

      >
        <div
        className="div_routes"
          ref={routesRef}
          onScroll={calculateNextPagePosition}
          style={{ position: "relative", top: 0 }}
        >
          <Routes>
            <Route
              path={pagePaths[0]}
              element={
                <Home
                  isMenuActive={isMenuActive}
                  style={{ position: "relative", top: 0 }}
                />
              }
            />
            <Route
              path={pagePaths[1]}
              element={
                <QuemSomos
                  isMenuActive={isMenuActive}
                  style={{ position: "relative", top: nextPagePosition }}
                />
              }
            />
            <Route
              path={pagePaths[2]}
              element={
                <Depoimentos
                  isMenuActive={isMenuActive}
                  style={{ position: "relative", top: nextPagePosition }}
                />
              }
            />
            <Route
              path={pagePaths[3]}
              element={
                <Contato
                  isMenuActive={isMenuActive}
                  style={{ position: "relative", top: nextPagePosition }}
                />
              }
            />
          </Routes>
          <Footer/>
        </div>
      </InfiniteScroll>
    </>
  );
};
