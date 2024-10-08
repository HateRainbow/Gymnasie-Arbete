import "./globals.css";

export const metadata = {
  title: "AI Stock predictor statistcs",
  description: "Made by Pial and Isak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
