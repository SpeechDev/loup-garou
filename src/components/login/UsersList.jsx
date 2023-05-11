import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Descriptions } from "../../datas/Descriptions";

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

      console.log(dataWithComment)

  return (
    <div>
    </div>
  )
}

export default UsersList