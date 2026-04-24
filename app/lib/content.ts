/**
 * Site content. Kept separate from rendering so copy can be edited
 * without touching layout. Icons are referenced by key and resolved
 * at render time (see app/components/icons.tsx).
 */

export type Partner = { slug: string; name: string; href: string };

export const PARTNERS: Partner[] = [
  { slug: "canton", name: "Canton", href: "https://canton.network" },
  { slug: "sui", name: "Sui", href: "https://sui.io" },
  { slug: "walrus", name: "Walrus", href: "https://walrus.site" },
  { slug: "ika", name: "Ika", href: "https://ika.xyz" },
  { slug: "mina", name: "Mina", href: "https://minaprotocol.com" },
  { slug: "iota", name: "IOTA", href: "https://iota.org" },
  { slug: "silvana", name: "Silvana", href: "https://silvana.one" },
  {
    slug: "digital-asset",
    name: "Digital Asset",
    href: "https://digitalasset.com",
  },
  {
    slug: "mysten-labs",
    name: "Mysten Labs",
    href: "https://mystenlabs.com",
  },
  {
    slug: "canton-foundation",
    name: "Canton Foundation",
    href: "https://cantonfoundation.org",
  },
];

export type ProductIconKey =
  | "overlap"
  | "vault"
  | "grid"
  | "wallet"
  | "ports";

export type Product = {
  idx: string;
  title: string;
  tagline: string;
  bullets: string[];
  href: string;
  iconKey: ProductIconKey;
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    idx: "01",
    title: "Public Explorer",
    tagline:
      "Canton-native explorer for contracts, parties, tokens and validators.",
    bullets: [
      "Aggregated stats across subnets",
      "Historical data retention",
      "Free for anyone",
    ],
    href: "https://cc.modo.link/mainnet/home",
    iconKey: "overlap",
    featured: true,
  },
  {
    idx: "02",
    title: "Private Explorer",
    tagline:
      "Personalized workspace on your validator. Private contracts, tokens, transfers — labelled.",
    bullets: [
      "Scoped to your party",
      "Advanced labeling & compliance",
      "Switch public ↔ private view",
    ],
    href: "https://private-demo.modo.link/",
    iconKey: "vault",
  },
  {
    idx: "03",
    title: "Super-App",
    tagline:
      "Unified login across every Modo surface. One identity, every tool.",
    bullets: [
      "Single sign-on",
      "Portfolio & transfers",
      "Cross-product workflows",
    ],
    href: "https://app.modo.link/",
    iconKey: "grid",
  },
  {
    idx: "04",
    title: "Wallet",
    tagline: "Custody with DvP settlement and signed audit trails.",
    bullets: [
      "Delivery-versus-payment",
      "Recurring payments",
      "Signed export logs",
    ],
    href: "#",
    iconKey: "wallet",
  },
  {
    idx: "05",
    title: "Modo API",
    tagline:
      "Historic, real-time and agentic endpoints on one normalized schema.",
    bullets: [
      "gRPC · REST · WebSocket",
      "Ed25519-signed agent calls",
      "Atomic batch & bridge ops",
    ],
    href: "https://docs.modo.link/",
    iconKey: "ports",
  },
];

export type Shot = {
  num: string;
  name: string;
  italic: string;
  rest: string;
  url: string;
  href: string;
  file: string;
  desc: string;
  align: "right" | "left";
  badge?: "LIVE" | "PRIVATE";
};

export const SHOTS: Shot[] = [
  {
    num: "01",
    name: "Public Explorer",
    italic: "Explore",
    rest: "what's public.",
    url: "cc.modo.link/mainnet/home",
    href: "https://cc.modo.link/mainnet/home",
    file: "/screenshots/public-explorer.png",
    desc: "Aggregate stats, validators, tokens and parties across Canton — live, free, and open to anyone.",
    align: "right",
    badge: "LIVE",
  },
  {
    num: "02",
    name: "Private Explorer",
    italic: "See",
    rest: "what others can't.",
    url: "private-demo.modo.link",
    href: "https://private-demo.modo.link/",
    file: "/screenshots/private-explorer.png",
    desc: "Your party's full ledger — every contract, event and offset only visible inside your node. Labelled, audit-ready, yours alone.",
    align: "left",
    badge: "PRIVATE",
  },
  {
    num: "03",
    name: "Super-App",
    italic: "Operate",
    rest: "from one surface.",
    url: "app.modo.link",
    href: "https://app.modo.link/",
    file: "/screenshots/super-app.png",
    desc: "One identity across every Modo surface. Portfolio, subscriptions, agentic API, logs — all one click away.",
    align: "right",
  },
];

export type WhyPoint = { title: string; body: string };

export const WHY_POINTS: WhyPoint[] = [
  {
    title: "Canton-native",
    body: "Not a generic indexer adapted. Subnet-aware architecture, mirrored Daml semantics, public + private in one stack.",
  },
  {
    title: "Private-first differentiator",
    body: "What's invisible publicly becomes observable privately. Labels, compliance, internal monitoring — unavailable anywhere else.",
  },
  {
    title: "Unified, not fragmented",
    body: "One ledger, five products. Integrate once, migrate your existing explorers onto Modo, ship institutional-grade from day one.",
  },
];

export const TECH_TAGS = [
  "99.99% uptime",
  "Party-scoped auth",
  "gRPC · REST · WS",
  "CIP-56 tokens",
  "Cross-network bridge",
  "EU hosting",
  "SOC 2 ready",
];

export type FooterColumn = {
  title: string;
  items: { label: string; href: string }[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Products",
    items: [
      { label: "Public Explorer", href: "https://cc.modo.link/mainnet/home" },
      { label: "Private Explorer", href: "https://private-demo.modo.link/" },
      { label: "Super-App", href: "https://app.modo.link/" },
      { label: "Modo API", href: "https://docs.modo.link/" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Docs", href: "https://docs.modo.link/" },
      { label: "Demo 2", href: "/demo2" },
      { label: "Demo 3", href: "/demo3" },
      { label: "Changelog", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "mailto:hello@modo.link" },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "#" },
  { label: "X", href: "#" },
  { label: "Telegram", href: "#" },
];

export const SITE = {
  name: "Modo",
  tagline: "Enterprise infrastructure for the new financial stack.",
  description:
    "Public and private explorers, advanced indexing, labeling, monitoring and real-time APIs — a unified Canton-native platform for institutional finance.",
  url: "https://modo.link",
  contactEmail: "hello@modo.link",
  docsUrl: "https://docs.modo.link/",
} as const;
