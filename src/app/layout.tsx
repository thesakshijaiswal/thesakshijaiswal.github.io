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
  title: "Sakshi Jaiswal",
  description: "My personal portfolio website!",
  keywords: ["portfolio", "web developer", "Sakshi Jaiswal"],
  authors: [{ name: "Sakshi Jaiswal" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Sakshi Jaiswal - Portfolio",
    description: "My personal portfolio website!",
    type: "website",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getTheme() {
                  const stored = localStorage.getItem('theme');
                  if (stored === 'light' || stored === 'dark') return stored;
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    return 'dark';
                  }
                  return 'light';
                }
                
                const theme = getTheme();
                const root = document.documentElement;
                
                if (theme === 'dark') {
                  root.classList.add('dark');
                  root.setAttribute('data-theme', 'dark');
                } else {
                  root.classList.remove('dark');
                  root.setAttribute('data-theme', 'light');
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
