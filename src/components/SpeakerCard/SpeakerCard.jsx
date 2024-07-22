import "/src/components/SpeakerCard/SpeakerCard.scss";

export default function SpeakerCard({ name, job, title, img, className }) {

  return (
    <>
      <div
        className={`speaker__container ${className}`}
        tabIndex={0}
      >
        <div className="speaker__image-container">
          <img src={img} alt="" className="speaker__image" />
        </div>
        <div className="speaker__info">
          <p className="speaker__title">
            {title}
          </p>
          <div className="speaker__profile">
            <p className="speaker__name">
              {name}<span className="speaker__job">{job}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
