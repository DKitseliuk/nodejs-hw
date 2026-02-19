# Express Notes API

## Fifth homework from the Node.js block

This project extends the Express Notes API by adding password reset via email and user avatar upload functionality.
Users can request a password reset link, set a new password using a JWT token, and upload a profile avatar stored in Cloudinary.

---

## Requirements

- Repository name: `nodejs-hw`
- Task completed in the `05-mail-and-img` branch
- Server successfully connects to MongoDB
- All sensitive data is stored in `.env`:
  - `PORT`
  - `MONGO_URL`
  - `JWT_SECRET`
  - `FRONTEND_DOMAIN`
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`
  - `SMTP_HOST`
  - `SMTP_PORT`
  - `SMTP_USER`
  - `SMTP_PASSWORD`
  - `SMTP_FROM`
- Middleware for **404 Not Found** is implemented
- Middleware for **500 Internal Server Error** (or `http-errors`) is implemented
- Password reset functionality via email is implemented
- Avatar upload functionality via Cloudinary is implemented
- Authentication middleware protects private routes
- Project structure follows requirements
- Application runs without errors
- Project is deployed on **render.com**

---

## Implemented Features

### Password Reset via Email

- **Request reset email** (`POST /auth/request-reset-email`)
  - Validates email
  - Generates JWT token (valid for 15 minutes)
  - Sends HTML email using **nodemailer**
  - Reset link format:
    ```
    <FRONTEND_DOMAIN>/reset-password?token=<jwt-token>
    ```

- **Reset password** (`POST /auth/reset-password`)
  - Validates token and new password
  - Verifies JWT token
  - Hashes new password using **bcrypt**
  - Updates user password in database
  - Returns success message

---

### Avatar Upload

- **Update avatar** (`PATCH /users/me/avatar`)
  - Route protected by authentication middleware
  - Accepts image file (max 2MB, `image/*` only)
  - File processed using **multer** (memory storage)
  - Image uploaded to **Cloudinary**
  - User's `avatar` field updated with `secure_url`
  - Returns uploaded image URL

---

### Email & Cloud Services

- Emails sent using **nodemailer**
- JWT tokens generated using `JWT_SECRET`
- Images stored securely in **Cloudinary**

---

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- jsonwebtoken
- celebrate / Joi
- nodemailer
- Cloudinary
- multer
- dotenv
- cors
- pino-http
- http-errors
