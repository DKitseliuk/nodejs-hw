// src/server.js

//Imports
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import pino from 'pino-http';

const app = express();
const PORT = process.env.PORT ?? 3000;

//Middleware - CORS
app.use(cors());

//Middleware - JSON parsing
app.use(express.json());

//MIddleware - Pino/pretty logging
app.use(
  pino({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        messageFormat:
          '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
        hideObject: true,
      },
    },
  }),
);

//Route - /notes
app.get('/notes', (req, res) => {
  res.status(200).json({
    message: 'Retrieved all notes',
  });
});

//Route - /notes/:noteId
app.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({
    message: `Retrieved note with ID: ${noteId}`,
  });
});

//Route - Error test
app.get('/test-error', () => {
  throw new Error('Simulated server error');
});

//Route - 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

//Middleware - Error catching
app.use((err, req, res, next) => {
  console.log('Error:', err.message);

  const isProd = process.env.NODE_ENV === 'production';

  res.status(500).json({
    message: isProd ? 'Something went wrong. Please try again' : err.message,
  });
});

// Server
app.listen(PORT, (error) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
