import axios from "axios";

export interface User {
  id: number;
  username: string;
}

const API_URL = "https://jsonplaceholder.typicode.com";
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(`${API_URL}/users`);
    return response.data;
  } catch (error: any) {
    console.log("api hatasi", error.message);
    throw new Error("kullanicilar getirilemedi");
  }
};
