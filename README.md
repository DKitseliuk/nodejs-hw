# Express Notes API

## Second homework from the Node.js block

This project extends the Express Notes API by adding pagination, text search, and full request validation.
The goal of this task is to improve data querying capabilities and implement proper validation using celebrate.

---

## Requirements

- Repository name: `nodejs-hw`
- Task completed in the `03-validation` branch
- Server successfully connects to MongoDB
- Environment variable `PORT` and `MONGO_URL` is used via **dotenv**
- Middleware logger is configured with **pino-http**
- Middleware **express.json()** is configured
- Middleware **cors** is enabled
- Middleware for **404 Not Found** is implemented
- Middleware for **celebrate errors** is implemented
- Middleware for **500 Internal Server Error** is implemented
- Full CRUD functionality for notes is implemented
- Pagination is implemented for `GET /notes`
- Filtering by `tag` and text search (`search`) is implemented using MongoDB text index
- Request validation is implemented using **celebrate**
- Validation schemas are created in `src/validations/notesValidation.js`
- Project structure follows the requirements:
  - `src/constants`
  - `src/controllers`
  - `src/db`
  - `src/middleware`
  - `src/models`
  - `src/routes`
  - `server.js`
- Application runs without errors
- Project is deployed on **render.com**

---

## Implemented Features

### Filtering

`GET /notes` supports query parameters:

- `tag` — one of the predefined tags
- `search` — text search across `title` and `content` fields (MongoDB text index)

### Pagination

`GET /notes` supports pagination via query parameters:

- `page` (default: 1, minimum: 1)
- `perPage` (default: 10, range: 5–20)

---

### Validation

Request validation is implemented using **celebrate**.

Validation schemas:

- `getAllNotesSchema`
- `noteIdSchema`
- `createNoteSchema`
- `updateNoteSchema`

Validation includes:

- Query parameters validation
- Route parameter validation (`noteId` using `isValidObjectId`)
- Request body validation
- Ensuring a non-empty payload for PATCH requests

---

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- celebrate
- dotenv
- cors
- pino-http
- http-errors
