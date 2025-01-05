"use client";
import Form from "./Form";

function Test() {
  const [names, setNames] = useState([]);

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
      <Form />

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
