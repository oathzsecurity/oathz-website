export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0 20px",
        textAlign: "center",
      }}
    >
      {/* OATHZ Title */}
      <h1
        style={{
          fontFamily: "'Saira Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "150px",
          letterSpacing: "4px",
          margin: "0 0 16px 0",
          color: "white",
        }}
      >
        O.A.T.H.Z
      </h1>

      {/* Slogan */}
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "40px",
          color: "#EAEAEA",
          margin: "0 0 32px 0",
        }}
      >
        Smart. Secure.
      </h2>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 300,
          fontSize: "30px",
          color: "#BFBFBF",
          maxWidth: "600px",
          lineHeight: "1.5",
        }}
      >
         Tool Theft Recovery.
      </p>
    </main>
  );
}

