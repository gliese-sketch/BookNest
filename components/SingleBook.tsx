import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { BadgeMinus, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

interface SingleBookProps {
  book: Book;
}

function SingleBook({ book }: SingleBookProps) {
  return (
    <div>
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="text-xl">{book.author}</CardTitle>
          <CardDescription>Priority: {book.likes}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{book.title}</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="outline">
            <ThumbsUpIcon />
          </Button>
          <Button variant="outline">
            <ThumbsDownIcon />
          </Button>
          <Button variant="destructive">
            <BadgeMinus />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SingleBook;
