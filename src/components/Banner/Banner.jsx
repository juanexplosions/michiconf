import "./Banner.scss";
import SignupButton from "../SignupButton/SignupButton";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Banner() {
  const size = useWindowSize();
  const isMobile = size.width < 1024;

  return (
    <section className="banner">
      <div className="banner__gradient"></div>
      <img
        src={!isMobile ? "/banner-light.png" : "/banner-light-effect.png"}
        alt=""
        className="banner__light"
      />
      <h2 className="banner__title">
        Este será el mejor día de tus 7 vidas. <br />Únete a la MichiCONF
      </h2>
      <div className="banner__button-container">
        <SignupButton />
      </div>
    </section>
  );
}
