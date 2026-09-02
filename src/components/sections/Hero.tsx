"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/content/site-content";
import HeroEditionsGrid from "./HeroEditionsGrid";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mastheadRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Masthead parallax
      gsap.to(mastheadRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Entrada do retrato
      gsap.from(portraitRef.current, {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });

      // Entrada dos serviços em stagger
      gsap.from(servicesRef.current?.querySelectorAll("span") ?? [], {
        opacity: 0,
        y: 15,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className={styles.hero}
      aria-label="Seção inicial — Grid Marketing"
    >
      {/* Imagem de Fundo Artística Integrada */}
      <div className={styles.bgWrapper} aria-hidden="true">
        <Image
          src="/imagens de obras para o background/imagens pro site/ChatGPT Image 1 de set. de 2026, 23_52_27.png"
          alt=""
          fill
          className={styles.bgImage}
          priority
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Grid editorial 12 colunas */}
        <div className={styles.grid}>
          {/* Coluna A: Retrato */}
          <div ref={portraitRef} className={styles.portraitCol}>
            <div className={styles.portraitFrame}>
              <Image
                src="/images/gabriel-portrait.jpg"
                alt="Retrato de Gabriel Garcia, editor de vídeo e designer da Grid Marketing."
                width={480}
                height={600}
                className={styles.portrait}
                priority
              />
              {/* Linha de rodapé do retrato */}
              <div className={styles.portraitCaption}>
                <p className={styles.captionName}>{siteContent.authorName}</p>
                <p className={styles.captionMeta}>
                  {siteContent.authorAge} anos • {siteContent.yearsExperience} anos de experiência
                </p>
                <p className={styles.captionRole}>
                  Editor de vídeo, designer gráfico e estrategista
                </p>
              </div>
            </div>
          </div>

          {/* Coluna B: Título editorial + galeria */}
          <div className={styles.contentCol}>
            {/* Badge */}
            <div className={styles.badge}>
              <span className="badge">PORTFÓLIO CRIATIVO — EDIÇÃO Nº 01</span>
            </div>

            {/* Grande chamada editorial */}
            <div className={styles.callout}>
              <h1 className={styles.calloutTitle}>MINHAS EDIÇÕES</h1>
              <p className={styles.calloutText}>
                {siteContent.bioHeadline}
              </p>
            </div>

            {/* Grid de 4 edições com modal */}
            <HeroEditionsGrid />
          </div>
        </div>

        {/* Linha divisória */}
        <div className={styles.divider} />

        {/* Lista de atuação */}
        <div ref={servicesRef} className={styles.servicesList}>
          {siteContent.hero.servicesList.map((svc, i) => (
            <span key={i} className={styles.service}>
              {svc}
            </span>
          ))}
        </div>

        {/* Divisória */}
        <div className={styles.divider} />
      </div>

      {/* Masthead monumental */}
      <div className={styles.mastheadWrapper}>
        <h2 ref={mastheadRef} className={styles.masthead} aria-label="Grid Marketing">
          GRID<br className={styles.mobileBreak} />
          <span className={styles.mastheadSecond}>MARKETING</span>
        </h2>
      </div>

      {/* Scroll hint */}
      <p className={styles.scrollHint} aria-hidden="true">
        {siteContent.hero.tagline}
      </p>
    </section>
  );
}
