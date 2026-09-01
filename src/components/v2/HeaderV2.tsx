import React from "react";
import Link from "next/link";
import styles from "./HeaderV2.module.css";

export default function HeaderV2() {
  return (
    <header className={styles.header}>
      <Link href="/v2" className={styles.brand}>
        <span className={styles.brandTitle}>GRID MARKETING</span>
        <span className={styles.brandSubtitle}>PORTFÓLIO CRIATIVO</span>
      </Link>

      <nav className={styles.nav} aria-label="Navegação Principal V2">
        <a href="#inicio" className={styles.navLink}>INÍCIO</a>
        <a href="#minhas-edicoes" className={styles.navLink}>EDIÇÕES</a>
        <a href="#sobre-mim" className={styles.navLink}>SOBRE MIM</a>
        <a href="#servicos" className={styles.navLink}>SERVIÇOS</a>
        <a href="#portfolio" className={styles.navLink}>PORTFÓLIO</a>
        <a href="#experiencia" className={styles.navLink}>EXPERIÊNCIA</a>
        <a href="#contato" className={styles.navLink}>CONTATO</a>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <Link href="/" className={styles.versionSwitch} title="Alternar para a versão 1">
          (Ver V1)
        </Link>
        <a href="#contato" className={styles.contactBadgeBtn}>
          CONTATO
        </a>
      </div>
    </header>
  );
}
