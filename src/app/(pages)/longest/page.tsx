"use client";
import React, { ChangeEvent, useState } from "react";

export default function Page() {
  const [sentence, setSentence] = useState<string>("");

  const findLongest = (str: string): string => {
    const words = str.split(" ");
    let longestWord = "";

    words.forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });

    return longestWord;
  };

  return (
    <div>
      <input
        placeholder="Bir cümle girin"
        value={sentence}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSentence(e.target.value)
        }
      />
      <button onClick={() => setSentence("")}>Cümleyi Temizle</button>
      <p>Girilen Cümle: {sentence}</p>
      <p>
        En Uzun Kelime:{" "}
        {sentence ? findLongest(sentence) : "Henüz cümle girilmedi"}
      </p>
    </div>
  );
}
