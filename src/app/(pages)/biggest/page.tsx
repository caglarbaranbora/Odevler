"use client";
import React, { ChangeEvent, useEffect, useState } from "react";

export default function page() {
  const [number, setNumber] = useState<number[]>([]);
  const [tempValue, setTempValue] = useState<number>(0);

  const findBiggest = (arr: number[]): number => {
    return Math.max(...arr);
  };
  return (
    <div>
      <input
        placeholder="sayi gir"
        value={tempValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTempValue(Number(e.target.value))
        }
      />
      <button
        className="flex"
        onClick={() => {
          setNumber([...number, tempValue]);
          setTempValue(0);
        }}
      >
        Numara Ekle
      </button>
      <button
        onClick={() => {
          setNumber([]);
          setTempValue(0);
        }}
      >
        Array Temizle
      </button>
      <p>{number.join(", ")}</p>
      <p>
        En buyuk sayi:{" "}
        {number.length > 0 ? findBiggest(number) : "henuz sayi girilmedi"}
      </p>
    </div>
  );
}
