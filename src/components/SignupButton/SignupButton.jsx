import { Icon } from "@iconify/react/dist/iconify.js";
import "/src/components/SignupButton/SignupButton.scss";
import { useState } from "react";
import sound from "/sad-cat-mew.mp3";

export default function signupButton() {
  const [showModal, setShowModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(sound));

  const toggleModal = () => setShowModal(!showModal);

  const handleBackgroundClick = (event) => {
    if (event.target.classList.contains("modal__background")) {
      toggleModal();
    }
  };

  const playMusic = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audio.load();
    } else {
      setIsPlaying(true);
      audio.play();

      audio.addEventListener("ended", () => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <>
      <a className="signup-button">
        <button className="signup-button__button" onClick={toggleModal}>
          <p className="signup-button__text">Registrarme ahora</p>
          <Icon icon="ic:twotone-north-east" className="signup-button__icon" />
        </button>
      </a>
      {showModal && (
        <div className="modal__background" onClick={handleBackgroundClick}>
          <div className="modal__content">
            <div className="modal__buttons">
              <button className="modal__button" onClick={playMusic}>
                <Icon
                  icon={isPlaying ? "mdi:music" : "mdi:music-off"}
                  className="modal__icon"
                />
              </button>
              <button className="modal__button" onClick={toggleModal}>
                <Icon icon="gravity-ui:xmark" className="modal__icon" />
              </button>
            </div>
            <h2 className="modal__title">¡Llegaste miau tarde! :(</h2>
            <p className="modal__text">
              Ya se acabaron todos los tickerts de la michi conf, eso te pasa
              por calabaza
            </p>
            <p className="modal__note">
              Nos veremos en otro universo de michis uwu
            </p>
            <img className="modal__image" src="/fixed/michi-02.png" alt="" />
            <img
              className="modal__decoration"
              src="/modal-decoration.svg"
              alt=""
            />
            <img className="modal__colors" src="/modal-colors.png" />
            <img className="modal__paws" src="/modal-paws.svg" alt="" />
          </div>
        </div>
      )}
    </>
  );
}
