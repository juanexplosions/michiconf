import React from "react";
import "./Highlights.scss";

export default function HighlightItem({ id, title, isActive, onMouseEnter }) {
  return (
    <li
      key={id}
      className={isActive ? "highlights__item--active" : "highlights__item"}
      onMouseEnter={onMouseEnter}
    >
      <p
        className={
          isActive ? "highlights__number--active" : "highlights__number"
        }
      >
        {id}
      </p>
      <p className={isActive ? "highlights__text--active" : "highlights__text"}>
        {title}
      </p>
    </li>
  );
}
