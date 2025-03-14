import axios from "axios";

export interface Character {
  id: number;
  name: string;
  image: string;
}

const API_URL = "https://rickandmortyapi.com/api";
export const getCharacters = async (page: number): Promise<Character[]> => {
  try {
    const response = await axios.get<Character[]>(
      `${API_URL}/character?page=${page}`
    );
    const characters = response.data.results;
    const totalPages = response.data.info.pages;
    return { characters, totalPages };
  } catch (error: any) {
    console.log("api hatasi", error.message);
    throw new Error("kullanicilar getirilemedi");
  }
};
