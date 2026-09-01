const fs = require('fs');
const path = require('path');

const dir = path.join('public', 'portfolio', 'posters');
fs.mkdirSync(dir, { recursive: true });

const cats = ['Edicao de Video', 'Motion Direction', 'Creative Reel', 'Key Visual', 'Brand Film'];
const cols = ['#8b4734', '#663125', '#302b26', '#4a3828', '#5c3d2e'];

for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  const cat = cats[(i - 1) % 5];
  const col = cols[(i - 1) % 5];
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" fill="none">',
    '<rect width="1080" height="1350" fill="#c9bcad"/>',
    '<rect x="2" y="2" width="1076" height="1346" stroke="#171411" stroke-opacity=".4" stroke-width="2" fill="none"/>',
    '<rect x="18" y="18" width="1044" height="1314" stroke="#171411" stroke-opacity=".15" stroke-width="1" fill="none"/>',
    '<line x1="0" y1="300" x2="1080" y2="300" stroke="#171411" stroke-opacity=".12" stroke-width="1"/>',
    '<line x1="0" y1="1050" x2="1080" y2="1050" stroke="#171411" stroke-opacity=".12" stroke-width="1"/>',
    '<rect x="380" y="560" width="320" height="230" fill="' + col + '" fill-opacity=".07" stroke="' + col + '" stroke-opacity=".25" stroke-width="1.5"/>',
    '<polygon points="510,625 510,745 630,685" fill="' + col + '" fill-opacity=".18"/>',
    '<text x="44" y="200" font-family="Georgia,serif" font-size="48" fill="#302b26" fill-opacity=".55" letter-spacing="4">PROJETO ' + num + '</text>',
    '<text x="44" y="255" font-family="Georgia,serif" font-size="22" fill="' + col + '" fill-opacity=".7" letter-spacing="6">' + cat + '</text>',
    '<text x="44" y="1100" font-family="Georgia,serif" font-size="20" fill="#302b26" fill-opacity=".4" letter-spacing="3">GRID MARKETING</text>',
    '<text x="44" y="1140" font-family="Georgia,serif" font-size="14" fill="#302b26" fill-opacity=".3" letter-spacing="5">SUBSTITUIR POSTER</text>',
    '<text x="44" y="1310" font-family="monospace" font-size="14" fill="#302b26" fill-opacity=".25" letter-spacing="2">GM - ' + num + ' / 20 - PORTFOLIO CRIATIVO</text>',
    '</svg>'
  ].join('\n');

  fs.writeFileSync(path.join(dir, 'poster-' + num + '.svg'), svg, 'utf8');
  console.log('Created poster-' + num + '.svg');
}

console.log('Done: 20 poster SVGs created.');
