import { Elysia } from "elysia";
import { pool } from "../db/db";

const app = new Elysia();

// CREATE book
export const createBook = async ({ body }) => {
    const { name, title, description } = body;
    const created_at = new Date();
    const updated_at = new Date();

    try {
      const result = await pool.query("INSERT INTO books(name, title, description, created_at, updated_at) VALUES($1, $2, $3, $4, $5) RETURNING *",
       [name, title, description, created_at, updated_at]);
      return new Response (JSON.stringify((result.rows[0])));
    } catch (err) {
      return err;
    }
  };

// READ all books
export const getAllBooks = async () => {
  try {
    const result = await pool.query("SELECT * FROM books");
    return result.rows;
  } catch (err) {
    return err;
  }
};

// READ a specific book
export const getBook = async ({ params, set }) => {
    const id = params.id;

    try {
      const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
      if (result && result.length > 0) {
        return new Response (JSON.stringify((result.rows[0])));
      }
      set.status = 204;
    } catch (err) {
      return err;
    }
};

// UPDATE a book
export const updateBook = async ( { body, params} ) => {
    const id = params.id;
    const { name, title, description } = body;
    const updated_at = new Date();

    try {
      const result = await pool.query("UPDATE books SET name = $1, title = $2, description = $3, updated_at = $4 WHERE id = $5 RETURNING *", [name, title, description, updated_at, id]);
      return new Response (JSON.stringify((result.rows[0])));
    } catch (err) {
      return err;
    }
}

// DELETE a book
export const deleteBook = async ({ params }) => {
    const id = params.id;

    try {
      await pool.query("DELETE FROM books WHERE id = $1", [id]);
      return new Response (JSON.stringify("Book deleted successfully"));
    } catch (err) {
      return err;
    }
};
