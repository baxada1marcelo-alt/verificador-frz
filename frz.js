// ===== Lógica FRZ (ICA 100-40/2026, Arts. 14, 15, 25, 28, 32) =====
const R_EARTH = 6371000;
const TAN20 = Math.tan(20 * Math.PI / 180);

function dms(d, m, s, hemi) { const v = d + m / 60 + s / 3600; return (hemi === 'S' || hemi === 'W') ? -v : v; }

// Dados: AISWEB/DECEA, consultado em 19/11/2026
const AERODROMOS = [
  { id: 'SBSM', nome: 'Santa Maria', cidade: 'Santa Maria', regra: 'IFR',
    arp: [dms(29,42,39,'S'), dms(53,41,32,'W')],
    pistas: [ { nome: '11/29', cab: [ ['11', dms(29,42,38,'S'), dms(53,42,14,'W')], ['29', dms(29,42,43,'S'), dms(53,40,34,'W')] ] } ],
    obs: 'RWY 02/20 fechada (SUP N0057) até 26/04/2029 – não considerada.' },
  { id: 'SBPA', nome: 'Salgado Filho', cidade: 'Porto Alegre', regra: 'IFR',
    arp: [dms(29,59,41,'S'), dms(51,10,16,'W')],
    pistas: [ { nome: '11/29', cab: [ ['11', dms(29,59,39.79,'S'), dms(51,10,58.82,'W')], ['29', dms(29,59,42.14,'S'), dms(51,8,59.46,'W')] ] } ] },
  { id: 'SBCO', nome: 'Canoas (BACO)', cidade: 'Canoas', regra: 'IFR',
    arp: [dms(29,56,44,'S'), dms(51,8,37,'W')],
    pistas: [ { nome: '13/31', cab: [ ['13', dms(29,56,31,'S'), dms(51,9,28,'W')], ['31', dms(29,57,0,'S'), dms(51,7,51,'W')] ] } ],
    obs: 'Coordenadas das cabeceiras a conferir.' },
  { id: 'SBCX', nome: 'Hugo Cantergiani', cidade: 'Caxias do Sul', regra: 'IFR',
    arp: [dms(29,11,53,'S'), dms(51,11,12,'W')],
    pistas: [ { nome: '15/33', cab: [ ['15', dms(29,11,33,'S'), dms(51,11,34,'W')], ['33', dms(29,12,12,'S'), dms(51,10,50,'W')] ] } ] },
  { id: 'SBPF', nome: 'Lauro Kurtz', cidade: 'Passo Fundo', regra: 'IFR',
    arp: [dms(28,14,39,'S'), dms(52,19,42,'W')],
    pistas: [ { nome: '09/27', cab: [ ['09', dms(28,14,49,'S'), dms(52,20,11,'W')], ['27', dms(28,14,29,'S'), dms(52,19,14,'W')] ] } ] },
  { id: 'SBPK', nome: 'João Simões Lopes Neto', cidade: 'Pelotas', regra: 'IFR',
    arp: [dms(31,42,58,'S'), dms(52,19,52,'W')],
    pistas: [ { nome: '07/25', cab: [ ['07', dms(31,43,16,'S'), dms(52,20,1,'W')], ['25', dms(31,42,42,'S'), dms(52,19,11,'W')] ] } ],
    obs: 'Cabeceira 07 deslocada 140 m.' },
  { id: 'SBBG', nome: 'Cmte Gustavo Kraemer', cidade: 'Bagé', regra: 'IFR',
    arp: [dms(31,23,27,'S'), dms(54,6,35,'W')],
    pistas: [ { nome: '06/24', cab: [ ['06', dms(31,23,42.70,'S'), dms(54,7,3.88,'W')], ['24', dms(31,23,9.0,'S'), dms(54,6,22.87,'W')] ] } ] },
  { id: 'SBUG', nome: 'Rubem Berta', cidade: 'Uruguaiana', regra: 'IFR',
    arp: [dms(29,47,0,'S'), dms(57,2,13,'W')],
    pistas: [ { nome: '10/28', cab: [ ['10', dms(29,46,57.29,'S'), dms(57,2,40.11,'W')], ['28', dms(29,46,53.48,'S'), dms(57,1,51.74,'W')] ] } ] },
  { id: 'SBNM', nome: 'Santo Ângelo', cidade: 'Santo Ângelo', regra: 'IFR',
    arp: [dms(28,16,54,'S'), dms(54,10,6,'W')],
    pistas: [ { nome: '12/30', cab: [ ['12', dms(28,16,52,'S'), dms(54,10,40,'W')], ['30', dms(28,17,2,'S'), dms(54,9,41,'W')] ] } ] },
  { id: 'SJRG', nome: 'Regional de Rio Grande', cidade: 'Rio Grande', regra: 'VFR',
    arp: [dms(32,5,1,'S'), dms(52,10,4,'W')],
    pistas: [], incompleto: true,
    obs: 'Cabeceiras não publicadas no AISWEB – não é possível calcular ZEA/ZAD.' },
];

// Tabelas (ICA 100-40/2026, Fig. 2 e Fig. 4). Limites em metros; pisos em ft.
const TAB = {
  ZEA: { col1: [1740, 2350, 2960, 3570], col2: [1130, 1740, 2350, 2960], setores: ['A','B','C','D','E'] },
  ZAD: { col1: [3550, 4480, 5400, 6320], col2: [1700, 2630, 3550, 4480], setores: ['F','G','H','I','J'] },
  ZEH: { col1: [1740, 2350, 2960, 3570], col2: [1130, 1740, 2350, 2960], setores: ['A','B','C','D','E'] },
};
const PISOS = [0, 100, 200, 300, 400];

const PERFIS = {
  recreativa:   { nome: 'Recreativa', colAD: 'col1', colHP: 'col2' },
  padrao:       { nome: 'Padrão', colAD: 'col1', colHP: 'col2' },
  aerolev:      { nome: 'Aerolevantamento', colAD: 'col1', colHP: 'col2' },
  aeroagricola: { nome: 'Aeroagrícola', colAD: 'col1', colHP: 'col2' },
  atipica:      { nome: 'Atípica', colAD: 'col1', colHP: 'col2' },
  especial:     { nome: 'Aérea Especial', colAD: 'col2', colHP: 'col2' },
  estrutura:    { nome: 'Entorno de estrutura', colAD: 'col2', colHP: 'col2' },
};
// Observação: em helipontos, a coluna depende de o heliponto ser IFR ou VFR (Fig. 4).
// Ainda não há helipontos cadastrados.

function toXY(lat0, lon0, lat, lon) {
  const k = Math.PI / 180;
  return [ (lon - lon0) * k * R_EARTH * Math.cos(lat0 * k), (lat - lat0) * k * R_EARTH ];
}
function fromXY(lat0, lon0, x, y) {
  const k = Math.PI / 180;
  return [ lat0 + y / (k * R_EARTH), lon0 + x / (k * R_EARTH * Math.cos(lat0 * k)) ];
}
function distSeg(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay; const L2 = dx*dx + dy*dy;
  let t = L2 ? ((px-ax)*dx + (py-ay)*dy) / L2 : 0; t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + t*dx), py - (ay + t*dy));
}

// Pré-calcula geometria local de cada aeródromo
for (const ad of AERODROMOS) {
  ad.lat0 = ad.arp[0]; ad.lon0 = ad.arp[1];
  for (const p of ad.pistas) {
    p.xy = p.cab.map(c => toXY(ad.lat0, ad.lon0, c[1], c[2]));
  }
}

// Classifica um ponto (x,y em metros, referencial do aeródromo)
// Retorna { zona, setor, piso, dist, cab, extremo } — extremo=true no último anel (limite externo indefinido)
function classificaXY(ad, x, y, col) {
  let melhor = null;
  for (const p of ad.pistas) {
    const [A, B] = p.xy;
    let zona = 'ZEA', dist = distSeg(x, y, A[0], A[1], B[0], B[1]), cab = null;
    for (let i = 0; i < 2; i++) {
      const T = p.xy[i], O = p.xy[1 - i];
      let ux = T[0] - O[0], uy = T[1] - O[1]; const n = Math.hypot(ux, uy); ux /= n; uy /= n;
      const rx = x - T[0], ry = y - T[1];
      const s = rx*ux + ry*uy, l = Math.abs(rx*uy - ry*ux);
      if (s >= 0 && l <= 150 + s * TAN20) { zona = 'ZAD'; dist = Math.hypot(rx, ry); cab = p.cab[i][0]; break; }
    }
    const lim = TAB[zona][col];
    let idx = lim.findIndex(v => dist <= v); if (idx < 0) idx = 4;
    const r = { zona, setor: TAB[zona].setores[idx], piso: PISOS[idx], dist, cab, pista: p.nome, extremo: idx === 4 };
    if (!melhor || r.piso < melhor.piso || (r.piso === melhor.piso && r.dist < melhor.dist)) melhor = r;
  }
  return melhor;
}

// Avalia operação: ponto central + raio (m) + altura (ft) + perfil
function avaliar(lat, lon, raio, alturaFt, perfilId) {
  const perfil = PERFIS[perfilId];
  const res = [];
  for (const ad of AERODROMOS) {
    const [cx, cy] = toXY(ad.lat0, ad.lon0, lat, lon);
    const dARP = Math.hypot(cx, cy);
    if (dARP > 20000) continue;
    if (ad.incompleto) { res.push({ ad, dARP, incompleto: true, status: dARP < 8000 ? 'indef' : 'fora' }); continue; }
    const col = perfil.colAD;
    // amostra o círculo da operação: centro + 2 anéis de 24 pontos
    const pts = [[cx, cy]];
    if (raio > 0) for (const rr of [raio, raio / 2]) for (let k = 0; k < 24; k++) {
      const a = k * Math.PI / 12; pts.push([cx + rr*Math.cos(a), cy + rr*Math.sin(a)]);
    }
    let pior = null, centro = null;
    for (const [px, py] of pts) {
      const c = classificaXY(ad, px, py, col);
      if (!centro) centro = c;
      if (!pior || c.piso < pior.piso || (c.piso === pior.piso && c.dist < pior.dist)) pior = c;
    }
    let status;
    if (alturaFt >= pior.piso) status = pior.extremo ? 'indef' : 'dentro';
    else status = 'fora';
    res.push({ ad, dARP, col, centro, pior, status });
  }
  res.sort((a, b) => a.dARP - b.dARP);
  return res;
}

if (typeof module !== 'undefined') module.exports = { AERODROMOS, avaliar, classificaXY, toXY, fromXY, dms };
