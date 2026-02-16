# Express Notes API

## Fourth homework from the Node.js block

This project extends the Express Notes API by adding user authentication, sessions, cookies, and private note collections.
Users can register, log in, log out, and manage their personal notes, ensuring that notes are private and accessible only to the owner.

---

## Requirements

- Repository name: `nodejs-hw`
- Task completed in the `04-auth` branch
- Server successfully connects to MongoDB
- Environment variables `PORT` and `MONGO_URL` are used via **dotenv**
- Middleware logger configured with **pino-http**
- Middleware **express.json()** is configured
- Middleware **cors** is enabled
- Middleware for **404 Not Found** is implemented
- Middleware for **500 Internal Server Error** (or `http-errors`) is implemented
- Full CRUD functionality for notes with user-specific access
- User authentication implemented:
  - Registration (`POST /auth/register`)
  - Login (`POST /auth/login`)
  - Logout (`POST /auth/logout`)
  - Session refresh (`POST /auth/refresh`)
- Sessions stored in MongoDB and cookies (`accessToken`, `refreshToken`, `sessionId`) are set securely
- Authentication middleware protects all note routes
- Passwords are hashed with **bcrypt**
- Validation implemented using **celebrate** and **Joi**
- Project structure follows requirements:
  - `src/controllers`
  - `src/db`
  - `src/middleware`
  - `src/models`
  - `src/routes`
  - `src/services`
  - `src/validations`
  - `src/constants`
- Application runs without errors
- Project is deployed on **render.com**

---

## Implemented Features

### User Authentication

- **Registration** (`POST /auth/register`)
  - Validates email and password
  - Checks for existing email
  - Hashes password
  - Creates new user and session
  - Sets secure cookies

- **Login** (`POST /auth/login`)
  - Validates email and password
  - Checks credentials
  - Replaces old session with new one
  - Sets secure cookies

- **Logout** (`POST /auth/logout`)
  - Deletes current session
  - Clears cookies
  - Returns status 204

- **Session refresh** (`POST /auth/refresh`)
  - Validates `sessionId` and `refreshToken` from cookies
  - Creates new session if valid
  - Sets new secure cookies
  - Returns message `Session refreshed`

---

### Notes Access

- All note routes are protected with **authenticate** middleware
- Each note has a `userId` field linking it to its owner
- CRUD operations only affect notes belonging to the authenticated user
- Operations return **404** if the note does not exist or belongs to another user

---

### Sessions & Cookies

- Sessions stored in MongoDB (`Session` model)
- Access token valid for 15 minutes, refresh token and sessionId valid for 1 day
- Cookies settings:
  - `httpOnly: true`
  - `secure: true`
  - `sameSite: 'none'`
  - `maxAge` per token type

---

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- celebrate / Joi
- dotenv
- cors
- pino-http
- http-errors
