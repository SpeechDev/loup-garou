import React from "react";
import { Description } from "../data/description";
import Card from "../components/Card";

const CardList = () => {
  const description = Description;
  const handleCardClick = (item) => {
    history.push(`/location/${item.id}`);
  };

  console.log("banana")

  return (
    <div className='container-cardlist'>
        <h2>Les incontournables</h2>
        <div className='container-cardlist-img'>
            {description.map((item, index) => (
                <Card key={index} description={item} onClick={() => handleCardClick(item)} />
            ))}
        </div>

    </div>
  );
};

export default CardList;
