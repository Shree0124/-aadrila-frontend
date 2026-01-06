
import "./globals.css";
export const metadata = {
  title: "Aadrila AI",
  description: "AI Powered Document Automation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
