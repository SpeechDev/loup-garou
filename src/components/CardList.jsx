import React from 'react';
import { Description } from '../data/description';
import Card from '../components/Card';

const CardList = () => {
  const description = Description;

  return (
    <div className='container-cardlist'>
        {description.map((item, index) => (
            <Card key={index} description={item} />
        ))}
    </div>
  );
};

export default CardList;