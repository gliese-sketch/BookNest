"use client";
import { useState } from "react";

function Test() {
  const [inputVal, setInputVal] = useState("");
  const [names, setNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    if (inputVal.trim() === "") return; // Check if input is empty

    setNames((prevState) => [
      ...prevState,
      {
        id: crypto.randomUUID(),
        text: inputVal,
        likes: 0,
      },
    ]); // Update state
    setInputVal(""); // Empty the input field
  };

  const handleSort = () => {
    console.log("Sort clicked");
    setNames((prevState) => [...prevState].sort((a, b) => b.likes - a.likes));
  };

  const handleDelete = (id) => {
    setNames((prevState) => prevState.filter((nameObj) => nameObj.id !== id));
  };

  const handleLike = (id) => {
    setNames((prevState) =>
      prevState.map((nameObj) =>
        nameObj.id === id ? { ...nameObj, likes: nameObj.likes + 1 } : nameObj
      )
    );
  };

  const handleDislike = (id) => {
    setNames((prevState) =>
      prevState.map((nameObj) =>
        nameObj.id === id ? { ...nameObj, likes: nameObj.likes - 1 } : nameObj
      )
    );
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
        <button
          className="bg-orange-500 btn"
          type="button"
          onClick={handleSort}
        >
          Sort
        </button>
        <button className="bg-blue-500 btn" type="submit">
          Add
        </button>
      </form>

      {/* Display the names */}
      {names.map((nameObj) => (
        <div
          key={nameObj.id}
          className="flex gap-2 items-center border border-black/50 rounded-lg px-2 py-1"
        >
          <p>{nameObj.text}</p>
          <p className="text-green-800">{nameObj.likes}</p>

          <button onClick={() => handleDislike(nameObj.id)}>👎</button>
          <button onClick={() => handleLike(nameObj.id)}>👍</button>

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
