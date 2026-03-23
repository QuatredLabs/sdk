import "./globals.css";

export const metadata = {
  title: "Quatred",
  description: "Advancing the frontier of blockchain infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
