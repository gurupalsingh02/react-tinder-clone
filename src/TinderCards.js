import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
    },
    {
        name: "Elon Musk",
        url: "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
      },
      {
        name: "Elon Musk",
        url: "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
      },
      {
        name: "Elon Musk",
        url: "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
      },{
        name: "Elon Musk",
        url: "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
      },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
