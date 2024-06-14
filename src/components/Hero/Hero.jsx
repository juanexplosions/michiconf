import SignupButton from "/src/components/SignupButton/SignupButton.jsx";
import { Icon } from "@iconify/react/dist/iconify.js";
import "/src/components/Hero/Hero.scss";

export default function Hero() {
  return (
    <>
      <header className="hero">
        <img
          src="/hero-background.png"
          alt=""
          className="hero__background"
        />
        <nav className="hero__nav">
          <a href="hero__logo-link">
            <img src="./michiconf-white.svg" alt="Logo MichiConf" />
          </a>
          <ul className="hero__nav-list">
            <li className="hero__nav-item">
              <a href="" className="hero__nav-link">
                Inicio
              </a>
            </li>
            <li className="hero__nav-item">
              <a href="" className="hero__nav-link">
                Titulo1
              </a>
            </li>
            <li className="hero__nav-item">
              <a href="" className="hero__nav-link">
                Titulo2
              </a>
            </li>
            <li className="hero__nav-item">
              <a href="" className="hero__nav-link">
                Michi preguntas
              </a>
            </li>
          </ul>
          <button type="button" className="hero__signup-button">
            <p>Regístrate</p>
          </button>
        </nav>  
        <section className="hero__main-info">
          <div className="hero__blur"></div>
          <div className="hero__detail">
            <img
              src="./michiconf-title.svg"
              alt=""
              className="hero__logo-conf"
            />
            <div className="hero__date">
              <Icon icon="ic:outline-calendar-today" className="hero__icon" />
              <p className="hero__date-text">Agosto 08</p>
            </div>
            <div className="hero__location">
              <Icon icon="ic:outline-location-on" className="hero__icon" />
              <p className="hero__location-text">Anekacanekulo</p>
              <p>Online</p>
            </div>
            <SignupButton />
          </div>
          <div className="hero__secondary-info">
            <p className="hero__description">
              ¡Únete a la aventura más gatuna y extravagante que hayas visto!
              Desde Elon Musk hasta Bill gates, una conf nunca antes vista.
            </p>
            <img src="/hero-image.png" alt="" className="hero__image" />
          </div>
        </section>
      </header>
    </>
  );
}
