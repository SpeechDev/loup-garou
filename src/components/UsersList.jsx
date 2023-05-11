import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Descriptions } from "../datas/Descriptions";

const UsersList = () => {
    const [data, setData] = useState([]);
    const descriptions = Descriptions;

    useEffect(() => {
        axios
          .get("https://randomuser.me/api/?results=10&nat=fr")
          .then((response) => setData(response.data))
          .catch((error) => console.error(error));
      }, []);

    const dataWithComment = data.results
      ? data.results
          .map((item, index) => ({
            ...item,
            id: index,
            description: descriptions[index % descriptions.length].description,
          }))
      : null;

    return (
        <div className="container-usersList">
            <h2>Commentaires</h2>
            {dataWithComment && dataWithComment.map((user) => (
                <div key={user.id}>
                    <div className="container-usersList-info">
                        <img src={user.picture.large} alt="" />
                        <h3>{user.name.first} {user.name.last}</h3>
                        <p>{user.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UsersList