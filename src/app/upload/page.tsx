"use client";
import { useState } from "react";

export default function Upload() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch("api/updateusers", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });
    if (res.ok) {
      setMessage("User created succesfully");
    } else {
      setMessage("Failed to create an user");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="
            email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="
            text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button type="submit">Creat an user</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
