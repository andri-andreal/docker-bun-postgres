CREATE TABLE IF NOT EXISTS "public"."books" (
  "id" bigserial,
  "name" varchar(255),
  "title" varchar(255),
  "description" varchar(255),
  "created_at" timestamp,
  "updated_at" timestamp,
  PRIMARY KEY ("id")
)
;