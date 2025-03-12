"use client";
import Link from "next/link";
import { useEffect } from "react";
function sum(a: number, b: number): number {
  return a + b;
}

const topla = (a: number, b: number): number => {
  return a + b;
};

export default function Home() {
  useEffect(() => {
    console.log(sum(5, 7), topla(5, 7));
  }, []);
  return (
    <div>
      <Link href="/biggest" className="flex">
        EN BUYUK ELEMAN
      </Link>
      <Link className="flex" href="/longest">
        EN UZUN KELIME
      </Link>
      <Link href="/specified">BELIRLI ELEMAN</Link>
    </div>
  );
}
