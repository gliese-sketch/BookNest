import React, { FormEvent, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function AddBook() {
  const bookTitle = useRef(null);
  const bookAuthor = useRef(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const bookTitleValue = bookTitle.current.value;
    const bookAuthorValue = bookAuthor.current.value;

    console.log(bookTitleValue, bookAuthorValue);
  };

  return (
    <form
      className="max-w-96 mx-auto my-10 flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <Input placeholder="Book title" ref={bookTitle} required />
      <Input placeholder="Author" ref={bookAuthor} required />
      <div className="flex gap-2">
        <Button variant="outline">Sort</Button>
        <Button>Add</Button>
      </div>
    </form>
  );
}

export default AddBook;
