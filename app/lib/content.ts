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
  | "ports";

export type NetworkSlug =
  | "canton"
  | "sui"
  | "walrus"
  | "silvana"
  | "ika"
  | "iota"
  | "mina"
  | "zeko";

export type Product = {
  idx: string;
  title: string;
  tagline: string;
  href: string;
  networks: NetworkSlug[];
  iconKey: ProductIconKey;
  featured?: boolean;
};

const PUBLIC_EXPLORER_NETS: NetworkSlug[] = [
  "canton",
  "sui",
  "walrus",
  "silvana",
  "ika",
  "iota",
  "mina",
  "zeko",
];

const SUPERAPP_AND_API_NETS: NetworkSlug[] = [
  "canton",
  "sui",
  "walrus",
  "iota",
  "mina",
];

export const PRODUCTS: Product[] = [
  {
    idx: "01",
    title: "Public Explorer",
    tagline:
      "Discover on-chain activity, ecosystem, and public data in one place.",
    href: "https://cc.modo.link/mainnet/home",
    networks: PUBLIC_EXPLORER_NETS,
    iconKey: "overlap",
    featured: true,
  },
  {
    idx: "02",
    title: "Private Explorer",
    tagline:
      "Monitor your business activity on Canton through a personalized workspace.",
    href: "https://private-demo.modo.link/",
    networks: ["canton"],
    iconKey: "vault",
  },
  {
    idx: "03",
    title: "Super-App",
    tagline:
      "Access a unified interface for Modo products and carry out daily operations.",
    href: "https://app.modo.link/",
    networks: SUPERAPP_AND_API_NETS,
    iconKey: "grid",
  },
  {
    idx: "04",
    title: "API",
    tagline:
      "Build on a single API layer designed for production-ready apps.",
    href: "https://docs.modo.link/",
    networks: SUPERAPP_AND_API_NETS,
    iconKey: "ports",
  },
];

export type Explorer = {
  slug: string;
  name: string;
  network: string;
  role: string;
  access: "Public" | "Private";
  host: string;
  href: string;
  native?: boolean;
};

export const EXPLORERS: Explorer[] = [
  {
    slug: "modo-cc-public",
    name: "Modo CC",
    network: "Canton Network",
    role: "Public Canton explorer",
    access: "Public",
    host: "cc.modo.link/mainnet",
    href: "https://cc.modo.link/mainnet/home",
    native: true,
  },
  {
    slug: "modo-cc-private",
    name: "Modo CC Private",
    network: "Canton Network",
    role: "Private Canton workspace",
    access: "Private",
    host: "private-demo.modo.link",
    href: "https://private-demo.modo.link/",
  },
  {
    slug: "suiscan",
    name: "Suiscan",
    network: "Sui",
    role: "High-performance blockchain",
    access: "Public",
    host: "suiscan.xyz",
    href: "https://suiscan.xyz/",
  },
  {
    slug: "walruscan",
    name: "Walruscan",
    network: "Walrus",
    role: "DA + Storage on Sui",
    access: "Public",
    host: "walruscan.com",
    href: "https://walruscan.com/",
  },
  {
    slug: "ikascan",
    name: "Ikascan",
    network: "Ika",
    role: "Multichain control layer",
    access: "Public",
    host: "ikascan.io/mainnet",
    href: "https://ikascan.io/mainnet/home",
  },
  {
    slug: "iotascan",
    name: "Iotascan",
    network: "IOTA",
    role: "Decentralized blockchain infrastructure",
    access: "Public",
    host: "iotascan.com",
    href: "https://iotascan.com/",
  },
  {
    slug: "minascan",
    name: "Minascan",
    network: "Mina",
    role: "Lightweight succinct blockchain",
    access: "Public",
    host: "minascan.io",
    href: "https://minascan.io/",
  },
  {
    slug: "zekoscan",
    name: "Zekoscan",
    network: "Zeko",
    role: "L2 for Mina's zkApps",
    access: "Public",
    host: "zekoscan.io",
    href: "https://zekoscan.io/",
  },
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
      { label: "API", href: "https://docs.modo.link/" },
    ],
  },
  {
    title: "Explorers",
    items: [
      { label: "Modo CC", href: "https://cc.modo.link/mainnet/home" },
      { label: "Suiscan", href: "https://suiscan.xyz/" },
      { label: "Walruscan", href: "https://walruscan.com/" },
      { label: "Ikascan", href: "https://ikascan.io/mainnet/home" },
      { label: "All explorers", href: "/#explorers" },
    ],
  },
  {
    title: "Modo",
    items: [
      { label: "Docs", href: "https://docs.modo.link/" },
    ],
  },
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
