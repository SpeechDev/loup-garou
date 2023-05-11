import Localisation from "../components/Localisation";
import React from "react";
import { Link } from 'react-router-dom';
import Card from "../components/Card";
import { Description } from '../data/description';

export const Homepage = () => {
  const description = Description.filter(description => description);

  return (
    <div className="container-home">
      <Localisation/>
      <h2>Nos destinations</h2>
      <div className="container-list-destination">
      {description.length > 0 && description.map((item, index) =>
            <Link to={`/description/${item.id}`} key={index}>
              <Card description={item}/>
            </Link>
          )}
      </div>
    </div>
  );
};

