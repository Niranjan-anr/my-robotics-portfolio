// app/api/send-email/route.ts
import EmailJS from "@emailjs/nodejs";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { from_name, from_email, message } = await request.json();

    if (!from_name || !from_email || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await EmailJS.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        from_name,
        from_email,
        message,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,   // optional, but recommended
        privateKey: process.env.EMAILJS_PRIVATE_KEY, // ← THIS IS THE IMPORTANT ONE
      }
    );

    return Response.json({ success: true });
  } catch (error: any) {
    console.error("EmailJS error:", error);
    return Response.json(
      { error: error.text || "Failed to send email" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic"; // if using App Router caching