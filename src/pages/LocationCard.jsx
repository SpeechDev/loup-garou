import React from "react";
import { useParams } from "react-router-dom";
import UsersList from "../components/UsersList";
import { Description } from "../data/description";

const LocationCard = () => {
  const { id } = useParams();
  const description = Description.find(
    (description) => description.id === parseInt(id)
  );

  return (
    <div className="container-locationcard">
      {description && (
        <div className="container-info-location">
          <h2>{description.Descriptions}</h2>
          <img src={description.img} alt="" />
          <h2>{description.descriptions}</h2>
          <div
          className="card-info">
          <p>Durée {description.temps}</p>
          <p>Niveau {description.niveau}</p>
          <p>A patir de {description.prix}</p>
        </div>
        <div
          className="card-dates">
          <div
            className="card-date">
            <p>{description.date1}</p>
            <p>{description.place1}</p>
          </div>
          <div
            className="card-date">
            <p>{description.date2}</p>
            <p>{description.place2}</p>
          </div>
          <div
            className="card-date">
            <p>{description.date3}</p>
            <p>{description.place3}</p>
          </div>
        </div>
        </div>
      )}
      <div className="container-userslist">
        <UsersList />
      </div>
    </div>
  );
};

export default LocationCard;
