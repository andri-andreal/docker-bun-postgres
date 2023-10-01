
# Bun + Elysia + PostgreSQL in Docker
[Bun Official](https://bun.sh/)
A brief description of what this project does and who it's for


## Installation for Local Environtment

Install my-project with docker & docker-compose (make sure you already install docker to your machine) and you can run : 

```bash
    #cd my-project
    #(sudo) docker-compose run --rm webapp bun install
    #(sudo) docker-compose up -d
```
    
## API Reference

#### Get all books

```http
  GET /books
```

#### Get book

```http
  GET /books/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Insert book
```http
  POST /books
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | name of book to fetch |
| `title`      | `string` | title of book to fetch |
| `description`      | `string` | description of book |

#### Edit book
```http
  PUT /books
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | name of book to fetch |
| `title`      | `string` | title of book to fetch |
| `description`      | `string` | description of book |

#### Delete book

```http
  DELETE /books/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Database

in folder :

```http
  install/db/
```
all sql will execute after db service is run.

## Authors

- [@andri-andreal](https://www.github.com/andri-andreal)

