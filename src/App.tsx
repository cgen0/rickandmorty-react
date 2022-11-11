import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getCharactersComplete } from "./services/getCharactersComplete";
import { CharacterComplete } from "./types/types";
import { useState, useEffect, useRef } from "react";
import { getIndexFromUrl } from "./utils/getIndexFromUrl";
import { GlobalStyle } from "./components/GlobalStyles/style";

function App() {
  const [characters, setCharacters] = useState<CharacterComplete[]>([]);
  const [next, setNext] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "30%",
      threshold: 1.0,
    };

    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      const setData = async () => {
        if (isLoading) {
          return;
        }
        setIsLoading(true);
        const { info, results } = await getCharactersComplete(next);
        setCharacters([...characters, ...results]);
        info.next ? setNext(getIndexFromUrl(info.next)) : setIsCompleted(true);
        setIsLoading(false);
      };
      if (entry.isIntersecting) {
        try {
          setData();
        } catch (error) {
          console.error(error); // eslint-disable-line no-console
        }
      }
    };
    if (!isCompleted) {
      const observer = new IntersectionObserver(callbackFunction, options);
      if (containerRef.current) observer.observe(containerRef.current);
      const current = containerRef.current;

      return () => {
        if (current) observer.unobserve(current);
      };
    }
  });

  return (
    <div>
      <GlobalStyle />

      <Header />
      <div className="content">
        <div className="cards-container">
          {characters ? (
            characters.map((char) => (
              <div key={char.id} className="single-card-container">
                <Card {...char} />
              </div>
            ))
          ) : (
            <div></div>
          )}
          <div className="spinner-container">
            {isLoading ? <div className="spin" /> : " "}
          </div>

          <div ref={containerRef} className="page_bottom"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
