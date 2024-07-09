import SpeakerCard from "../SpeakerCard/SpeakerCard";
import SignupButton from "../SignupButton/SignupButton";
import "./Speakers.scss";

export default function Speakers() {
  return (
    <>
      <section className="speakers">
        <h2 className="speakers__title">Speakers</h2>
        <div className="speakers__grid">
          <div className="speakers__container">
            <SpeakerCard />
            <img
            src="/speakers-decoration-left.svg"
            alt=""
            className="speakers__decoration-left"
          />
          <img
            src="/speakers-decoration-right.svg"
            alt=""
            className="speakers__decoration-right"
          />
          </div>
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <div className="speakers__container">
            <SpeakerCard />
          <img
            src="/speakers-decoration-right.svg"
            alt=""
            className="speakers__decoration-right"
          />
          </div>
        </div>
        <div className="speakers__signup-button">
          <SignupButton />
        </div>
      </section>
    </>
  );
}
