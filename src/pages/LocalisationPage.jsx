import React from "react";
import { Link, useParams } from "react-router-dom";
import { Localisations } from "../datas/Localisations";
import Card from "../components/Card";
import { Description } from "../data/description";

const LocalisationPage = () => {
  const { id } = useParams();
  const localisation = Localisations.find(
    (localisation) => localisation.id === parseInt(id)
  );
  const description = Description.filter(
    (description) => description.localisation === localisation.localisation
  );

  return (
    <div className="container-Location">
      <div className="container-LocalisationPage">
        <div className="container-LocalisationPage-img">
          <h2>{localisation.localisation}</h2>
          <img src={localisation.url} alt={localisation.localisation} />
        </div>
        <div className="container-card-list-theme">
          {description.length > 0 &&
            description.map((item, index) => (
              <Link to={`/description/${item.id}`} key={index}>
                <Card description={item} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LocalisationPage;
