import { siteContent } from "@/content/site-content";
import styles from "./Footer.module.css";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

const allTools = [
  "EDIÇÃO",
  "DESIGN",
  "WEB",
  "GROWTH",
  "IA",
  "NARRATIVA",
  "DIREÇÃO VISUAL",
  "MOTION",
  "CREATIVE CODING",
];

const hasLinkedin =
  siteContent.socials.linkedinUrl !== "REPLACE_WITH_LINKEDIN_URL";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Faixa de texto contínua — loop infinito */}
      <div className={styles.tickerWrapper} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[...allTools, ...allTools, ...allTools].map((t, i) => (
            <span key={i}>{t} &nbsp;·&nbsp; </span>
          ))}
        </div>
      </div>

      <div className={styles.main}>
          <div className={styles.grid}>
            {/* Coluna marca */}
            <div className={styles.brand}>
              <p className={styles.brandName}>GRID</p>
              <p className={styles.brandAuthor}>{siteContent.authorName}</p>

              <p className={styles.brandTagline}>
                Edição, design, web e estratégia
              </p>
            </div>

            {/* Coluna links */}
            <nav aria-label="Links do rodapé">
              <ul className={styles.navList}>
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={styles.navLink}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Coluna social */}
            <div className={styles.social}>
              <p className={styles.socialLabel}>REDES</p>
              <a
                href={siteContent.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Instagram — {siteContent.socials.instagram.handle}
              </a>
              {hasLinkedin ? (
                <a
                  href={siteContent.socials.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  LinkedIn — Gabriel Garcia
                </a>
              ) : (
                <span className={styles.socialDisabled}>
                  LinkedIn — a adicionar
                </span>
              )}
            </div>
          </div>

          <div className={styles.bottom}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} GRID — Todos os
              direitos reservados. Direção criativa:{" "}
              {siteContent.authorName}.
            </p>
            <a href="#inicio" className={styles.topBtn} aria-label="Voltar ao topo">
              ↑ TOPO
            </a>
          </div>
      </div>

    </footer>
  );
}
