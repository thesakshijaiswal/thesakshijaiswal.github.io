import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sakshi.is-cool.dev"),
  title: {
    default: "Sakshi Jaiswal | FullStack Developer",
    template: "%s | Sakshi Jaiswal",
  },
  description:
    "Building fast, accessible, and SEO-friendly web experiences with modern tools like React, Next.js, and Node.js.",
  keywords: [
    "Sakshi Jaiswal",
    "Next.js Portfolio",
    "Sakshi",
    "FullStack Developer",
  ],
  twitter: {
    card: "summary_large_image",
  },
  authors: [{ name: "Sakshi Jaiswal" }],
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/sakshi_logo.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Sakshi Jaiswal | FullStack Developer",
    capable: true,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="iAJqewy064ZkValJ2PJCioCthb5JYn0L_JZc5aZpsqw"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme') || 'system';
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (stored === 'system' && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
