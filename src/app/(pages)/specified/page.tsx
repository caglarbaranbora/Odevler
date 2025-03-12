"use client";
import React, { ChangeEvent, useState } from "react";

export default function Page() {
  const [number, setNumber] = useState<number[]>([]);
  const [tempValue, setTempValue] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleAddNumber = () => {
    if (number.includes(tempValue)) {
      setErrorMessage("Bu sayı zaten mevcut!");
    } else {
      setNumber([...number, tempValue]);
      setTempValue(0);
      setErrorMessage("");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Sayı gir"
        value={tempValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTempValue(Number(e.target.value))
        }
      />
      <button className="flex" onClick={handleAddNumber}>
        Numara Ekle
      </button>
      <button
        onClick={() => {
          setNumber([]);
          setTempValue(0);
          setErrorMessage("");
        }}
      >
        Array Temizle
      </button>
      <p>Girilen Sayılar: {number.join(", ")}</p>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
    </div>
  );
}
