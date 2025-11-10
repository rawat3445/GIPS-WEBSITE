import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Registration from "@/models/Registration";

export async function POST(req) {
  console.log("📩 API route hit — registration form submitted");

  try {
    // Connect to MongoDB
    await connectDB();
    console.log("✅ Database connected successfully");

    // Parse JSON body from request
    const body = await req.json();
    console.log("📦 Received form data:", body);

    // Create and save a new registration document
    const newRegistration = new Registration(body);
    await newRegistration.save();

    console.log("🎉 Registration saved to database!");

    // Send success response
    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("❌ Error saving form:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}

// Optional: Handle GET request to fetch registrations
export async function GET() {
  try {
    await connectDB();
    const registrations = await Registration.find().sort({ createdAt: -1 });
    return NextResponse.json(registrations);
  } catch (error) {
    console.error("❌ Error fetching registrations:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
