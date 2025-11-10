import mongoose from "mongoose";

export async function connectDB() {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("🟡 Using existing MongoDB connection");
      return;
    }

    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "gips_college",
    });

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
  }
}
