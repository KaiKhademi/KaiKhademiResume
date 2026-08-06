import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "Kai Khademi | Software Developer",
    description: "Portfolio website of Kai Khademi.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}