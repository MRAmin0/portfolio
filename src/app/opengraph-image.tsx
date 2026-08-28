import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Amin Monajati — Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#050505",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: 28 }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#3b82f6" }} />
          amin@portfolio:~
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: "-4px" }}>
            Amin Monajati
          </div>
          <div style={{ marginTop: 18, fontSize: 34, color: "#a3a3a3" }}>
            Backend Developer · Python · Django · FastAPI
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#737373" }}>
          amin-monajati.vercel.app
        </div>
      </div>
    ),
    size
  );
}
