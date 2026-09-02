"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/content/site-content";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Títulos revelados por máscara
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: "100%",
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        });
      });

      // Parágrafos em fade
      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const { about, socials } = siteContent;
  const hasLinkedin = socials.linkedinUrl !== "REPLACE_WITH_LINKEDIN_URL";

  return (
    <section id="sobre" ref={sectionRef} className={styles.about} aria-labelledby="about-heading">
      <div className="container">
        {/* Linha de topo */}
        <div className={styles.topLine}>
          <span className="badge">{about.badge}</span>
          <div className={styles.editionMark}>— EDIÇÃO ESPECIAL —</div>
        </div>

        {/* Título monumental */}
        <div className={styles.titleWrapper}>
          <div className={styles.titleMask}>
            <h2 id="about-heading" className={styles.title} data-reveal>
              {about.title.split("\n").map((line, i) => (
                <span key={i} className={styles.titleLine}>{line}</span>
              ))}
            </h2>
          </div>
        </div>

        {/* Grid editorial de conteúdo */}
        <div className={styles.contentGrid}>
          {/* Coluna principal de texto */}
          <div className={styles.textCol}>
            <p className={styles.paragraph} data-fade>
              {about.paragraphs.attention}
            </p>
            <p className={styles.paragraph} data-fade>
              {about.paragraphs.interest}
            </p>
            <p className={styles.paragraph} data-fade>
              {about.paragraphs.differentiator}
            </p>
          </div>

          {/* Coluna lateral */}
          <div className={styles.sideCol}>
            <p className={styles.paragraph} data-fade>
              {about.paragraphs.desire}
            </p>
            <p className={styles.paragraph} data-fade>
              {about.paragraphs.proof}
            </p>
            <p className={`${styles.paragraph} ${styles.paragraphHighlight}`} data-fade>
              {about.paragraphs.closing}
            </p>

            {/* Botões de ação */}
            <div className={styles.actions} data-fade>
              <a href="#portfolio" className={styles.btnPrimary}>
                EXPLORAR PORTFÓLIO
              </a>
              {hasLinkedin ? (
                <a
                  href={socials.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnSecondary}
                >
                  VER TRAJETÓRIA NO LINKEDIN
                </a>
              ) : (
                <span className={styles.btnDisabled}>LINKEDIN A ADICIONAR</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
