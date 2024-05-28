"use client";

import { useState } from "react";

export default function Todo() {
  const [inputTodo, setInputTodo] = useState("");
  const [todo, setTodo] = useState([
    "belajar nextJS",
    "nyoba buat todo",
    "belajar event handler",
  ]);

  function handleInput(e: any) {
    setInputTodo(e.target.value);
  }

  function addTodo(e: any) {
    e.preventDefault();
    setTodo([...todo, inputTodo]);

    setInputTodo("");
  }

  return (
    <div>
      <form action="" className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="input your todo.."
          value={inputTodo}
          onChange={handleInput}
        />
        <button onClick={addTodo}>Add</button>
      </form>

      <div className="mt-5 flex flex-col gap-4">
        {todo.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
