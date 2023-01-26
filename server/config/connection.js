import mongoose from 'mongoose';

const db = mongoose.createConnection(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/my-stores',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export default db;
