import React from "react";
import Card from "./Card";

interface CardsGridProps {
  cards: {
    title: string;
    hours: string;
    last: string;
    bgColor: string;
  }[];
}

const CardsGrid: React.FC<CardsGridProps> = ({ cards }) => {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        w-full
      "
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          hours={card.hours}
          last={card.last}
          bgColor={card.bgColor}
        />
      ))}
    </div>
  );
};

export default CardsGrid;