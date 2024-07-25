import React, { useState } from "react";
import "./Menu.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import navInfo from "../../data/navInfo.js";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="menu__container">
      <button onClick={toggleMenu} className="menu__icon">
        <Icon icon="ci:hamburger"/>
      </button>
      {showMenu && (
        <div className="menu__background">
          <div className="menu__content">
            <div className="menu__main-info">
              <img
                src="./michiconf-white.svg"
                alt="Logo MichiConf"
                className="menu__logo"
              />
              <button className="menu__close" onClick={toggleMenu}>
                <Icon icon="teenyicons:x-outline" />
              </button>
            </div>
            <ul className="menu__list">
              {navInfo.map((item, index) => (
                <li className="menu__list-item" key={index}>
                  <a href={item.href} className="menu__list-link" onClick={toggleMenu}>
                    <span className="menu__list-text">{item.text}</span>
                    <Icon icon="ic:baseline-arrow-forward-ios" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
