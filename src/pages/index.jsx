import Card from "../components/Card";
import CardList from "../components/CardList";
import Localisation from "../components/Localisation";


export const Homepage = () => {
  return (
    <div className="container-home">
      <Localisation/>
      <CardList />
    </div>
  );
};

