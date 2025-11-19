export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "72px", fontWeight: "900", letterSpacing: "8px" }}>
        OATHZ
      </h1>

      <h2 style={{ fontSize: "28px", marginTop: "-10px", opacity: 0.8 }}>
        Smart. Secure.
      </h2>

      <p style={{ marginTop: "30px", fontSize: "22px", opacity: 0.7 }}>
        A revolution in theft recovery is coming soon.
      </p>
    </main>
  );
}
