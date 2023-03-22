import "../styles/globals.css";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="icon" href="../public/thirteen.svg" />
        <meta charSet="UTF-8" />
        <title>Emoji Search</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
