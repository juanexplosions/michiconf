// Highlights.js
import "./Highlights.scss";
import fixedCat from "../../data/fixedCats";
import React, { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import HighlightItem from "./HighlightItem";

export default function Highlights() {
  const [activeColor, setActiveColor] = useState(1);

  const size = useWindowSize();
  const isMobile = size.width < 1024;

  const handleActiveColor = (id) => {
    setActiveColor(id);
  };

  const handleNextButton = () => {
    setActiveColor(activeColor + 1);
  };

  const handleBackButton = () => {
    setActiveColor(activeColor - 1);
  };

  const showBackButton = activeColor - 1 >= 1;
  const showNextButton = activeColor + 1 <= fixedCat.length;

  return (
    <>
      <section className="highlights">
        <div className="highlights__selector">
          <h2 className="highlights__title">
            ¿Por qué no te puedes perder la MichiCONF?
          </h2>
          <p className="highlights__description">
            Es más que solo una conf, es una fiesta gatuna desbordante de locura
            y diversión.
          </p>
          {isMobile ? (
            <HighlightItem
              id={fixedCat[activeColor - 1].id}
              title={fixedCat[activeColor - 1].title}
              isActive={true}
            />
          ) : (
            <ul className="highlights__list">
              {fixedCat.map((cat) => (
                <HighlightItem
                  key={cat.id}
                  id={cat.id}
                  title={cat.title}
                  isActive={cat.id === activeColor}
                  onMouseEnter={() => handleActiveColor(cat.id)}
                />
              ))}
            </ul>
          )}
        </div>
        <div className="highlights__panel">
          <img src="/highlights-star.svg" alt="" className="highlights__star" />
          <img src="/highlights-paws.png" alt="" className="highlights__paws" />
          <div className="highlights__circle"></div>
          <div className="highlights__border"></div>
          <p className="highlights__description-panel">
            {fixedCat[activeColor - 1].description}
          </p>
          <img
            src={fixedCat[activeColor - 1].img}
            alt=""
            className="highlights__cat"
          />
          <div className="highlights__background-cat"></div>
        </div>
        {isMobile && (
          <div className="highlights__navigation">
            <button
              className="highlights__button"
              onClick={handleBackButton}
              style={{
                visibility: showBackButton ? "visible" : "hidden",
              }}
            >
              <img src="/highlights-arrow.svg" alt="" />
            </button>
            <div className="highlights__dots-container">
              {fixedCat.map((cat) => (
                <div
                  key={cat.id}
                  className={
                    activeColor === cat.id
                      ? "highlights__dot--active"
                      : "highlights__dot"
                  }
                  onClick={() => handleActiveColor(cat.id)}
                ></div>
              ))}
            </div>

            <button
              className="highlights__button"
              onClick={handleNextButton}
              style={{ visibility: showNextButton ? "visible" : "hidden" }}
            >
              <img
                src="/highlights-arrow.svg"
                alt=""
                className="highlights__right"
              />
            </button>
          </div>
        )}
      </section>
    </>
  );
}
