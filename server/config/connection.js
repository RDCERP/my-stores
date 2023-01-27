import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log('mongod', process.env.MONGODB_URI);
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/my-stores',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export default mongoose.connection;
