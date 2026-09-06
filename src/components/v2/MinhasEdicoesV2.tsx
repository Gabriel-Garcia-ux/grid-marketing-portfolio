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
      title: "A REVOLUÇÃO DO NOMAD CHIP",
      category: "Tech & Lifestyle",
      poster: "/imagens moldura/Nova pasta/Nomad eCHIP.png",
      video: "https://youtube.com/shorts/U8dBsqud1uY?feature=share",
      item: {
        id: "E1",
        title: "A Revolução Invisível: Nomad Chip",
        client: "Grid Marketing",
        category: "Tech & Lifestyle",
        year: "2024",
        poster: "/imagens moldura/Nova pasta/Nomad eCHIP.png",
        video: "https://youtube.com/shorts/U8dBsqud1uY?feature=share",
        alt: "Moldura do vídeo Nomad eCHIP",
      },
    },
    {
      id: "02",
      title: "O FUTURO NOS OLHOS: RAY-BAN META",
      category: "Produto & Inovação",
      poster: "/imagens moldura/Nova pasta/Rayban Meta.png",
      video: "https://youtube.com/shorts/ibrldvDBNyg?feature=share",
      item: {
        id: "E2",
        title: "O Futuro nos Olhos: Ray-Ban Meta",
        client: "Grid Marketing",
        category: "Produto & Inovação",
        year: "2024",
        poster: "/imagens moldura/Nova pasta/Rayban Meta.png",
        video: "https://youtube.com/shorts/ibrldvDBNyg?feature=share",
        alt: "Moldura do vídeo Rayban Meta",
      },
    },
    {
      id: "03",
      title: "DO CAOS BRUTO À OBRA-PRIMA",
      category: "Bastidores & Processo",
      poster: "/imagens moldura/Nova pasta/do bruto ao projeto.png",
      video: "https://youtube.com/shorts/3Mzjrb7DbNE?feature=share",
      item: {
        id: "E3",
        title: "Do Caos Bruto à Obra-Prima",
        client: "Grid Marketing",
        category: "Bastidores & Processo",
        year: "2024",
        poster: "/imagens moldura/Nova pasta/do bruto ao projeto.png",
        video: "https://youtube.com/shorts/3Mzjrb7DbNE?feature=share",
        alt: "Moldura do vídeo Do Bruto ao Projeto",
      },
    },
    {
      id: "04",
      title: "O ANÚNCIO QUE ESCALA VENDAS",
      category: "Growth & Conversão",
      poster: "/imagens moldura/novos videos/molduras/GRID ANUNCIO.png",
      video: "https://youtube.com/shorts/tkXd3vp7mwc?feature=share",
      item: {
        id: "E4",
        title: "O Anúncio Criado para Escalar Vendas",
        client: "Grid Marketing",
        category: "Growth & Conversão",
        year: "2024",
        poster: "/imagens moldura/novos videos/molduras/GRID ANUNCIO.png",
        video: "https://youtube.com/shorts/tkXd3vp7mwc?feature=share",
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


      <div className={styles.compositionArea}>
        <div className={styles.grid}>
          {/* Layer 1: Foto Gabriel em P&B ampliada conforme Print 2 */}
          <div className={styles.portraitCard}>
            <Image
              src="/images/gabriel-portrait.jpg"
              alt="Gabriel Garcia - Editor de Vídeo & Designer"
              width={480}
              height={640}
              className={styles.portraitImg}
              priority
            />
          </div>

          {/* Layer 3 & 4: Projetos em Destaque (Cards menores com Nomad sobrepondo ombro/cotovelo da Mona Lisa) */}
          <div className={styles.featuredGrid}>
            {featured.map((feat, index) => (
              <div
                key={feat.id}
                className={`${styles.featuredCard} ${index === 0 ? styles.nomadCard : ""}`}
                onClick={() => feat.item && onSelectProject?.(feat.item)}
              >
                <div className={styles.badgeNumber}>{feat.id}</div>
                <div className={styles.playBadge}>▶</div>
                <div className={styles.posterWrapper}>
                  <Image
                    src={feat.poster}
                    alt={feat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className={styles.posterImg}
                  />
                </div>
                <div className={styles.cardTitle}>{feat.title}</div>
                <div className={styles.cardCategory}>{feat.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 2: Mona Lisa com mão e braço sobrepondo a foto do Gabriel apontando para seu pescoço/rosto e cabeça sobrepondo levemente o card da Nomad */}
        <div className={styles.monaLisaContainer} aria-hidden="true">
          <Image
            src="/imagens de obras para o background/imagens pro site/monalisa-cutout-perfect.png"
            alt="Mona Lisa apontando para Gabriel Garcia"
            width={520}
            height={780}
            className={styles.monaLisaImg}
            priority
          />
        </div>

      {/* Barra de Filtros dividida com espaço central (Print 4) */}
      <div className={styles.filterBar}>
        <div className={styles.filterGroupLeft}>
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
        </div>

        {/* Espaço central reservado para o corpo da Mona Lisa */}
        <div className={styles.filterCenterSpacer} aria-hidden="true" />

        <div className={styles.filterGroupRight}>
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
      </div>

      {/* Layer 6: Masthead Monumental GRIDMARKETING com fundo vermelho sólido e texto branco */}
      <div className={styles.mastheadWrapper}>
        <h2 className={styles.mastheadText} aria-label="Grid Marketing">
          GRIDMARKETING
        </h2>
      </div>
      </div>
    </section>
  );
}
