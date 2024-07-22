import SpeakerCard from "../SpeakerCard/SpeakerCard";
import SignupButton from "../SignupButton/SignupButton";
import "./Speakers.scss";
import speakersInfo from "/Users/juanfeperalta/Documents/Playground/michiconf/src/data/speakersInfo.js";

export default function Speakers() {
  return (
    <>
      <section className="speakers">
        <h2 className="speakers__title">Speakers</h2>
        <div className="speakers__grid">
          {speakersInfo.map((speakerInfo, index) => (
            <SpeakerCard
              key={speakerInfo.id}
              name={speakerInfo.name}
              job={speakerInfo.job}
              title={speakerInfo.title}
              img={speakerInfo.img}
              className={index === 0 ? "first-speaker" : index === speakersInfo.length - 1 ? "last-speaker" : ""}
            />
          ))}
        </div>
        <div className="speakers__signup-button">
          <SignupButton />
        </div>
      </section>
    </>
  );
}
