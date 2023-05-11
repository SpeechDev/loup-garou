import React from "react";
import { Localisations } from "../datas/Localisations";
import { Link } from 'react-router-dom';

const Localisation = () => {
  const localisations = Localisations;

  return (
    <div className="container-localisation">
        <h2>Quelle destination vous intéresse ?</h2>
        {localisations.map((localisation) => (
          <div key={localisation.id}>
            <Link to={`/location/${localisation.id}`}>
                <h2>{localisation.localisation}</h2>
                <img src={localisation.url} alt={localisation.localisation} />
                <p>{localisation.description}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Localisation;
