import React, { useState, useEffect } from "react";
import Card from "../components/Card";

function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

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
          {favorites.map((item) => (
            <Card
              key={item.id} 
              description={item}
              onRemoveFavorite={() => handleRemoveFavorite(item.descriptions)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritePage;