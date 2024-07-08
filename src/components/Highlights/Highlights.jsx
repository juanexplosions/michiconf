import "./Highlights.scss";

export default function Highlights() {
  return (
    <>
      <section className="highlights">
        {/* <img src="/highlights-decoration.png" alt="" className="highlights__decoration"/> */}
        <div className="highlights__selector">
          <h2 className="highlights__title">
            ¿Por qué no te puedes perder la MichiCONF?
          </h2>
          <p className="highlights__description">
            Es más que solo una conf, es una fiesta gatuna desbordante de locura
            y diversión.
          </p>
          <ul className="highlights__list">
            <li className="highlights__item--active">
              <p className="highlights__number--active">01</p>
              <p className="highlights__text--active">Evento fuera de lo comun</p>
            </li>
            <li className="highlights__item">
              <p className="highlights__number">01</p>
              <p className="highlights__text">Evento fuera de lo comun</p>
            </li>
            <li className="highlights__item">
              <p className="highlights__number">01</p>
              <p className="highlights__text">Evento fuera de lo comun</p>
            </li>
            <li className="highlights__item">
              <p className="highlights__number">01</p>
              <p className="highlights__text">Evento fuera de lo comun</p>
            </li>
          </ul>
        </div>
        <div className="highlights__panel">
          <div className="highlights__border"></div>
          <p className="highlights__description-panel">
            Cada charla, cada taller, y cada actividad están diseñados para
            hacerte reír a carcajadas y dejarte boquiabierto.
          </p>
          <img src="/michi-01.png" alt="" className="highlights__cat" />
          <div className="highlights__background-cat"></div>
        </div>
      </section>
    </>
  );
}
