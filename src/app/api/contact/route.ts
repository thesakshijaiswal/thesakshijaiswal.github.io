import { NextResponse } from "next/server";
import {
  validateContactForm,
  escapeHtml,
} from "@/lib/contactForm.validator";


export const runtime = "nodejs";

const ALLOWED_ORIGINS = [
  "https://sakshi.is-cool.dev",
  "https://thesakshi.vercel.app",
];

function getCorsHeaders(origin: string | null) {
  const isAllowed = origin && ALLOWED_ORIGINS.includes(origin);
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : "",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(origin),
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  try {
    const { Resend } = await import("resend");

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500, headers: corsHeaders }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const validationErrors = validateContactForm(body);

    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400, headers: corsHeaders }
      );
    }
    const firstName = escapeHtml(body.firstName.trim());
    const lastName = escapeHtml(body.lastName?.trim() || "");
    const email = body.email.trim().toLowerCase();
    const message = escapeHtml(body.message.trim());


    const fullName = `${firstName} ${lastName || ""}`.trim();

    const html = `
  <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f6f8; padding: 32px 16px; display: flex; justify-content: center;">
    <div style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); padding: 32px; color: #1a1a1a;">
      <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px; color: #111;">You have received a New Message from your Prettyfolio 🌸</h1>
      <p style="font-size: 16px; color: #555; margin-bottom: 24px;">A new connection awaits your attention.</p>
    
      <div style="margin-bottom: 24px;">
        <p style="margin: 0 0 8px; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></p>
      </div>
      <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 24px 0;" />
      <div style="background-color: #f9f9f9; padding: 16px; border-radius: 8px;">
        <p style="margin: 0 0 8px; font-size: 16px; font-weight: 500;">Message:</p>
        <p style="margin: 0; font-size: 16px; white-space: pre-wrap; color: #333;">${message}</p>
      </div>
      <p style="margin-top: 32px; font-size: 14px; color: #999; text-align: center;">
        © 2025 Sakshi Jaiswal. All rights reserved.
      </p>
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

    return NextResponse.json(
      { success: true },
      { headers: corsHeaders }
    );
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: getCorsHeaders(request.headers.get("origin")) }
    );
  }
}
