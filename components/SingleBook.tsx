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

function SingleBook() {
  return (
    <div>
      <Card className="w-60">
        <CardHeader>
          <CardTitle className="text-xl">F. Scott Fitzgerald</CardTitle>
          <CardDescription>Priority: 10</CardDescription>
        </CardHeader>
        <CardContent>
          <p>The Great Gatsby</p>
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
