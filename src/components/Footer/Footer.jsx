import "./Footer.scss";
import { FooterPatitas } from "/src/components/svg/FooterPatitas.jsx";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <>
      <footer className="footer">
     {/* <img src="/footer-patitas.svg" alt="" className="footer__decoration" /> */}
        <div className="footer__container">
          <img src="/michiconf-gradient.svg" alt="" />
          <p className="footer__text">
            MichiConf reserva sus derechos de admisión <br /> (sí, no queremos
            perros en la conf)
          </p>
          <div className="footer__social-media">
            <a href="https://www.twitter.com/">
              <Icon icon="ri:twitter-x-fill" className="footer__icon" />
            </a>
            <a href="https://www.tiktok.com/">
              <Icon icon="ic:twotone-tiktok" className="footer__icon" />
            </a>
            <a href="https://www.instagram.com/">
              <Icon icon="mdi:instagram" className="footer__icon" />
            </a>
            <a href="https://www.github.com/">
              <Icon icon="mdi:github" className="footer__icon" />
            </a>
          </div>

          <div className="footer__shorcuts">
            <a href="#home" className="footer__link">
              Inicio
            </a>
            <a href="#speakers" className="footer__link">
              Titulo
            </a>
            <a href="#schedule" className="footer__link">
              Titulo 2
            </a>
            <a href="#sponsors" className="footer__link">
              Michi preguntas
            </a>
          </div>
        </div>
        <div className="footer__made-by">
          Creado con miau por Alejandra Avendaño y Juan Felipe Peralta uwu
        </div>
      </footer>
    </>
  );
}
