"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";

const cardsArray = [
  { id: "a", name: "cheeseburger", path: "/images/cheeseburger.png" },
  { id: "b", name: "chocolates", path: "/images/chocolates.jpg" },
  { id: "c", name: "fries", path: "/images/fries.png" },
  { id: "d", name: "hotdog", path: "/images/hotdog.png" },
  { id: "e", name: "ice-cream", path: "/images/ice-cream.png" },
  { id: "f", name: "milkshake", path: "/images/milkshake.png" },
  { id: "g", name: "pizza", path: "/images/pizza.png" },
  { id: "h", name: "cat", path: "/images/cat.jpg" },

  { id: "i", name: "cheeseburger", path: "/images/cheeseburger.png" },
  {
    id: "j",
    name: "chocolates",
    path: "/images/chocolates.jpg",
  },
  { id: "k", name: "fries", path: "/images/fries.png" },
  { id: "l", name: "hotdog", path: "/images/hotdog.png" },
  { id: "m", name: "ice-cream", path: "/images/ice-cream.png" },
  { id: "n", name: "milkshake", path: "/images/milkshake.png" },
  { id: "o", name: "pizza", path: "/images/pizza.png" },
  { id: "p", name: "cat", path: "/images/cat.jpg" },
];

export default function Grid() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]); // An array to track the two cards currently flipped by the user.
  const [matchedCards, setMatchedCards] = useState([]); // An array to track cards that have been matched
  const [isGameOver, setIsGameOver] = useState(false);
  const [moveCount, setMoveCount] = useState(0); // To track the number of moves the player makes

  useEffect(() => {
    const newcardsArray = [...cardsArray];
    // generates random order
    setCards(newcardsArray.sort(() => 0.5 - Math.random()));
  }, []);

  function handleCardClick(cardId) {
    console.log(cardId);
    setFlippedCards((prevCards) => [...prevCards, cardId]);
  }

  useEffect(
    function () {
      if (flippedCards.length === 2) {
        const firstcard = cards.find((card) => card.id === flippedCards[0]);
        const secondCard = cards.find((card) => card.id === flippedCards[1]);
        if (firstcard.name === secondCard.name) {
          setMatchedCards((prevMatched) => [
            ...prevMatched,
            firstcard.id,
            secondCard.id,
          ]);
        }
        setTimeout(() => setFlippedCards([]), 1000);
      }
    },
    [flippedCards]
  );

  return (
    <div className="flex flex-col justify-center items-center min-h-full">
      <Header />
      <div className="grid grid-cols-4 gap-2 border-sky-500 max-w-2xl">
        {cards.map((img) => {
          return (
            <Card
              key={img.id}
              isFlipped={
                flippedCards[0] === img.id || flippedCards[1] === img.id
              }
              isMatched={matchedCards.includes(img.id)}
              onCardClick={() => handleCardClick(img.id)}
              path={img.path}
            />
          );
        })}
      </div>
    </div>
  );
}
