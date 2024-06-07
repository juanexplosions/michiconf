import { Icon } from "@iconify/react/dist/iconify.js";
import '/src/components/SignupButton/SignupButton.scss';

export default function signupButton() {
  return (
    <>
      <a href="#" target="" className="signup-button">
        <button className="signup-button__button">
          <p className="signup-button__text">Registrarme ahora</p>
          <Icon icon="ic:twotone-north-east" className="signup-button__icon" />
        </button>
      </a>
    </>
  );
}