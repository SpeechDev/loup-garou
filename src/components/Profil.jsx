import React from "react";
import { User } from "../data/User";

const Profil = () => {
  const user = User;
  return (
    <>
      <section className="profil">
        <div>Profil</div>
        <h1>
          {user[0].name.first} de {user[0].location.city} {user[0].age} ans
        </h1>
        <img src={user[0].imgUrl} />
        <br />
        <p>{user[0].description}</p>
      </section>
    </>
  );
};

export default Profil;
