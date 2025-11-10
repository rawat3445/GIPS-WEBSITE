import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required" }),
        { status: 400 }
      );
    }

    const newMessage = await Contact.create({ name, email, subject, message });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully",
        data: newMessage,
      }),
      { status: 201 }
    );
    
  } catch (err) {
    console.error("Contact Form Error:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Something went wrong" }),
      { status: 500 }
    );
  }
}
