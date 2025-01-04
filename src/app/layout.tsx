import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/constants";
import StyledComponentsRegistry from "../../registry";

export const metadata: Metadata = {
  title: "DTRACKER",
  description:
    "Explore an all-in-one platform designed to simplify waste management, empower local agents, and foster a greener planet. From tracking waste to creating economic opportunities, DTRACKER transforms the way individuals and businesses handle recycling and sustainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
