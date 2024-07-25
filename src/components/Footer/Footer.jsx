import "./Footer.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer__decoration"></div>
        <div className="footer__container">
          <img src="/michiconf-gradient.svg" alt="" className="footer__logo" />
          <p className="footer__text">
            MichiCONF reserva sus derechos de admisión <br /> (sí, no
            aceptaremos perros ni loros en el evento)
          </p>
          <div className="footer__social-media">
            <a href="https://www.behance.net/alejandragao" target="_blank">
              <Icon icon="mdi:behance" className="footer__icon" />
            </a>
            <a
              href="https://github.com/juanexplosions/michiconf"
              target="_blank"
            >
              <Icon icon="mdi:github" className="footer__icon" />
            </a>
          </div>

          <div className="footer__shorcuts">
            <a href="#hero" className="footer__link">
              Inicio
            </a>
            <a href="#speakers" className="footer__link">
              Speakers
            </a>
            <a href="#highlights" className="footer__link">
              ¿Por qué?
            </a>
            <a href="#faq" className="footer__link">
              Michi preguntas
            </a>
          </div>
        </div>
        <div className="footer__made-by">
          Creado con miau por{" "}
          <a href="https://www.behance.net/alejandragao" target="_blank">
            Alejandra Avendaño
          </a>{" "}
          y{" "}
          <a href="https://juanexplosions.com" target="_blank">
            Juan Felipe Peralta
          </a>{" "}
          uwu
        </div>
      </footer>
    </>
  );
}
