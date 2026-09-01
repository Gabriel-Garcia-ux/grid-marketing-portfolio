"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteContent } from "@/content/site-content";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const headerHeight = headerRef.current?.offsetHeight ?? 60;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Intersection observer for active link
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.replace("#", "")))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        role="banner"
      >
        <div className={styles.inner}>
          {/* Marca */}
          <div className={styles.brand}>
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection("#inicio"); }} className={styles.brandLink}>
              <span className={styles.brandName}>GRID</span>
              <span className={styles.brandSub}>PORTFÓLIO CRIATIVO</span>
            </a>
          </div>


          {/* Nav desktop */}
          <nav className={styles.nav} aria-label="Navegação principal">
            <ul className={styles.navList}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`${styles.navLink} ${activeSection === l.href.replace("#", "") ? styles.active : ""}`}
                    aria-current={activeSection === l.href.replace("#", "") ? "page" : undefined}
                    onClick={(e) => { e.preventDefault(); scrollToSection(l.href); }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA e menu burger */}
          <div className={styles.actions}>
            <a
              href="#contato"
              className={styles.ctaBtn}
              onClick={(e) => { e.preventDefault(); scrollToSection("#contato"); }}
            >
              CONTATO
            </a>
            <button
              className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Linha inferior do header */}
        <div className={styles.headerLine} />
      </header>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Menu de navegação"
      >
        <nav aria-label="Menu mobile">
          <ul className={styles.mobileNavList}>
            {navLinks.map((l, i) => (
              <li key={l.href} style={{ animationDelay: `${0.05 * i}s` }}>
                <a
                  href={l.href}
                  className={styles.mobileNavLink}
                  onClick={(e) => { e.preventDefault(); scrollToSection(l.href); }}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span className={styles.mobileNavNum}>{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileFooter}>
            <a href={siteContent.socials.instagram.url} target="_blank" rel="noopener noreferrer" className={styles.mobileSocial} tabIndex={menuOpen ? 0 : -1}>
              {siteContent.socials.instagram.handle}
            </a>
          </div>
        </nav>
      </div>

      {/* Overlay mobile */}
      {menuOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
