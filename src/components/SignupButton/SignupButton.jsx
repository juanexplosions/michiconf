import { Icon } from "@iconify/react/dist/iconify.js";
import useModal from "/src/hooks/useModal";
import Modal from "/src/components/Modal/Modal";
import "/src/components/SignupButton/SignupButton.scss";

export default function SignupButton() {
  const { showModal, toggleModal, handleBackgroundClick, playMusic, isPlaying } = useModal();

  return (
    <>
      <a className="signup-button">
        <button className="signup-button__button" onClick={toggleModal}>
          <p className="signup-button__text">Registrarme ahora</p>
          <Icon icon="ic:twotone-north-east" className="signup-button__icon" />
        </button>
      </a>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        handleBackgroundClick={handleBackgroundClick}
        playMusic={playMusic}
        isPlaying={isPlaying}
      />
    </>
  );
}
