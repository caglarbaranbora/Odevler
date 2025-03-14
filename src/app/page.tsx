"use client";
import Link from "next/link";
import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

interface User {
  id: number;
  username: string;
}
export default function Home() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <div className="">
      {/* <div className="">merhaba dunya</div> */}
      <div>
        {data.map((user) => {
          <p key={user.id}>{user.username}</p>;
          // console.log(user.username);
        })}
      </div>
    </div>
  );
}
