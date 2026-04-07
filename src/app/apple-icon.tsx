import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "hsl(174, 84%, 30%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 72,
          fontWeight: 800,
          letterSpacing: "-0.04em",
        }}
      >
        JS
      </div>
    ),
    { ...size },
  );
}
