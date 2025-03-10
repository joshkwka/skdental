import "@/app/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/images/favicon/apple-touch-icon.png" />
        <meta property="og:title" content="S K Dental Ceramic Studio" /> 
        <meta
          property="og:description"
          content="S K Dental Ceramic Studio specializes in crafting Crowns & Bridges, Implants, and Night Guards"
        />
        <meta property="og:image" content="/images/metaphoto.jpg" />
        <meta property="og:url" content="https://www.skdentalceramic.com" />
        <meta property="og:type" content="website" />
        <title>S K Dental</title> 
        <meta
          name="description"
          content="S K Dental Ceramic Studio specializes in crafting high-quality cosmetic dental appliances, such as: Crowns & Bridges, Implants, and Night Guards"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
