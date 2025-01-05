"use client";
import { useReducer } from "react";
import Form from "./Form";

const namesReducer = (prevState, action) => {
  switch (action.type) {
    case "ADD":
      const newName = {
        id: crypto.randomUUID(),
        likes: 0,
        text: action.payload,
      };
      return [...prevState, newName];
    case "DELETE":
      return prevState.filter((nameObj) => nameObj.id !== action.payload);
    case "SORT":
      return [...prevState].sort((a, b) => b.likes - a.likes);
    case "LIKE":
      return prevState.map((nameObj) =>
        nameObj.id === action.payload
          ? { ...nameObj, likes: nameObj.likes + 1 }
          : nameObj
      );
    case "DISLIKE":
      return prevState.map((nameObj) =>
        nameObj.id === action.payload
          ? { ...nameObj, likes: nameObj.likes - 1 }
          : nameObj
      );
    case "ORDER":
      return [...prevState].sort((a, b) => a.text.localeCompare(b.text));
    default:
      return prevState;
  }
};

function Test() {
  const [names, dispatch] = useReducer(namesReducer, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Form to add names */}
      <Form
        onAdd={(name) => dispatch({ type: "ADD", payload: name })}
        onSort={() => dispatch({ type: "SORT" })}
        onOrder={() => dispatch({ type: "ORDER" })}
      />

      {/* Display the names */}
      {names.map((nameObj) => (
        <div
          key={nameObj.id}
          className="flex gap-2 items-center border border-black/50 rounded-lg px-2 py-1"
        >
          <p>{nameObj.text}</p>
          <p className="text-green-800">{nameObj.likes}</p>

          <button
            onClick={() => dispatch({ type: "DISLIKE", payload: nameObj.id })}
          >
            👎
          </button>
          <button
            onClick={() => dispatch({ type: "LIKE", payload: nameObj.id })}
          >
            👍
          </button>

          <button
            className="bg-red-400 btn"
            onClick={() => dispatch({ type: "DELETE", payload: nameObj.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Test;
