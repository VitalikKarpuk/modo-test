import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SITE } from "@/app/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

/**
 * Resolve the canonical URL for OG/Twitter meta. Priority:
 * 1. NEXT_PUBLIC_SITE_URL — explicit override (set on real production)
 * 2. VERCEL_PROJECT_PRODUCTION_URL — Vercel project's production hostname
 * 3. VERCEL_URL — any Vercel deployment (preview, branch, etc.)
 * 4. SITE.url — local dev / fallback
 *
 * This ensures shared links from Vercel-deployed previews resolve OG images
 * against the actual deployment host instead of a stale hardcoded domain.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : SITE.url);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} — The ground-truth data layer for institutional finance`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Canton",
    "blockchain explorer",
    "Daml",
    "institutional finance",
    "private explorer",
    "Web3 infrastructure",
    "agentic API",
    "Historic API",
    "Modo API",
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} — The ground-truth data layer for institutional finance`,
    description: SITE.description,
    url: siteUrl,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — The ground-truth data layer`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/logoIcon.svg",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#020309",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply persisted theme before paint to avoid FOUC. Default = dark. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('modo-theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-bg text-fg font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
