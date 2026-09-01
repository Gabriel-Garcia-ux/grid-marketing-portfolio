"use client";

import { siteContent } from "@/content/site-content";

interface JsonLdProps {
  linkedinUrl?: string;
}

export default function JsonLd({ linkedinUrl }: JsonLdProps) {
  const sameAs = [siteContent.socials.instagram.url];
  if (linkedinUrl) sameAs.push(linkedinUrl);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://gridmarketing.com.br/#gabriel",
        name: "Gabriel Garcia",
        jobTitle: "Editor de Vídeo, Designer Gráfico e Estrategista Digital",
        worksFor: { "@id": "https://gridmarketing.com.br/#org" },
        sameAs,
      },
      {
        "@type": "Organization",
        "@id": "https://gridmarketing.com.br/#org",
        name: "Grid Marketing",
        url: "https://gridmarketing.com.br",
        description:
          "Edição de vídeos, criação de sites, criação de imagens e growth marketing.",
        founder: { "@id": "https://gridmarketing.com.br/#gabriel" },
        sameAs,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
