# Express Notes API

## Second homework from the Node.js block

This project extends the Express Notes API by connecting a real MongoDB database using Mongoose.
The main goal is not only to implement full CRUD functionality, but also to properly structure the application by separating responsibilities into controllers, routes, models, and middleware.

---

## Requirements

- Repository name: `nodejs-hw`
- Task completed in the `02-mongodb` branch
- Server successfully connects to MongoDB
- Environment variable `PORT` and `MONGO_URL` is used via **dotenv**
- Middleware logger is configured with **pino-http**
- Middleware **express.json()** is configured
- Middleware **cors** is enabled
- Middleware for **404 Not Found** is implemented
- Middleware for **500 Internal Server Error** is implemented
- Implemented CRUD operations:
  - `GET /notes`
  - `GET /notes/:noteId`
  - `POST /notes`
  - `PATCH /notes/:noteId`
  - `DELETE /notes/:noteId`
- Project structure follows the requirements:
  - `src/controllers`
  - `src/db`
  - `src/middleware`
  - `src/models`
  - `src/routes`
  - `server.js`
- Application runs without errors
- Project is deployed on **render.com**

---

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- cors
- pino-http
- http-errors
