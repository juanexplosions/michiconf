import { Icon } from "@iconify/react/dist/iconify.js";
import "/src/components/Modal/Modal.scss";

export default function Modal({ showModal, toggleModal, handleBackgroundClick, playMusic, isPlaying }) {
  if (!showModal) return null;

  return (
    <div className="modal__background" onClick={handleBackgroundClick}>
      <div className="modal__content">
        <div className="modal__buttons">
          <button className="modal__button" onClick={playMusic}>
            <Icon icon={isPlaying ? "mdi:music" : "mdi:music-off"} className="modal__icon" />
          </button>
          <button className="modal__button" onClick={toggleModal}>
            <Icon icon="gravity-ui:xmark" className="modal__icon" />
          </button>
        </div>
        <h2 className="modal__title">¡Llegaste tarde! :(</h2>
        <p className="modal__text">
          Ya se acabaron todas las entradas de la MichiCONF. <br /> Eso te pasa por calabaza
        </p>
        <p className="modal__note">
          Nos veremos en la MichiCONF 2025 uwu
        </p>
        <img className="modal__image" src="/fixed/michi-05.png" alt="" />
        <img className="modal__decoration" src="/modal-decoration.svg" alt="" />
        <img className="modal__colors" src="/modal-colors.png" />
        <img className="modal__paws" src="/modal-paws.svg" alt="" />
      </div>
    </div>
  );
}
