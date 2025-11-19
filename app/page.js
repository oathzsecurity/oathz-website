export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        backgroundImage: "radial-gradient(circle at center, #111 0%, #000 70%)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0 20px",
        textAlign: "center",
        animation: "fadeInBackground 1.5s ease-out forwards",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInBackground {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .title {
          animation: fadeIn 1s ease-out forwards;
        }

        .subtitle {
          animation: fadeIn 1.25s ease-out forwards;
        }

        .tagline {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>

      {/* OATHZ Title */}
      <h1
        className="title"
        style={{
          fontFamily: "'Saira Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "115px",
          letterSpacing: "4px",
          margin: "0 0 16px 0",
          color: "white",
        }}
      >
        O.A.T.H.Z
      </h1>

      {/* Slogan */}
      <h2
        className="subtitle"
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
        className="tagline"
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


