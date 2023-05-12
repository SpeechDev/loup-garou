import React from 'react';
import { useParams } from 'react-router-dom';
import UsersList from '../components/UsersList';
import { Description } from '../data/description';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const LocationCard = () => {
  const { id } = useParams();
  const description = Description.find(description => description.id === parseInt(id));
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

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
