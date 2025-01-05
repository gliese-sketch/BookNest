"use client";
import { useState } from "react";

function Test() {
  const [inputVal, setInputVal] = useState("");
  const [names, setNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    setNames((prevState) => [
      ...prevState,
      {
        id: crypto.randomUUID(),
        text: inputVal,
      },
    ]); // Update state
    setInputVal(""); // Empty the input field
  };

  const handleDelete = (id) => {
    setNames((prevState) => prevState.filter((nameObj) => nameObj.id !== id));
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Form to add names */}
      <form className="flex gap-1 items-center mb-10" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="test"
          className="border px-2 py-1"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button className="bg-blue-500 btn">Add</button>
      </form>

      {/* Display the names */}
      {names.map((nameObj) => (
        <div
          key={nameObj.id}
          className="flex gap-2 items-center border border-black/50 rounded-lg px-2 py-1"
        >
          <p>{nameObj.text}</p>
          <button
            className="bg-red-400 btn"
            onClick={() => handleDelete(nameObj.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Test;
