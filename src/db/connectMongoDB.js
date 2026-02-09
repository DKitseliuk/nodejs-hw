//  src\db\connectMongoDB.js

import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    const MONGO_URL = process.env.MONGO_URL;
    await mongoose.connect(MONGO_URL);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.log('❌ Failed to connext to MongoDB', error.message);
    process.exit(1);
  }
};

export { connectMongoDB };
