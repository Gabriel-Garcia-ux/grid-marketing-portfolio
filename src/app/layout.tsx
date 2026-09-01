import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/content/site-content";
import JsonLd from "@/components/ui/JsonLd";

const linkedinUrl =
  siteContent.socials.linkedinUrl !== "REPLACE_WITH_LINKEDIN_URL"
    ? siteContent.socials.linkedinUrl
    : undefined;

export const metadata: Metadata = {
  metadataBase: new URL("https://gridmarketing.com.br"),
  title: {
    default: "Grid Marketing | Edição de Vídeo, Design, Sites e Growth",
    template: "%s | Grid Marketing",
  },
  description:
    "Portfólio de Gabriel Garcia: edição de vídeos, criação de sites e imagens, direção visual e growth marketing para marcas que querem se destacar.",
  keywords: [
    "edição de vídeo",
    "editor de vídeo",
    "motion design",
    "design gráfico",
    "criação de sites",
    "growth marketing",
    "portfólio criativo",
    "Grid Marketing",
    "Gabriel Garcia",
  ],
  authors: [{ name: "Gabriel Garcia" }],
  creator: "Gabriel Garcia",
  publisher: "Grid Marketing",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gridmarketing.com.br",
    siteName: "Grid Marketing",
    title: "Grid Marketing | Edição de Vídeo, Design, Sites e Growth",
    description:
      "Portfólio de Gabriel Garcia: edição de vídeos, criação de sites e imagens, direção visual e growth marketing para marcas que querem se destacar.",
    images: [
      {
        url: "/images/og-grid-marketing-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Grid Marketing — Portfólio Criativo de Gabriel Garcia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grid Marketing | Edição de Vídeo, Design, Sites e Growth",
    description:
      "Portfólio de Gabriel Garcia: edição de vídeos, criação de sites e imagens, direção visual e growth marketing.",
    images: ["/images/og-grid-marketing-placeholder.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Serif+Display:ital@0;1&family=Inter+Tight:wght@300;400;500;600&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />

      </head>
      <body>
        <JsonLd linkedinUrl={linkedinUrl} />
        {children}
      </body>
    </html>
  );
}
