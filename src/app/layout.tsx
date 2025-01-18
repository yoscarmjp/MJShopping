import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MJShopping",
  description: "MJ Products Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
        <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
        <link rel="shortcut icon" href="/images/MJLogo.png" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
    
  );
}
