import Image from "next/image";
import { useEffect, useState } from "react";

export default function Card({ isFlipped, isMatched, onCardClick, path }) {
  const imagesArr = [
    { id: "a", name: "cheeseburger", src: "/images/cheeseburger.png" },
    { id: "b", name: "chocolates", src: "/images/chocolates.jpg" },
    { id: "c", name: "fries", src: "/images/fries.png" },
    { id: "d", name: "hotdog", src: "/images/hotdog.png" },
    { id: "e", name: "ice-cream", src: "/images/ice-cream.png" },
    { id: "f", name: "milkshake", src: "/images/milkshake.png" },
    { id: "g", name: "pizza", src: "/images/pizza.png" },
    { id: "h", name: "cat", src: "/images/cat.jpg" },

    { id: "i", name: "cheeseburger", src: "/images/cheeseburger.png" },
    { id: "j", name: "chocolates", src: "/images/chocolates.jpg" },
    { id: "k", name: "fries", src: "/images/fries.png" },
    { id: "l", name: "hotdog", src: "/images/hotdog.png" },
    { id: "m", name: "ice-cream", src: "/images/ice-cream.png" },
    { id: "n", name: "milkshake", src: "/images/milkshake.png" },
    { id: "o", name: "pizza", src: "/images/pizza.png" },
    { id: "p", name: "cat", src: "/images/cat.jpg" },
  ];

  return (
    <div className="w-28">
      <Image
        src={
          isMatched
            ? "/images/white.png"
            : isFlipped
            ? path
            : "/images/blank.png"
        }
        width={150}
        height={150}
        onClick={onCardClick}
        alt="card images"
      />
    </div>
  );
}
