import React from "react";
import { CardComp } from "../components/Card/CardComp";
import NewCard from "../components/Card/newCard";

const Card = () => {
  return (
    <main className="flex-grow">
      <CardComp />
      <NewCard />
    </main>
  );
};

export default Card;
