import { Roboto } from "next/font/google";
import "../public/globals.css";

const inter = Roboto({
  subsets: ["latin"],
  weight: "100"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
