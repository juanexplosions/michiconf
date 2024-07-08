import "./Banner.scss";
import SignupButton from "../SignupButton/SignupButton";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__gradient"></div>
      <img src="/banner-light.png" alt="" className="banner__light"/>
      <h2 className="banner__title">Are you ready to get started? <br /> We got you covered!</h2>
      <SignupButton className="banner__signup"/>
    </section>
  );
}
