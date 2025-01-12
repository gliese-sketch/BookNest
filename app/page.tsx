"use client";

import AddBook from "@/components/AddBook";
import Header from "@/components/Header";
import { HeroHighlight } from "@/components/Hero";
import ListBooks from "@/components/ListBooks";

const books = [
  {
    id: "1",
    title: "React",
    author: "Evan",
    likes: 0,
  },
  {
    id: "34",
    title: "Angular",
    author: "Google",
    likes: 0,
  },
];

function Page() {
  return (
    <div>
      <Header />
      <HeroHighlight>
        <h1 className="text-2xl sm:text-4xl md:text-6xl">BookNest</h1>
      </HeroHighlight>
      <AddBook />
      <ListBooks books={books} />
    </div>
  );
}

export default Page;
