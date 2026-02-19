// src/server.js

//Imports
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { errors } from 'celebrate';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/authRoutes.js';
import notesRouters from './routes/notesRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { connectMongoDB } from './db/connectMongoDB.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

//MIddleware - Pino(pretty) logging
app.use(logger);

//Middleware - JSON parsing
app.use(express.json());

//Middleware - CORS
app.use(cors());

//Middleware - Cookies parser
app.use(cookieParser());

//Routes - auth
app.use(authRoutes);

//Routes - Notes
app.use(notesRouters);

//Routes - users
app.use(userRoutes);

//Middleware - 404 - Route not found
app.use(notFoundHandler);

//Middleware - Celebrate error catching
app.use(errors());

//Middleware - Error catching
app.use(errorHandler);

//DB connection
await connectMongoDB();

//Start server
app.listen(PORT, (error) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
