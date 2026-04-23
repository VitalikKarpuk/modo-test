import { ImageResponse } from "next/og";
import { SITE } from "@/app/lib/content";

export const alt = `${SITE.name} — The ground-truth data layer for institutional finance`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic OG image generated at build / request time.
 * Matches the site's dark aesthetic with coral accent.
 */
export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #020309 0%, #0A0D12 50%, #171B1E 100%)",
          color: "#F7F8F8",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* coral glow */}
        <div
          style={{
            position: "absolute",
            right: -120,
            bottom: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(244,134,86,0.28), transparent 70%)",
          }}
        />

        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#F48656",
            }}
          />
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: 4,
              color: "#858B8E",
              textTransform: "uppercase",
            }}
          >
            Live · 11 networks indexed · p99 42ms
          </div>
        </div>

        {/* headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
            position: "relative",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              letterSpacing: 4,
              color: "#F48656",
              textTransform: "uppercase",
            }}
          >
            Enterprise infrastructure for the new financial stack
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1,
              letterSpacing: -4,
              fontWeight: 500,
              maxWidth: 1000,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex" }}>The ground-truth</div>
            <div style={{ display: "flex" }}>
              <span>data layer for&nbsp;</span>
              <span style={{ color: "#F48656", fontStyle: "italic" }}>
                institutional
              </span>
              <span>&nbsp;finance.</span>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 24,
            borderTop: "1px solid #1F2426",
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: 3,
            color: "#858B8E",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#F7F8F8", fontWeight: 600 }}>
            {SITE.name.toLowerCase()}.link
          </span>
          <span>Canton · Sui · Mina · IOTA · 7 more</span>
        </div>
      </div>
    ),
    size,
  );
}
