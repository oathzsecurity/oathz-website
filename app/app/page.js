export default function HomePage() {
  return (
    <main
      style={{
        height: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1 style={{ fontSize: "64px", fontWeight: "bold", letterSpacing: "4px" }}>
        OATHZ
      </h1>

      <h2 style={{ fontSize: "24px", marginTop: "10px", color: "#aaa" }}>
        Smart. Secure.
      </h2>

      <p style={{ marginTop: "30px", fontSize: "20px", maxWidth: "600px", lineHeight: "1.5" }}>
        A revolution in theft recovery is coming soon.
      </p>
    </main>
  );
}
