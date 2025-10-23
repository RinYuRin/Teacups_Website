/* eslint-env node */
/* Node.js server - uses Node globals like `process` */
/* global require, process */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const reviewsRouter = require('./routes/reviews');

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send({ status: 'ok', message: 'Reviews API' }));
app.use('/api/reviews', reviewsRouter);

async function start() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/teacups_reviews';
  try {
    await mongoose.connect(uri, { dbName: 'capstone_db' });
    console.log('Connected to MongoDB');

    const server = http.createServer(app);

    // Try listening on configured port; if in use, try successive ports up to a limit.
    async function listenWithRetry(startPort, attempts = 10) {
      let port = startPort;
      for (let i = 0; i < attempts; i++) {
        try {
          await new Promise((resolve, reject) => {
            server.once('error', reject);
            server.listen(port, () => {
              server.removeListener('error', reject);
              resolve();
            });
          });
          console.log('Server listening on port', port);
          return port;
        } catch (err) {
          if (err && err.code === 'EADDRINUSE') {
            console.warn(`Port ${port} is in use; trying port ${port + 1}...`);
            port += 1;
            // small delay before retrying
            await new Promise((r) => setTimeout(r, 200));
            continue;
          }
          // unknown error while trying to listen
          throw err;
        }
      }
      throw new Error(`Unable to bind server after ${attempts} attempts starting at port ${startPort}`);
    }

    listenWithRetry(PORT, 20).catch((err) => {
      console.error(err.message || err);
      console.error(`If you prefer a specific port, set PORT in your .env file.`);
      process.exit(1);
    });

    // Graceful shutdown on signals
    const shutdown = (signal) => {
      console.log(`Received ${signal}. Closing server...`);
      server.close(() => {
        mongoose.connection.close(false, () => {
          console.log('MongoDB connection closed. Exiting.');
          process.exit(0);
        });
      });
    };
    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));

  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
}

// global handlers for visibility
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

start();
