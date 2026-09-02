import React from "react";
import Image from "next/image";
import styles from "./SobreMimV2.module.css";
import { siteContent } from "@/content/site-content";

export default function SobreMimV2() {
  const { about } = siteContent;

  return (
    <section id="sobre-mim" className={styles.section}>
      {/* Imagem de Fundo Artística Integrada */}
      <div className={styles.bgWrapper} aria-hidden="true">
        <Image
          src="/imagens de obras para o background/imagens pro site/ChatGPT Image 1 de set. de 2026, 23_46_05.png"
          alt=""
          fill
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.contentInner}>
        <div className={styles.titleContainer}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.dropCapBox}>S</span>OBRE MIM
        </h2>
      </div>


      <h3 className={styles.headline}>
        {about.title}
      </h3>

      <div className={styles.editorialBody}>
        <div className={styles.column}>
          <p className={styles.paragraph}>
            <span className={styles.firstLetter}>F</span>
            {about.paragraphs.attention}
          </p>

          <p className={styles.paragraph}>
            {about.paragraphs.interest}
          </p>
        </div>

        <div className={styles.column}>
          <p className={styles.paragraph}>
            <span className={styles.firstLetter}>M</span>
            {about.paragraphs.differentiator}
          </p>


          <div className={styles.highlightBox}>
            {about.paragraphs.desire}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
