// const express = require ( 'express');
// const bodyParser = require ( 'body-parser');
// const cors = require ( 'cors');
// const dotenv = require ( 'dotenv');
// const multer = require ( 'multer');
// const helmet = require ( 'helmet');
// const morgan = require ( 'morgan');
// const path = require ( 'path');
// const { fileURLToPath } = require ( 'url');
// const { ApolloServer } = require ( 'apollo-server-express');
// const authRoutes = require ( './routes/auth.js');
// const userRoutes = require ( './routes/users.js');
// const postRoutes = require ( './routes/posts.js');
// // const { typeDefs, resolvers } = require ( './schemas/index.js';
// const typeDefs = require ( './schemas/typeDefs.js');
// const resolvers = require ( './schemas/resolvers.js');

// const { register } = require ( './controllers/auth.js');
// const { createPost } = require ( './controllers/posts.js');
// const { verifyToken } = require ( './controllers/middleware/auth.js');

// const db = require ( './config/connection.js');

// const PORT = process.env.PORT || 3001;
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: verifyToken,
// });

// // const User = require ( './models/User.js';
// // const Post = require ( './models/Post.js';
// // const { users, posts } = require ( './data/index.js';

// /* CONFIGURATIONS */
// // const __filename = fileURLToPath(const.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
// app.use(morgan('common'));
// app.use(bodyParser.json({ limit: '30mb', extended: true }));
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// app.use(cors());
// // !In a production, this would be a cloud storage like AWS3
// app.use('/assets', express.static(path.join(__dirname, 'public/assets'))); // this is saved locally

// /* FILE STORAGE */
// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, 'public/assets');
//   },
//   filename(req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage });

// /* ROUTES WITH FILES */
// app.post('/auth/register', upload.single('picture'), register);
// app.post('/posts', verifyToken, upload.single('picture'), createPost);

// /* ROUTES */
// // app.use('/auth', authRoutes);
// // app.use('/users', userRoutes);
// // app.use('/posts', postRoutes);

// // Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// // Create a new instance of an Apollo server with the GraphQL schema
// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();
//   server.applyMiddleware({ app });

//   // Start the API server
//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(
//         `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
//       );
//     });
//   });
// };

// startApolloServer(typeDefs, resolvers);

// // /* MONGOOSE SETUP */
// // const PORT = process.env.PORT || 6001;
// // mongoose
// //   .connect(process.env.MONGO_URL, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => {
// //     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

// //     /* ADD DATA ONE TIME */
// //     // User.insertMany(users);
// //     // Post.insertMany(posts);
// //   })
// //   .catch((error) => console.log(`${error} did not connect`));
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
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

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
