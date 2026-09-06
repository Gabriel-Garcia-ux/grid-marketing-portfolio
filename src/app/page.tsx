"use client";

import React, { useState } from "react";
import ParchmentWrapper from "@/components/v2/ParchmentWrapper";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideoBanner from "@/components/sections/VideoBanner";
import MinhasEdicoesV2 from "@/components/v2/MinhasEdicoesV2";
import SobreMimV2 from "@/components/v2/SobreMimV2";
import ServicosV2 from "@/components/v2/ServicosV2";
import PortfolioV2 from "@/components/v2/PortfolioV2";
import ExperienciaV2 from "@/components/v2/ExperienciaV2";
import ContatoV2 from "@/components/v2/ContatoV2";
import { PortfolioItem } from "@/types";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const handleSelectProject = (item: PortfolioItem | null) => {
    setSelectedProject(item);
  };

  return (
    <ParchmentWrapper>
      <Header />

      <main id="inicio">
        {/* Banner Principal em Vídeo Original do Site */}
        <VideoBanner />

        {/* 1. Minhas Edições */}
        <MinhasEdicoesV2 onSelectProject={handleSelectProject} />

        {/* 2. Sobre Mim */}
        <SobreMimV2 />

        {/* 3. Serviços */}
        <ServicosV2 />

        {/* 4. Portfólio Completo com Player Interativo */}
        <PortfolioV2
          selectedProject={selectedProject}
          onSelectProject={handleSelectProject}
        />

        {/* 5. Experiência Profissional */}
        <ExperienciaV2 />

        {/* 6. Contato e Redes */}
        <ContatoV2 />
      </main>

      <Footer />
    </ParchmentWrapper>
  );
}

