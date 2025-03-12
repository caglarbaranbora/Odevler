"use client";
import { useState } from "react";

export default function Page() {
  const [number, setNumber] = useState<number | "">("");
  const [isPrime, setIsPrime] = useState<boolean | null>(null);

  const checkPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const handleCheck = () => {
    if (typeof number === "number") {
      setIsPrime(checkPrime(number));
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-900 text-white min-h-screen">
      <input
        type="number"
        value={number}
        placeholder="Sayı girin"
        onChange={(e) =>
          setNumber(e.target.value ? Number(e.target.value) : "")
        }
        className="p-2 rounded-md text-white"
      />
      <button
        onClick={handleCheck}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Kontrol Et
      </button>
      {isPrime !== null && (
        <p className="text-lg">
          {number} {isPrime ? "bir asal sayıdır." : "asal bir sayı değildir."}
        </p>
      )}
    </div>
  );
}
