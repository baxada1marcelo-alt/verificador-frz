// Testes da lógica do Verificador FRZ.
// Como rodar (na pasta do projeto):  node testes/teste-frz.js
const f = require('../frz.js');
const assert = require('assert');

const sm = f.AERODROMOS.find(a => a.id === 'SBSM');
const [A, B] = sm.pistas[0].xy;               // A = cabeceira 11, B = cabeceira 29
const n = Math.hypot(A[0] - B[0], A[1] - B[1]);
const ux = (A[0] - B[0]) / n, uy = (A[1] - B[1]) / n; // direção "para fora" da cabeceira 11

// Ponto a "s" metros além da cabeceira 11 e "l" metros para o lado
function ponto(s, l) {
  return f.fromXY(sm.lat0, sm.lon0, A[0] + ux * s - uy * l, A[1] + uy * s + ux * l);
}

const casos = [
  // [s, l, altura ft, zona, setor, status esperado]
  [2000, 0,   10, 'ZAD', 'F', 'dentro'],
  [4000, 0,   80, 'ZAD', 'G', 'fora'],
  [4000, 0,  150, 'ZAD', 'G', 'dentro'],
  [0, 1500,   50, 'ZEA', 'A', 'dentro'],
  [0, 2000,   90, 'ZEA', 'B', 'fora'],
  [0, 2000,  150, 'ZEA', 'B', 'dentro'],
  [7000, 0,  399, 'ZAD', 'J', 'fora'],
  [7000, 0,  400, 'ZAD', 'J', 'indef'],
];

let ok = 0;
for (const [s, l, alt, zona, setor, status] of casos) {
  const [lat, lon] = ponto(s, l);
  const r = f.avaliar(lat, lon, 0, alt, 'recreativa').find(x => x.ad.id === 'SBSM');
  assert.strictEqual(r.pior.zona, zona, `zona em s=${s} l=${l}`);
  assert.strictEqual(r.pior.setor, setor, `setor em s=${s} l=${l}`);
  assert.strictEqual(r.status, status, `status em s=${s} l=${l} alt=${alt}`);
  ok++;
}
console.log(`${ok}/${casos.length} testes OK`);

// ===== Helipontos (ZEH – ICA 100-40, Art. 15, Fig. 4) =====
function pontoHP(id, norte) {
  const h = f.HELIPONTOS.find(x => x.id === id);
  return f.fromXY(h.lat0, h.lon0, 0, norte);
}
const casosHP = [
  // [heliponto, distância (m), altura ft, tipo de operação, setor, status]
  ['SDWY', 1000,  10, 'recreativa', 'A', 'dentro'],  // VFR → coluna 2 (até 1130 m)
  ['SDWY', 1500,  90, 'recreativa', 'B', 'fora'],
  ['SDWY', 1500, 100, 'recreativa', 'B', 'dentro'],
  ['SJJZ', 1500,  50, 'recreativa', 'A', 'dentro'],  // IFR → coluna 1 (até 1740 m)
  ['SJJZ', 1500,  50, 'especial',   'B', 'fora'],    // IFR + Aérea Especial → coluna 2
];
let okHP = 0;
for (const [id, d, alt, perfil, setor, status] of casosHP) {
  const [lat, lon] = pontoHP(id, d);
  const r = f.avaliar(lat, lon, 0, alt, perfil).find(x => x.ad.id === id);
  assert.ok(r, `${id} deveria aparecer no resultado`);
  assert.strictEqual(r.pior.zona, 'ZEH');
  assert.strictEqual(r.pior.setor, setor, `setor ${id} d=${d} ${perfil}`);
  assert.strictEqual(r.status, status, `status ${id} d=${d} alt=${alt} ${perfil}`);
  okHP++;
}
// longe de heliponto (setor E) e abaixo de 400 ft: não aparece na lista
{ const [lat, lon] = pontoHP('SDWY', 5000); assert.ok(!f.avaliar(lat, lon, 0, 200, 'recreativa').some(x => x.ad.id === 'SDWY')); okHP++; }
console.log(`${okHP}/${casosHP.length + 1} testes de helipontos OK`);
