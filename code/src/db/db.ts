import { Pool } from "pg";

// Setting up PostgreSQL
export const pool = new Pool({
  host: 'db',
  user: 'user',
  password: 'secret',
  database: 'mydb',
  port: 5432
});