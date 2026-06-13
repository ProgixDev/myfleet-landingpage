import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_NAME, SITE_TAGLINE, SITE_TITLE } from "./lib/site";

export const alt = SITE_TITLE;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // process.cwd() is the Next.js project directory.
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#4c1d95",
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, #6d28d9 0%, #4c1d95 60%, #2e1065 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "220px",
            height: "220px",
            borderRadius: "48px",
            backgroundColor: "#ffffff",
            marginBottom: "56px",
          }}
        >
          <img src={logoSrc} alt={SITE_NAME} width={170} height={170} />
        </div>
        <div
          style={{
            fontSize: "96px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: "40px",
            fontWeight: 600,
            marginTop: "24px",
            color: "#e9d5ff",
            textAlign: "center",
          }}
        >
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
