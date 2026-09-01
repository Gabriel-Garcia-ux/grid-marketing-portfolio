const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'imagens moldura');

const posters = [
  {
    filename: 'grid-anuncio-5.svg',
    title: 'GRID ANÚNCIO 5',
    category: 'GROWTH & TRÁFEGO',
    tag: 'ANÚNCIO DE ALTA CONVERSÃO',
    accent: '#8b261b',
  },
  {
    filename: 'bespeak-reels-1.svg',
    title: 'BESPEAK REELS 01',
    category: 'REELS & EDIÇÃO',
    tag: 'DYNAMIC PACING & RETENTION',
    accent: '#8b261b',
  },
  {
    filename: 'bespeak-reels-2.svg',
    title: 'BESPEAK REELS 02',
    category: 'REELS & EDIÇÃO',
    tag: 'MOTION HOOK & SOUND DESIGN',
    accent: '#8b261b',
  },
  {
    filename: 'bespeak-reels-3.svg',
    title: 'BESPEAK REELS 03',
    category: 'REELS & EDIÇÃO',
    tag: 'BRAND STORYTELLING',
    accent: '#8b261b',
  },
  {
    filename: 'bespeak-reels-4.svg',
    title: 'BESPEAK REELS 04',
    category: 'REELS & EDIÇÃO',
    tag: 'HIGH IMPACT EDITING',
    accent: '#8b261b',
  },
  {
    filename: 'bespeak-reels-5.svg',
    title: 'BESPEAK REELS 05',
    category: 'REELS & EDIÇÃO',
    tag: 'ENGAGEMENT & PACING',
    accent: '#8b261b',
  },
  {
    filename: 'desafio-da-ilha.svg',
    title: 'DESAFIO DA ILHA',
    category: 'STORYTELLING & DINÂMICA',
    tag: 'NARRATIVA VISUAL',
    accent: '#8b261b',
  },
  {
    filename: 'voltou-a-trabalhar.svg',
    title: 'VOLTOU A TRABALHAR',
    category: 'DIREITO & REELS',
    tag: 'AUTORIDADE & RETENÇÃO',
    accent: '#8b261b',
  },
];

posters.forEach(p => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <defs>
    <linearGradient id="bgGrad_${p.filename.replace(/[^a-z0-9]/gi, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a231d" />
      <stop offset="50%" stop-color="#191512" />
      <stop offset="100%" stop-color="#0e0c0a" />
    </linearGradient>
    <radialGradient id="glowGrad_${p.filename.replace(/[^a-z0-9]/gi, '')}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${p.accent}" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Fundo com gradiente escuro vintage -->
  <rect width="800" height="1000" fill="url(#bgGrad_${p.filename.replace(/[^a-z0-9]/gi, '')})" />
  <circle cx="400" cy="500" r="350" fill="url(#glowGrad_${p.filename.replace(/[^a-z0-9]/gi, '')})" />

  <!-- Molduras e bordas duplas estilo editorial -->
  <rect x="20" y="20" width="760" height="960" fill="none" stroke="#d8cbb8" stroke-width="1.5" stroke-opacity="0.3" />
  <rect x="32" y="32" width="736" height="936" fill="none" stroke="#d8cbb8" stroke-width="0.75" stroke-opacity="0.15" />

  <!-- Cantoneiras decorativas -->
  <path d="M 20 60 L 60 60 L 60 20" fill="none" stroke="#8b261b" stroke-width="2.5" />
  <path d="M 780 60 L 740 60 L 740 20" fill="none" stroke="#8b261b" stroke-width="2.5" />
  <path d="M 20 940 L 60 940 L 60 980" fill="none" stroke="#8b261b" stroke-width="2.5" />
  <path d="M 780 940 L 740 940 L 740 980" fill="none" stroke="#8b261b" stroke-width="2.5" />

  <!-- Topo: Marca e Categoria -->
  <text x="54" y="80" font-family="'Montserrat', sans-serif" font-size="14" font-weight="700" fill="#d8cbb8" letter-spacing="4" opacity="0.6">GRID MARKETING</text>
  <text x="746" y="80" text-anchor="end" font-family="'Montserrat', sans-serif" font-size="12" font-weight="600" fill="#8b261b" letter-spacing="3">${p.category}</text>
  <line x1="54" y1="98" x2="746" y2="98" stroke="#d8cbb8" stroke-width="0.75" stroke-opacity="0.2" />

  <!-- Centro: Ícone de Play e Círculo com efeito de vidro -->
  <circle cx="400" cy="460" r="64" fill="#14110f" stroke="#d8cbb8" stroke-width="1.5" stroke-opacity="0.4" />
  <polygon points="392,436 392,484 424,460" fill="#f2e9dc" />

  <!-- Textos Centrais: Título do Projeto e Tagline -->
  <text x="400" y="580" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="32" font-weight="800" fill="#f2e9dc" letter-spacing="2">${p.title}</text>
  <text x="400" y="618" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="13" font-weight="600" fill="#8b261b" letter-spacing="4">${p.tag}</text>

  <!-- Rodapé do Card -->
  <line x1="54" y1="890" x2="746" y2="890" stroke="#d8cbb8" stroke-width="0.75" stroke-opacity="0.2" />
  <text x="54" y="930" font-family="'Montserrat', sans-serif" font-size="12" font-weight="500" fill="#d8cbb8" letter-spacing="2" opacity="0.5">PORTFÓLIO CRIATIVO</text>
  <text x="746" y="930" text-anchor="end" font-family="'Montserrat', sans-serif" font-size="12" font-weight="700" fill="#d8cbb8" letter-spacing="2" opacity="0.8">VER VÍDEO ▶</text>
</svg>`;

  fs.writeFileSync(path.join(targetDir, p.filename), svg, 'utf8');
  console.log('Gerado:', p.filename);
});
