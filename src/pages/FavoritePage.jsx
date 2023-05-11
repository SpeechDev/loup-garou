import React, { useState, useEffect } from "react";
import Card from "../components/Card";

function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);
  console.log(favorites);

  const handleRemoveFavorite = (description) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.descriptions !== description
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((favorite) => (
            <>
              <Card description={favorite} />
              <li key={favorite}>
                <p>{favorite}</p>
                <button onClick={() => handleRemoveFavorite(favorite)}>
                  Remove
                </button>
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritePage;
