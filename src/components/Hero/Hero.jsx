import SignupButton from "/src/components/SignupButton/SignupButton.jsx";
import { Icon } from "@iconify/react/dist/iconify.js";
import useModal from "/src/hooks/useModal";
import Modal from "/src/components/Modal/Modal";
import Menu from "../Menu/Menu";
import "/src/components/Hero/Hero.scss";
import { useWindowSize } from "@uidotdev/usehooks";
import navInfo from "../../data/navInfo.js";

export default function Hero() {
  const {
    showModal,
    toggleModal,
    handleBackgroundClick,
    playMusic,
    isPlaying,
  } = useModal();

  const size = useWindowSize();
  const isMobile = size.width < 1024;

  return (
    <>
      <header className="hero" id="hero">
        <div className="hero__noise"></div>
        <div className="hero__blur"></div>

        <nav className="hero__nav">
          <div>
            <a className="hero__logo-link">
              <img
                src="hero-background-left.png"
                alt=""
                className="hero__background-left"
              />
              <img src="./michiconf-white.svg" alt="Logo MichiConf" />
            </a>
          </div>

          <ul className="hero__nav-list">
            {navInfo.map((item, index) => (
              <li className="hero__nav-item" key={index}>
                <a href={item.href} className="hero__nav-link">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="hero__signup-button"
            onClick={toggleModal}
          >
            <p>Regístrate</p>
          </button>
          {isMobile && <Menu />}
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
              <p className="hero__location-text">
                Aoshima (Isla del Gato), Japón
              </p>
              <p className="hero__state">Online</p>
            </div>
            <div className="hero__signup">
              <SignupButton />
            </div>
          </div>
          <p className="hero__description">
            La conferencia hecha por y para gatitos. El encuentro anual para
            debatir sobre la tecnología y el futuro de la comunidad gatuna.
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
