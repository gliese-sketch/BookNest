import React, { FormEvent, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowDown01Icon, CrossIcon } from "lucide-react";

function AddBook() {
  const bookTitle = useRef<HTMLInputElement>(null);
  const bookAuthor = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!bookTitle.current || !bookAuthor.current) return;

    const bookTitleValue = bookTitle.current.value;
    const bookAuthorValue = bookAuthor.current.value;

    console.log(bookTitleValue, bookAuthorValue);

    // Empty the input fields
    bookTitle.current.value = "";
    bookAuthor.current.value = "";
  };

  return (
    <form
      className="max-w-96 mx-auto my-10 flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <Input placeholder="Book title" ref={bookTitle} required />
      <Input placeholder="Author" ref={bookAuthor} required />
      <div className="flex gap-2">
        <Button variant="outline" type="button">
          <ArrowDown01Icon /> Sort
        </Button>
        <Button type="submit">
          <CrossIcon /> Add
        </Button>
      </div>
    </form>
  );
}

export default AddBook;
