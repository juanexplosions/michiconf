import SignupButton from "/src/components/SignupButton/SignupButton.jsx";
import { Icon } from "@iconify/react/dist/iconify.js";
import useModal from "/src/hooks/useModal";
import Modal from "/src/components/Modal/Modal";
import "/src/components/Hero/Hero.scss";

export default function Hero() {
  const {
    showModal,
    toggleModal,
    handleBackgroundClick,
    playMusic,
    isPlaying,
  } = useModal();

  return (
    <>
      <header className="hero">
        <div className="hero__noise"></div>
        <div className="hero__blur"></div>

        <nav className="hero__nav">
          <div>
            <a className="hero__logo-link" href="google.com">
              <img
                src="hero-background-left.png"
                alt=""
                className="hero__background-left"
              />
              <img src="./michiconf-white.svg" alt="Logo MichiConf" />
            </a>
          </div>

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
          <button
            type="button"
            className="hero__signup-button"
            onClick={toggleModal}
          >
            <p>Regístrate</p>
          </button>
        </nav>
        <section className="hero__main-info">
          <img src="./michiconf-title.svg" alt="" className="hero__logo-conf" />
          <div className="hero__cta">
            <div className="hero__date">
              <Icon icon="ic:outline-calendar-today" className="hero__icon" />
              <p className="hero__date-text">Agosto 08</p>
            </div>
            <div className="hero__location">
              <Icon icon="ic:outline-location-on" className="hero__icon" />
              <p className="hero__location-text">Anekacanekulo</p>
              <p>Online</p>
            </div>
            <div className="hero__signup">
              <SignupButton />
            </div>
          </div>
          <p className="hero__description">
            ¡Únete a la aventura más gatuna y extravagante que hayas visto!
            Desde Elon Musk hasta Bill gates, una conf nunca antes vista.
          </p>
          <div className="hero__image-container">
            <img
              src="hero-background-right.png"
              alt=""
              className="hero__background-right"
            />
            <img src="/hero-image.png" alt="" className="hero__image" />
            <img
              src="/hero-background-center.png"
              alt=""
              className="hero__background-center"
            />
          </div>
        </section>
        <Modal
          showModal={showModal}
          toggleModal={toggleModal}
          handleBackgroundClick={handleBackgroundClick}
          playMusic={playMusic}
          isPlaying={isPlaying}
        />
      </header>
    </>
  );
}
