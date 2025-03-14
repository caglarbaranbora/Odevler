"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { getUsers, User } from "@/services/api";

export default function Home() {
  const [data, setData] = useState<User[]>([]);

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

  return (
    <div className="">
      <div className="">merhaba dunya</div>
      <div>
        {data.map((user) => (
          <div key={user.id}>{user.username}</div>
        ))}
      </div>
    </div>
  );
}
