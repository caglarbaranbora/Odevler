"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { getCharacters, Character } from "@/services/api";

export default function Characters() {
  const [data, setData] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [filteredCharacters, setFilteredCharacters] = useState<any[]>([]);

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  const fetchCharacters = async () => {
    try {
      const { characters, totalPages } = await getCharacters(currentPage);
      setData(characters);
      setFilteredCharacters(characters);
      setTotalPages(totalPages);
    } catch (error) {
      alert(error);
    }
  };

  const loadMore = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    if (search === "") {
      setFilteredCharacters(data); // Arama kutusu boşsa tüm karakterleri göster
    } else {
      const filtered = data.filter(
        (character: any) =>
          character.name.toLowerCase().includes(search.toLowerCase()) // İsimde arama yap
      );
      setFilteredCharacters(filtered); // Filtrelenmiş karakterleri güncelle
    }
  }, [search, data]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center px-10 py-5">
        <h1 className="text-center font-extrabold">
          RICK AND MORTY CHARACTERS
        </h1>
        <input
          className=" text-white border-2 border-white rounded-lg"
          value={search}
          placeholder="ara"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </div>
      <h2>arama sonuclari:</h2>
      <div className="grid grid-cols-3 gap-4">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character: any) => (
            <div
              key={character.id}
              className="flex flex-col items-center bg-gray-200 p-4 rounded-lg"
            >
              <img
                src={character.image}
                className="w-32 h-32 rounded-full"
                alt={character.name}
              />
              <p className="font-bold mt-2 text-black">
                {character.id} - {character.name}
              </p>
            </div>
          ))
        ) : (
          <p>sonuc bulunamadi</p>
        )}
        {/* {data.map((character) => (
          <div
            key={character.id}
            className="flex flex-col items-center bg-gray p-4 rounded-lg"
          >
            <img
              src={character.image}
              className="w-32 h-32 rounded-full"
              alt={character.name}
            />
            <div className="flex flex-col items-center">
              <p className="font-bold">
                {character.id} - {character.name}
              </p>
            </div>
          </div>
        ))} */}
        <div className="flex col-span-3 justify-center mt-4">
          <button
            onClick={() => loadMore(currentPage - 1)}
            disabled={currentPage === 1}
            className="font-extrabold bg-blue-500 rounded-lg p-2 mt-4"
          >
            onceki
          </button>
          <span>
            {currentPage} / {totalPages}{" "}
          </span>
          <button
            onClick={() => loadMore(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="font-extrabold bg-blue-500 rounded-lg p-2 mt-4"
          >
            sonraki
          </button>
        </div>
      </div>
    </div>
  );
}
