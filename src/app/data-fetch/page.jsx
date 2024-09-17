"use client";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function ClientDataFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("gallery").select("*");
      console.log(data);
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(data);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Data from Supabase (Client-side)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

/*
const imagesData = [
  {
    name: "cat",
    url: "https://res.cloudinary.com/daadqnvg0/image/upload/f_auto,q_auto/v1/memory-game/br9ab05bbhhbmkd1dfq3",
  },
  {
    name: "chocolates",
    url: "https://res.cloudinary.com/daadqnvg0/image/upload/v1726227224/memory-game/v6zecjvjs5yxrfw0cwmh.jpg",
  },
  {
    name: "burger",
    url: "https://res.cloudinary.com/daadqnvg0/image/upload/v1726227224/memory-game/nnzfayuooruwqga30nno.png",
  },
  {
    name: "blank",
    url: "https://res.cloudinary.com/daadqnvg0/image/upload/v1726227224/memory-game/aqwffvk7ltpvm36m4w1a.png",
  },
  {
    name: "milkshake",
    url: "https://res.cloudinary.com/daadqnvg0/image/upload/v1726227224/memory-game/ee9ues9m9hnqvp3ypryx.png",
  },
  {
    name: "fries",
    url: "https://res.cloudinary.com/daadqnvg0/image/upload/v1726227224/memory-game/fwqxqjxb7cgw3aq7lp6r.png",
  },
  {
    name: "hotdog",
    url: "https://res.cloudinary.com/daadqnvg0/image/upload/v1726227224/memory-game/hzthcjwmvplzbohest6m.png",
  },
  {
    name: "white",
    url: "https://res.cloudinary.com/daadqnvg0/image/upload/v1726227224/memory-game/pbpdjajzk6byv51pxmkj.png",
  },
  {
    name: "pizza",
    url: "https://res.cloudinary.com/daadqnvg0/image/upload/v1726227224/memory-game/jf9sfodgym0clbwjnlqu.png",
  },
  {
    name: "icecream",
    url: "https://res.cloudinary.com/daadqnvg0/image/upload/v1726227224/memory-game/zv9bfjnuc5hot2r3qoxh.png",
  },
];
*/
