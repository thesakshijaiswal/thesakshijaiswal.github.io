import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

     if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }
    
    const fullName = `${firstName} ${lastName || ""}`.trim();

   const html = `
  <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f6f8; padding: 32px 16px; display: flex; justify-content: center;">
    <div style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); padding: 32px; color: #1a1a1a;">
      <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px; color: #111;">You have received a New Message from your Prettyfolio 🌸</h1>
    </div>
  </div>
`;

    await resend.emails.send({
      from: `${fullName} <onboarding@resend.dev>`,
      to: "thesakshijaiswal@outlook.com",
      replyTo: email,
      subject: `New message from ${fullName} via Prettyfolio`,
      html,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
