"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./MinhasEdicoesV2.module.css";
import { portfolioItems } from "@/content/portfolio-items";
import { PortfolioItem } from "@/types";

interface MinhasEdicoesV2Props {
  onSelectProject?: (item: PortfolioItem) => void;
}

export default function MinhasEdicoesV2({ onSelectProject }: MinhasEdicoesV2Props) {
  const [activeFilter, setActiveFilter] = useState("TODOS");

  // Destaques reais da Versão 1
  const featured: Array<{
    id: string;
    title: string;
    category: string;
    poster: string;
    video: string;
    item: PortfolioItem;
  }> = [
    {
      id: "01",
      title: "NOMAD ECHIP",
      category: "Tech & Lifestyle",
      poster: "/imagens moldura/Nova pasta/Nomad eCHIP.png",
      video: "/videos portfolio/Nova pasta/Nomad eCHIP.mp4",
      item: {
        id: "E1",
        title: "Nomad eCHIP",
        client: "Grid Marketing",
        category: "Tech & Lifestyle",
        year: "2024",
        poster: "/imagens moldura/Nova pasta/Nomad eCHIP.png",
        video: "/videos portfolio/Nova pasta/Nomad eCHIP.mp4",
        alt: "Moldura do vídeo Nomad eCHIP",
      },
    },
    {
      id: "02",
      title: "RAYBAN META",
      category: "Produto & Fashion",
      poster: "/imagens moldura/Nova pasta/Rayban Meta.png",
      video: "/videos portfolio/Nova pasta/Rayban Meta.mp4",
      item: {
        id: "E2",
        title: "Rayban Meta",
        client: "Grid Marketing",
        category: "Produto & Fashion",
        year: "2024",
        poster: "/imagens moldura/Nova pasta/Rayban Meta.png",
        video: "/videos portfolio/Nova pasta/Rayban Meta.mp4",
        alt: "Moldura do vídeo Rayban Meta",
      },
    },
    {
      id: "03",
      title: "DO BRUTO AO PROJETO",
      category: "Bastidores & Processo",
      poster: "/imagens moldura/Nova pasta/do bruto ao projeto.png",
      video: "/videos portfolio/Nova pasta/do bruto ao projeto.mp4",
      item: {
        id: "E3",
        title: "Do Bruto ao Projeto",
        client: "Grid Marketing",
        category: "Bastidores & Processo",
        year: "2024",
        poster: "/imagens moldura/Nova pasta/do bruto ao projeto.png",
        video: "/videos portfolio/Nova pasta/do bruto ao projeto.mp4",
        alt: "Moldura do vídeo Do Bruto ao Projeto",
      },
    },
    {
      id: "04",
      title: "GRID ANÚNCIO",
      category: "Growth & Tráfego",
      poster: "/imagens moldura/novos videos/molduras/GRID ANUNCIO.png",
      video: "/videos portfolio/videos novos/GRID ANUNCIO 5.mp4",
      item: {
        id: "E4",
        title: "Grid Anúncio",
        client: "Grid Marketing",
        category: "Growth & Tráfego",
        year: "2024",
        poster: "/imagens moldura/novos videos/molduras/GRID ANUNCIO.png",
        video: "/videos portfolio/videos novos/GRID ANUNCIO 5.mp4",
        alt: "Moldura do vídeo Grid Anúncio",
      },
    },
  ];

  return (
    <section id="minhas-edicoes" className={styles.section}>
      <div className={styles.titleContainer}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.dropCapBox}>M</span>INHAS EDIÇÕES
        </h2>

      </div>

      <div className={styles.subtitle}>
        <span>Edição que prende. Design que posiciona. Estratégia que transforma atenção em valor.</span>
      </div>


      <div className={styles.grid}>
        {/* Foto Gabriel em P&B */}
        <div className={styles.portraitCard}>
          <Image
            src="/images/gabriel-portrait.jpg"
            alt="Gabriel Garcia - Editor de Vídeo & Designer"
            width={350}
            height={460}
            className={styles.portraitImg}
            priority
          />
        </div>

        {/* Projetos em Destaque */}
        <div className={styles.featuredGrid}>
          {featured.map((feat) => (
            <div
              key={feat.id}
              className={styles.featuredCard}
              onClick={() => feat.item && onSelectProject?.(feat.item)}
            >
              <div className={styles.badgeNumber}>{feat.id}</div>
              <div className={styles.playBadge}>▶</div>
              <div className={styles.posterWrapper}>
                <Image
                  src={feat.poster}
                  alt={feat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 250px"
                  className={styles.posterImg}
                />
              </div>
              <div className={styles.cardTitle}>{feat.title}</div>
              <div className={styles.cardCategory}>{feat.category}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Barra de Filtros */}
      <div className={styles.filterBar}>
        <button

          className={`${styles.filterTab} ${activeFilter === "EDIÇÃO DE VÍDEOS" ? styles.filterTabActive : ""}`}
          onClick={() => setActiveFilter("EDIÇÃO DE VÍDEOS")}
        >
          EDIÇÃO DE VÍDEOS
        </button>
        <button
          className={`${styles.filterTab} ${activeFilter === "CRIAÇÃO DE SITES" ? styles.filterTabActive : ""}`}
          onClick={() => setActiveFilter("CRIAÇÃO DE SITES")}
        >
          CRIAÇÃO DE SITES
        </button>
        <button
          className={`${styles.filterTab} ${activeFilter === "CRIAÇÃO DE IMAGENS" ? styles.filterTabActive : ""}`}
          onClick={() => setActiveFilter("CRIAÇÃO DE IMAGENS")}
        >
          CRIAÇÃO DE IMAGENS
        </button>
        <button
          className={`${styles.filterTab} ${activeFilter === "GROWTH MARKETING" ? styles.filterTabActive : ""}`}
          onClick={() => setActiveFilter("GROWTH MARKETING")}
        >
          GROWTH MARKETING
        </button>
      </div>
    </section>
  );
}
