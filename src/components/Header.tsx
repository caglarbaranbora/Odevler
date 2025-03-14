import React, { ChangeEvent } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex bg-white p-5 justify-between">
      <h1 className="text-black font-extrabold">caglar baran bora </h1>
      <Link href="/characters" className="text-black">
        KARAKTERLERI INCELE
      </Link>
    </div>
  );
}
