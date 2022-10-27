import Navbar from "./navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
