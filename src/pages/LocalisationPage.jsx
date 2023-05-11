import React from "react";
import { useParams } from 'react-router-dom';
import { Localisations } from "../datas/Localisations";

const LocalisationPage = () => {
    const { id } = useParams();
    const localisation = Localisations.find(localisation => localisation.id === parseInt(id));
  
    console.log(localisation)

    return (
      <div className="container-LocalisationPage">
        <div className="container-LocalisationPage-img">
        <h2>{localisation.localisation}</h2>
        <img src={localisation.url} alt={localisation.localisation} />
        </div>
      </div>
    );
  };


export default LocalisationPage