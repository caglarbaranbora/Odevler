"use client";

import Link from "next/link";
import { ChangeEvent, useState, useEffect } from "react";

export default function Home() {
  const [number, setNumber] = useState<string>("0");

  const handleSubmit = () => {
    if (number > "0") {
      alert(number + "sayisi pozitiftir");
    } else if (number < "0") {
      alert(number + "sayisi negatiftir");
    } else alert(number + "sifirdir");
  };

  useEffect(() => {
    console.log(number);
  }, [number]);

  return (
    <div>
      <input
        placeholder="sayi girin"
        type="number"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setNumber(e.target.value);
        }}
        value={number}
      />
      <div>{number}</div>
      <button onClick={handleSubmit}>GONDER</button>
      <Link href="/primeNumber">Prime Number</Link>
      <Link href="/while">While</Link>
    </div>
  );
}
