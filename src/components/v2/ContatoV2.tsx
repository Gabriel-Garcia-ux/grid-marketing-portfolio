import React from "react";
import styles from "./ContatoV2.module.css";

export default function ContatoV2() {
  return (
    <section id="contato" className={styles.section}>
      <div className={styles.titleContainer}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.dropCapBox}>V</span>AMOS CONVERSAR!
        </h2>

      </div>

      <div className={styles.subtitle}>
        <span>Vamos conversar ali no email</span>
      </div>


      <div className={styles.cardsGrid}>
        {/* WHATSAPP */}
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>
          <h3 className={styles.cardTitle}>WHATSAPP</h3>
          <a
            href="https://wa.me/5555992159647"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtn}
          >
            ABRIR WHATSAPP
          </a>
          <span className={styles.contactInfo}>559 9215 9647</span>
        </div>

        {/* EMAIL */}
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8b261b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </div>
          <h3 className={styles.cardTitle}>EMAIL</h3>
          <a
            href="https://mail.google.com/mail/u/1/#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtn}
          >
            ENVIAR EMAIL
          </a>
          <span className={styles.contactInfo}>gabrielgarciacontato01@gmail.com</span>
        </div>

        {/* INSTAGRAM */}
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          <h3 className={styles.cardTitle}>INSTAGRAM</h3>
          <a
            href="https://www.instagram.com/gridmarketingoficial/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtn}
          >
            VER PERFIL
          </a>
          <span className={styles.contactInfo}>@gridmarketingoficial</span>

        </div>

        {/* LINKEDIN */}
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0077B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
          <h3 className={styles.cardTitle}>LINKEDIN</h3>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtn}
          >
            VER PERFIL
          </a>
          <span className={styles.contactInfo}>Gabriel Garcia</span>
        </div>
      </div>

      {/* Ilustração Gravada de Mapa no Rodapé */}
      <div className={styles.mapFooter}>
        <svg
          className={styles.mapSvg}
          viewBox="0 0 800 120"
          fill="none"
          stroke="#382f27"
          strokeWidth="0.8"
        >
          {/* Ruas e quadras gravadas no mapa vintage */}
          <path d="M20 100 Q 200 40 400 90 T 780 30" strokeDasharray="3,3" />
          <path d="M50 20 C 150 90 250 10 350 70 S 650 100 750 40" />
          <path d="M100 110 L 140 10 L 180 110 Z" opacity="0.4" />
          <path d="M280 110 L 320 30 L 360 110 Z" opacity="0.4" />
          <path d="M480 110 L 520 20 L 560 110 Z" opacity="0.4" />
          <path d="M680 110 L 720 40 L 760 110 Z" opacity="0.4" />
          {/* Pin Vermelho de Localização */}
          <circle cx="400" cy="70" r="6" fill="#8b261b" />
          <path d="M400 76 L 400 90" stroke="#8b261b" strokeWidth="2" />
        </svg>

        <div className={styles.studioFooterText}>
          · GRID ·
        </div>

      </div>
    </section>
  );
}
