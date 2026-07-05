import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  (process.env.NODE_ENV === "production" ? "" : "mongodb://localhost:27017/rajasthan-emporium");

type CachedConnection = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalWithMongoose = global as typeof globalThis & {
  mongooseCache?: CachedConnection;
};

const cached = globalWithMongoose.mongooseCache || { conn: null, promise: null };
globalWithMongoose.mongooseCache = cached;

export async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is required. Add your MongoDB Atlas connection string to the environment.");
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}
