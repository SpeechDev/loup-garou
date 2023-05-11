import React, { useState } from "react";

export default function Card(props) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleLetsGo = () => {
    // ajouter le code pour aller à la page de réservation ou de paiement
    console.log("Let's go !");
  };

  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-details">
        <h2>{props.title}</h2>
        <p>Durée : 4jrs</p>
        <p>Niveau requis : 3 / 5</p>
        <p>Prix : 460 €</p>
        <div className="card-dates">
          <div className="card-date">
            <p> 18 mai.2023</p>
            <p> 2 places</p>
          </div>
          <div className="card-date">
            <p> 18 mai.2023</p>
            <p> 2 places</p>
          </div>
          <div className="card-date">
            <p> 18 mai.2023</p>
            <p>2 places</p>
          </div>
        </div>
        <div className="card-buttons">
          <button onClick={handleLetsGo}>Let's go !</button>
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
