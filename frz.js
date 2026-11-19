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

// Coluna da tabela por tipo de operação.
// Aeroportos (Fig. 2): col1 = notas (1); col2 = notas (2)(3)(4).
// Helipontos (Fig. 4): heliponto IFR usa col1 nas operações da nota (1) e col2 em Aérea Especial/Entorno de
// estrutura (nota 2); heliponto VFR usa SEMPRE a col2 (notas 3 e 4).
const PERFIS = {
  recreativa:   { nome: 'Recreativa', colAD: 'col1', colHP: { IFR: 'col1', VFR: 'col2' } },
  padrao:       { nome: 'Padrão', colAD: 'col1', colHP: { IFR: 'col1', VFR: 'col2' } },
  aerolev:      { nome: 'Aerolevantamento', colAD: 'col1', colHP: { IFR: 'col1', VFR: 'col2' } },
  aeroagricola: { nome: 'Aeroagrícola', colAD: 'col1', colHP: { IFR: 'col1', VFR: 'col2' } },
  atipica:      { nome: 'Atípica', colAD: 'col1', colHP: { IFR: 'col1', VFR: 'col2' } },
  especial:     { nome: 'Aérea Especial', colAD: 'col2', colHP: { IFR: 'col2', VFR: 'col2' } },
  estrutura:    { nome: 'Entorno de estrutura', colAD: 'col2', colHP: { IFR: 'col2', VFR: 'col2' } },
};

// Helipontos do RS – AISWEB/DECEA (ROTAER, filtro Tipo = Heliponto, UF = RS), consultado em 19/11/2026.
// Regra: 'IFR' quando o ROTAER indica IFR; nos demais (VFR ou só "HJ" – diurno) considerado VFR.
function hp(id, nome, cidade, regra, gms) {
  const n = gms.split(' ').map(Number);
  return { id, nome, cidade, regra, tipo: 'HP', arp: [dms(n[0], n[1], n[2], 'S'), dms(n[3], n[4], n[5], 'W')] };
}
const HELIPONTOS = [
  hp('SI4A', "Asor Sul Connect", "Caxias do Sul", 'VFR', '29 13 08 051 10 18'),
  hp('SD7T', "Base de Operações Aéreas da PRF", "Porto Alegre", 'VFR', '29 58 21 051 10 34'),
  hp('SS2K', "CBMRS", "Porto Alegre", 'VFR', '30 02 30.31 051 12 11.89'),
  hp('SJMY', "Monte Rey", "Caxias do Sul", 'VFR', '29 08 07 051 08 31'),
  hp('SS3V', "Termas Romanas", "Restinga Sêca", 'VFR', '29 41 57.58 053 29 35.73'),
  hp('SWHC', "Caracol", "Canela", 'VFR', '29 19 02 050 51 07'),
  hp('SDT9', "CMPC HF Santa Margarida", "Santa Margarida do Sul", 'VFR', '30 21 01 054 04 59'),
  hp('SDU2', "CMPC HF Fazenda da Bota", "Encruzilhada do Sul", 'VFR', '30 28 01 052 28 10'),
  hp('SDWY', "Caridade", "Santa Maria", 'VFR', '29 41 30 053 48 21'),
  hp('SIAK', "Santa Casa de Misericórdia de Porto Alegre", "Porto Alegre", 'VFR', '30 01 48 051 13 14'),
  hp('SISE', "Sementes Roos", "Não-Me-Toque", 'VFR', '28 26 36 052 48 50'),
  hp('SJJZ', "HELPN Ilha de Terrapleno", "Rio Grande", 'IFR', '32 01 58 052 04 22'),
  hp('SJQW', "Warna Roos", "Santa Bárbara do Sul", 'VFR', '28 10 52 053 13 00'),
  hp('SJWN', "Unimed - Nordeste", "Caxias do Sul", 'VFR', '29 09 53 051 12 03'),
  hp('SSDD', "HELPN Nossa Senhora de Fátima", "Canoas", 'VFR', '29 55 58 051 11 00'),
  hp('SSHM', "Hospital Moinhos de Vento", "Porto Alegre", 'VFR', '30 01 35 051 12 33'),
  hp('SSUG', "Full Gauge", "Canoas", 'VFR', '29 57 18 051 10 26'),
  hp('SWGY', "Sierra Móveis Gramado", "Gramado", 'VFR', '29 25 02 050 51 12'),
  hp('SWSE', "Iguatemi Corporate", "Porto Alegre", 'VFR', '30 01 42 051 09 46'),
  hp('SJ5M', "Michelon", "Santa Cruz do Sul", 'VFR', '29 41 16.31 052 25 26.16'),
  hp('SJ3H', "Calçados Beira Rio", "Novo Hamburgo", 'VFR', '29 39 42 051 05 53'),
  hp('SD6D', "Granitos.com", "Nova Araçá", 'VFR', '28 39 46 051 44 26'),
  hp('SJ72', "Tri Telecom", "Porto Alegre", 'VFR', '29 59 04 051 07 14'),
  hp('SDR7', "CMPC HF São Manoel", "Pinheiro Machado", 'VFR', '31 33 25 053 25 44'),
  hp('SSAL', "Mostardeiro", "Porto Alegre", 'VFR', '30 01 40 051 12 14'),
  hp('SSMU', "Magnum", "Cachoeirinha", 'VFR', '29 56 53 051 06 19'),
  hp('SBQF', "Ferigolo", "Nova Palma", 'VFR', '29 27 42 053 27 49'),
  hp('SWFY', "Fapar", "Caxias do Sul", 'VFR', '29 10 56 051 14 10'),
  hp('SDU8', "Terroir", "Garibaldi", 'VFR', '29 12 30 051 33 36'),
  hp('SS6Q', "Aviação Santa Bárbara", "Santa Bárbara do Sul", 'VFR', '28 20 24.50 053 09 28.40'),
  hp('SDTT', "Região das Hortênsias", "Gramado", 'VFR', '29 21 42 050 51 11'),
  hp('SJRN', "Carlos Gomes Center", "Porto Alegre", 'VFR', '30 01 53 051 10 36'),
  hp('SJD6', "Blumen Park", "Lajeado", 'VFR', '29 26 02 052 01 03'),
  hp('SWOH', "Vinícola Don Guerino", "Alto Feliz", 'VFR', '29 22 46 051 19 49'),
  hp('SJCT', "3 Tentos CETEC", "Santa Bárbara do Sul", 'VFR', '28 23 13 053 15 24'),
];

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

// Pré-calcula geometria local de cada aeródromo e heliponto
for (const ad of AERODROMOS) {
  ad.tipo = 'AD';
  ad.lat0 = ad.arp[0]; ad.lon0 = ad.arp[1];
  for (const p of ad.pistas) {
    p.xy = p.cab.map(c => toXY(ad.lat0, ad.lon0, c[1], c[2]));
  }
}
for (const h of HELIPONTOS) { h.lat0 = h.arp[0]; h.lon0 = h.arp[1]; h.pistas = []; }
const SITIOS = AERODROMOS.concat(HELIPONTOS);

// Coluna da tabela para um aeródromo/heliponto e tipo de operação
function colunaDe(s, perfilId) {
  const p = PERFIS[perfilId];
  return s.tipo === 'HP' ? p.colHP[s.regra] : p.colAD;
}

// Classifica um ponto (x,y em metros, referencial do aeródromo/heliponto)
// Retorna { zona, setor, piso, dist, cab, extremo } — extremo=true no último anel (setor E/J: FRZ só a partir de 400 ft)
function classificaXY(ad, x, y, col) {
  if (ad.tipo === 'HP') { // ZEH: círculo a partir do heliponto (Art. 15, Fig. 4)
    const dist = Math.hypot(x, y);
    let idx = TAB.ZEH[col].findIndex(v => dist <= v); if (idx < 0) idx = 4;
    return { zona: 'ZEH', setor: TAB.ZEH.setores[idx], piso: PISOS[idx], dist, cab: null, pista: null, extremo: idx === 4 };
  }
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
  const res = [];
  for (const ad of SITIOS) {
    const [cx, cy] = toXY(ad.lat0, ad.lon0, lat, lon);
    const dARP = Math.hypot(cx, cy);
    if (dARP > (ad.tipo === 'HP' ? 8000 : 20000) + raio) continue;
    if (ad.incompleto) { res.push({ ad, dARP, incompleto: true, status: dARP < 8000 ? 'indef' : 'fora' }); continue; }
    const col = colunaDe(ad, perfilId);
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
    // helipontos: só lista quando o voo está dentro dos anéis A–D ou quando o resultado não é "fora"
    if (ad.tipo === 'HP' && pior.extremo && status === 'fora') continue;
    res.push({ ad, dARP, col, centro, pior, status });
  }
  res.sort((a, b) => a.dARP - b.dARP);
  return res;
}

if (typeof module !== 'undefined') module.exports = { AERODROMOS, HELIPONTOS, SITIOS, PERFIS, avaliar, classificaXY, colunaDe, toXY, fromXY, dms };
