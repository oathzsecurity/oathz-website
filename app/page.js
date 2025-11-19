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

        .title { animation: fadeIn 1s ease-out forwards; }
        .subtitle { animation: fadeIn 1.25s ease-out forwards; }
        .tagline { animation: fadeIn 1.5s ease-out forwards; }
        .notify { animation: fadeIn 1.75s ease-out forwards; }
      `}</style>

      {/* --- TITLE --- */}
      <h1
        className="title"
        style={{
          fontFami
