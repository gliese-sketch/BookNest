import React from "react";
import SingleBook from "./SingleBook";

interface ListBooksProps {
  books: Book[];
}

function ListBooks({ books }: ListBooksProps) {
  return (
    <section className="px-4 flex flex-wrap gap-2 justify-center mb-10">
      {books.map((book) => (
        <SingleBook key={book.id} book={book} />
      ))}
    </section>
  );
}

export default ListBooks;
