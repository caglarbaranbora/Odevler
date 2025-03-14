"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { getUsers, User } from "@/services/api";

export default function Home() {
  const [data, setData] = useState<User[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const users = await getUsers();
      setData(users);
    } catch (error) {
      alert(error);
    }
  };

  const handleNewUser = () => {
    if (data.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div className="">
      <div className="">merhaba dunya</div>
      <div>
        <button onClick={handleNewUser}>yeni uye getir</button>
        {data.length > 0 && (
          <div>
            <p>{data[currentIndex].username}</p>
          </div>
        )}
      </div>
    </div>
  );
}
