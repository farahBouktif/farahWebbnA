import React, { useState } from "react";
import Navs from "../../components/NavBars/Navs";
import BnaList from "../../components/BnaList/BnaList";
import { aProposdelaBNA } from "../../components/Data/BNAData";
import CarouselAcceuil from "../../components/CarouselAcceuil/CarouselAcceuil";
import "./Acceuil.css";

const Accueil = () => {
  const [BNALists, setBNALists] = useState(aProposdelaBNA);

  return (
    <div className="carousel-bna-container">
      <Navs />
      <CarouselAcceuil />
      <BnaList BNALists={BNALists} />
    </div>
  );
};

export default Accueil;
