export const metadata = {
  title: "OATHZ",
  description: "Smart. Secure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
