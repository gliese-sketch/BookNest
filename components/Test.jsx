"use client";
import { useState } from "react";

function Test() {
  const [inputVal, setInputVal] = useState("");
  const [names, setNames] = useState([]);

  // page reload se rokna hai
  // input field ki value ko empty karna hai
  // setNames ki help se names array ke andar daalna hai value ko
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    setNames((prevState) => {
      const newState = [...prevState, inputVal];
      console.log(newState);

      return newState;
    });

    setInputVal(""); // Empty the input field
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <form className="flex gap-1 items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="test"
          className="border px-2 py-1"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
          Add
        </button>
      </form>
    </div>
  );
}

export default Test;
