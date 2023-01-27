import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs, resolvers } from './schemas/index.js';
import { register, login } from './controllers/auth.js';
import { createPost } from './controllers/posts.js';
import { authMiddleware } from './utils/auth.js';

import db from './config/connection.js';

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
// !In a professional production, this would be a cloud storage service like AWS S3
app.use(express.static(path.join(__dirname, 'public/assets')));

// FILE STORAGE
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// ROUTES WITH FILES
app.post('/auth/register', upload.single('picture'), register);
app.post('/auth/login', login);
app.post('/posts', authMiddleware, upload.single('picture'), createPost);

// SERVE UP STATIC ASSETS
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
