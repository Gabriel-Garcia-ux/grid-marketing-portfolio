import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./GridBio.module.css";

export const metadata: Metadata = {
  title: "Grid Marketing | Links Oficiais",
  description:
    "Acesse todos os links oficiais da Grid Marketing e Gabriel Garcia: WhatsApp direto, Portfólio de Vídeos, Instagram, YouTube e E-mail.",
  openGraph: {
    title: "Grid Marketing | Links Oficiais",
    description: "Edição de Vídeo • Design • Sites • Growth Marketing",
    url: "https://grid-marketing-woad.vercel.app/grid",
  },
};

export default function GridBioPage() {
  const links = [
    {
      id: "whatsapp",
      title: "FALE COMIGO NO WHATSAPP",
      subtitle: "Solicite um orçamento rápido e direto",
      url: "https://wa.me/5555992159647?text=Ol%C3%A1%2C%20Gabriel!%20Vim%20pelo%20link%20da%20bio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20edi%C3%A7%C3%A3o%20de%20v%C3%ADdeo.",
      isPrimary: true,
      badge: "DISPONÍVEL",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      id: "portfolio",
      title: "PORTFÓLIO COMPLETO NO SITE",
      subtitle: "Explore 28+ produções, Nomad, Ray-Ban Meta e mais",
      url: "/",
      isPrimary: false,
      badge: "OFICIAL",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
          <line x1="7" y1="2" x2="7" y2="22" />
          <line x1="17" y1="2" x2="17" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="2" y1="7" x2="7" y2="7" />
          <line x1="2" y1="17" x2="7" y2="17" />
          <line x1="17" y1="17" x2="22" y2="17" />
          <line x1="17" y1="7" x2="22" y2="7" />
        </svg>
      ),
    },
    {
      id: "instagram",
      title: "INSTAGRAM OFICIAL",
      subtitle: "@gridmarketingoficial • Bastidores e edições diárias",
      url: "https://www.instagram.com/gridmarketingoficial/?hl=pt-br",
      isPrimary: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      id: "youtube",
      title: "CANAL NO YOUTUBE",
      subtitle: "Vídeos em alta definição, Shorts e cases",
      url: "https://www.youtube.com/@Gridmarketingoficial",
      isPrimary: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "email",
      title: "E-MAIL COMERCIAL",
      subtitle: "gabrielgarciacontato01@gmail.com",
      url: "mailto:gabrielgarciacontato01@gmail.com",
      isPrimary: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      ),
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        {/* Cabeçalho do Perfil */}
        <header className={styles.profileHeader}>
          <div className={styles.avatarWrapper}>
            <Image
              src="/images/gabriel-portrait.jpg"
              alt="Gabriel Garcia"
              width={112}
              height={112}
              className={styles.avatarImg}
              priority
            />
            <span className={styles.statusIndicator} title="Disponível para novos projetos" />
          </div>

          <h1 className={styles.profileName}>
            <span className={styles.dropCap}>G</span>ABRIEL GARCIA
          </h1>

          <div className={styles.brandBadge}>GRID MARKETING</div>

          <p className={styles.profileBio}>
            Direção de Arte, Edição de Vídeo Comercial e Estratégia Visual que transforma atenção em valor.
          </p>
        </header>

        {/* Lista de Botões de Links */}
        <main className={styles.linksList}>
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`${styles.linkCard} ${link.isPrimary ? styles.primaryCard : ""}`}
            >
              <div className={styles.cardIconWrapper}>{link.icon}</div>

              <div className={styles.cardTextContent}>
                <div className={styles.cardTitleRow}>
                  <span className={styles.cardTitle}>{link.title}</span>
                  {link.badge && <span className={styles.cardBadge}>{link.badge}</span>}
                </div>
                <span className={styles.cardSubtitle}>{link.subtitle}</span>
              </div>

              <div className={styles.arrowIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </a>
          ))}
        </main>

        {/* Mini Card de Apresentação em Vídeo */}
        <div className={styles.featuredVideoCard}>
          <div className={styles.videoCardHeader}>
            <span className={styles.videoCardTag}>VÍDEO DE APRESENTAÇÃO</span>
            <span className={styles.videoCardStatus}>▶ OFICIAL</span>
          </div>
          <a
            href="https://youtu.be/fF3gGSyuxYA"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.videoThumbnailLink}
          >
            <div className={styles.videoPlayOverlay}>
              <div className={styles.playCircle}>▶</div>
              <span>ASSISTIR INTRODUÇÃO</span>
            </div>
            <Image
              src="/imagens de obras para o background/imagens pro site/ChatGPT Image 1 de set. de 2026, 23_52_27.png"
              alt="Grid Marketing Vídeo"
              fill
              className={styles.videoThumbImg}
            />
          </a>
        </div>

        {/* Rodapé Elegante */}
        <footer className={styles.pageFooter}>
          <Link href="/" className={styles.siteLink}>
            ACESSAR SITE COMPLETO →
          </Link>
          <span className={styles.copyrightText}>
            © {new Date().getFullYear()} GRID MARKETING • TODOS OS DIREITOS RESERVADOS
          </span>
        </footer>
      </div>
    </div>
  );
}
