"use client";
import { ChangeEvent, useState, useEffect } from "react";

export default function page() {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    console.log(number);
  }, [number]);

  const handleClick = () => {
    for (let i = 0; i <= number; i++) {
      console.log(i);
    }
  };

  return (
    <>
      <input
        value={number}
        placeholder="sayi girin"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setNumber(Number(e.target.value));
        }}
      />
      <button onClick={handleClick}>tiklat</button>
    </>
  );
}
