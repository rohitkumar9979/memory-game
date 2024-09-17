"use client";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import {
  addImages,
  selectAllImages,
} from "../lib/features/gallery/gallerySlice";
import { supabase } from "../lib/supabaseClient";

export default function Grid() {
  const imagesData = useAppSelector(selectAllImages);
  // console.log("store imagesData: ", imagesData);
  // const isFetched = useRef(false)
  const dispatch = useAppDispatch();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]); // An array to track the two cards currently flipped by the user.
  const [matchedCards, setMatchedCards] = useState([]); // An array to track cards that have been matched
  const [isGameOver, setIsGameOver] = useState(false);
  const [moveCount, setMoveCount] = useState(0); // To track the number of moves the player makes

  useEffect(
    function () {
      const fetchData = async () => {
        try {
          const { data, error } = await supabase.from("gallery").select("*");
          // console.log("fetched data ", data);
          if (error) {
            throw error;
          }
          const newcardsArray = [...data];
          // generates random order
          setCards(newcardsArray.sort(() => 0.5 - Math.random()));
          dispatch(addImages(data));
        } catch (error) {
          // console.error("Error fetching images: ", error);
        }
      };
      if (!imagesData.length) {
        // console.log("fetching");
        fetchData();
      } else {
        const data = [...imagesData];
        // console.log("cached ", imagesData);
        setCards(data.sort(() => 0.5 - Math.random()));
      }
    },
    [isGameOver]
  );

  function handleCardClick(cardId) {
    // clicking the same card twice doesn't create a match
    setFlippedCards((prevCard) => {
      if (!prevCard.includes(cardId)) return [...prevCard, cardId];
      else return [];
    });
  }

  useEffect(
    function () {
      // console.log("fliped cards id: ", flippedCards);
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
        setTimeout(() => setFlippedCards([]), 2000);
      }
    },
    [flippedCards]
  );

  function handleRestart() {
    setCards([]);
    setMatchedCards([]);
    setFlippedCards([]);
    setIsGameOver(true);
  }

  if (matchedCards.length === 16) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <h2>Game over 🚫</h2>
        <button
          onClick={handleRestart}
          className="bg-green-800 text-white rounded-sm p-4"
        >
          restart
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-full">
      <Header />
      <div className="grid grid-cols-4 gap-2 border-sky-500 max-w-2xl">
        {cards
          .filter((img) => img.name !== "white" && img.name !== "blank")
          .map((img) => {
            return (
              <Card
                key={img.id}
                isFlipped={
                  flippedCards[0] === img.id || flippedCards[1] === img.id
                }
                isMatched={matchedCards.includes(img.id)}
                onCardClick={() => handleCardClick(img.id)}
                path={img.imageurl}
              />
            );
          })}
      </div>
    </div>
  );
}
