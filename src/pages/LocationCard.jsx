import React from 'react';
import { useParams } from 'react-router-dom';
import UsersList from '../components/UsersList';
import { Description } from '../data/description';

const LocationCard = () => {
  const { id } = useParams();
  const description = Description.find(description => description.id === parseInt(id));

  return (
    <div className='container-locationcard'>
      {description && (
        <div className='container-info-location'>
          <h2>{description.Descriptions}</h2>
          <img src={description.img} alt="" />
        </div>
      )}
      <div className='container-userslist'>
        <UsersList />
      </div>
    </div>
  );
};

export default LocationCard;