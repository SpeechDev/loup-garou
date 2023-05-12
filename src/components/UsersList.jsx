import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Descriptions } from '../datas/Descriptions';

const UsersList = () => {
  const [data, setData] = useState([]);
  const descriptions = Descriptions;

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=10&nat=fr')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  const dataWithComment = data.results
    ? data.results.map((item, index) => ({
        ...item,
        id: index,
        description: descriptions[index % descriptions.length].description,
      }))
    : null;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="container-usersList">
        <div className="line"/>
      <h2>Commentaires</h2>
      {dataWithComment && (
        <Carousel responsive={responsive}>
          {dataWithComment.map((user) => (
            <div key={user.id}>
              <div className="container-usersList-info">
                <img src={user.picture.large} alt="" />
                <h3>
                  {user.name.first} {user.name.last}
                </h3>
                <p>{user.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default UsersList;