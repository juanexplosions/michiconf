import "./Banner.scss";
import SignupButton from "../SignupButton/SignupButton";

export default function Banner() {
  return (
    <section className="banner">
      <h2 className="banner__title">Are you ready to get started? We got you covered!</h2>
      <SignupButton />
    </section>
  );
}
