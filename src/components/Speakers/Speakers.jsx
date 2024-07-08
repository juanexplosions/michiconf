import SpeakerCard from "../SpeakerCard/SpeakerCard";
import SignupButton from "../SignupButton/SignupButton";
import "./Speakers.scss";

export default function Speakers() {
  return (
    <>
      <section className="speakers">
        <h2 className="speakers__title">Speakers</h2>
        {/* <img src="/speakers-decoration.png" alt="" className="speakers__decoration"/> */}
        <img src="/speakers-decoration-left.svg" alt="" className="speakers__decoration-left"/>
        <img src="/speakers-decoration-right.svg" alt="" className="speakers__decoration-right"/>
        <div className="speakers__grid">
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
        </div>
        <div className="speakers__signup-button">
          <SignupButton />
        </div>
      </section>
    </>
  );
}
