import "/src/components/SpeakerCard/SpeakerCard.scss";

export default function SpeakerCard({ name, job, title, img }) {
  const handleClick = (event) => {
    alert("Hola");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert("Hola");
    }
  };

  return (
    <>
      <div
        className="speaker__container"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
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
