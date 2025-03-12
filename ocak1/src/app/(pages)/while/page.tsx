"use client";
import { ChangeEvent, useState, useEffect } from "react";

export default function Page() {
  const [number, setNumber] = useState<number>(0);

  const handleClick = () => {
    for (let i = 0; i <= number; i++) {
      console.log(i);
    }
  };

  return (
    <>
      <input
        type="number"
        value={number}
        placeholder="Sayı girin"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setNumber(Number(e.target.value));
        }}
      />
      <button onClick={handleClick}>Tıkla</button>
    </>
  );
}
