import 'dotenv/config';
import mongoose from 'mongoose';

const password = encodeURIComponent(process.env.MONGO_PASSWORD);
const username = process.env.MONGO_USER;
const cluster = process.env.MONGO_CLUSTER;
const database = process.env.MONGO_DB;
const appName = process.env.MONGO_APPNAME;

const dbConfig = `mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority&appName=${appName}`;

try {
  await mongoose.connect(dbConfig);
  console.log('MongoDB connected');
} catch (err) {
  console.error('MongoDB connection error:', err);
}

export default mongoose;