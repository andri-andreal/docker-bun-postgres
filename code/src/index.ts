import { Elysia } from "elysia";
import {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook
} from "./controllers/booksController";

const app = new Elysia();

app.post("/books", createBook);
app.get("/books", getAllBooks);
app.get("/books/:id", getBook);
app.put("/books/:id", updateBook);
app.delete("/books/:id", deleteBook);

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
