"use client";

import Link from "next/link";
import { ChangeEvent, useState, useEffect } from "react";
export default function Home() {
  const [number, setNumber] = useState<string>("");

  const handleSubmit = () => {
    if (number > "0") {
      alert("numara: " + number + " 0 dan buyuk");
    } else if (number < "0") {
      alert("numara: " + number + " 0 dan kucuk");
    } else alert("numara" + number + " 0");
  };

  useEffect(() => {
    console.log(number);
  }, [number]);
  return (
    <div className="flex justify-center items-center">
      <input
        className="border border-white"
        placeholder="sayi girin"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setNumber(e.target.value);
        }}
        value={number}
      />
      <button className="bg-white text-black rounded-lg" onClick={handleSubmit}>
        GONDER
      </button>

      <Link href="/while">WHILE GIT</Link>
      <Link href="/asal">ASAL SAYI GIT</Link>
    </div>
  );
}
