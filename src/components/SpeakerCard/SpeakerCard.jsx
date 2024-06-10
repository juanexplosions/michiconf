import "/src/components/SpeakerCard/SpeakerCard.scss";

export default function SpeakerCard() {
  return (
    <>
      <div className="speaker__container">
        <div className="speaker__image-container">
          <img src="public/speaker-01.png" alt="" className="speaker__image" />
        </div>
        <div className="speaker__info">
          <p className="speaker__title">
            "Por qué aruñar muebles es tan importante como levantar capital en
            Sillicon valley"
          </p>
          <div className="speaker__profile">
            <p className="speaker__name">Taychi Swift</p>
            <p className="speaker__job">CEO en Miaupple</p>
          </div>
        </div>
      </div>
    </>
  );
}
