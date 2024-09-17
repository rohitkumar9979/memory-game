import Image from "next/image";

const blankImageUrl =
  "https://res.cloudinary.com/daadqnvg0/image/upload/v1726227224/memory-game/aqwffvk7ltpvm36m4w1a.png";
const whiteImageUrl =
  "https://res.cloudinary.com/daadqnvg0/image/upload/v1726227224/memory-game/pbpdjajzk6byv51pxmkj.png";

export default function Card({ isFlipped, isMatched, onCardClick, path }) {
  return (
    <div className="w-28">
      <Image
        src={isMatched ? whiteImageUrl : isFlipped ? path : blankImageUrl}
        width={150}
        height={150}
        onClick={onCardClick}
        alt="card images"
      />
    </div>
  );
}
