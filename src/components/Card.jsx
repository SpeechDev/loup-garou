import React, { useState } from "react";
export default function Card(item) {
  const [isFavorited, setIsFavorited] = useState(false);
  const description = item.description;
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleLetsGo = () => {
    console.log("Let’s go !");
  };
  return (
    <div className="card">
      <img src={description.img} alt={description.descriptions} />
      <div className="card-details">
        <h2>{description.descriptions}</h2>
        <div
          className="card-info
"
        >
          <p>Durée {description.temps}</p>
          <p>Niveau {description.niveau}</p>
          <p>A patir de {description.prix}</p>
        </div>
        <div
          className="card-dates
"
        >
          <div
            className="card-date
  "
          >
            <p>{description.date1}</p>
            <p>{description.place1}</p>
          </div>
          <div
            className="card-date
  "
          >
            <p>{description.date2}</p>
            <p>{description.place2}</p>
          </div>
          <div
            className="card-date
  "
          >
            <p>{description.date3}</p>
            <p>{description.place3}</p>
          </div>
        </div>
        <div
          className="card-buttons
"
        >
          <button onClick={handleLetsGo}>Let’s go !</button>
          <button
            type="button"
            className={`favoriteButton ${isFavorited ? "favorited" : ""}`}
            onClick={toggleFavorite}
          >
            <span className="heartIcon">{isFavorited ? "❤️" : "🤍"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
