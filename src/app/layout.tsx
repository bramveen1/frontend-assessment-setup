import type { ReactNode } from "react";
import "./globals.css";

export const metadata = { title: "Interview setup check" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-background p-8 font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
