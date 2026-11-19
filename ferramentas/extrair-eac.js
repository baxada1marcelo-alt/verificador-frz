// Extrai da AIP Brasil (ENR 5.1 – Áreas proibidas, restritas e perigosas) as áreas que tocam o RS
// e gera o arquivo eac-rs.js usado pelo Verificador.
//
// Como usar (precisa do pdftotext – vem com o Git para Windows):
//   pdftotext -raw -enc UTF-8 -f <1ª pág ENR 5.1> -l <última pág ENR 5.1> "AIC COMPLETA.pdf" enr51.txt
//   node ferramentas/extrair-eac.js enr51.txt "AIP AIRAC A 25/2026 – efetiva 24 DEC 2026"
const fs = require('fs');
const [arq, fonte = 'AIP Brasil – ENR 5.1'] = process.argv.slice(2);
const linhas = fs.readFileSync(arq, 'utf8').split(/\r?\n/).map(l => l.trim()).filter(Boolean);

const RE_ID = /^(SB[DPR]\d{3})\s+(.*)$/;
const RE_COORD = /(\d{2})(\d{2})(\d{2}(?:\.\d+)?)S\s*(\d{3})(\d{2})(\d{2}(?:\.\d+)?)W/g;
const RE_LIM = /^(UNL|GND|SFC|MSL|FL\s?\d{2,3}|\d+(?:[.,]\d+)?\s*FT\s*(?:AGL|AMSL|MSL|SFC|GND)?|\d+(?:[.,]\d+)?\s*M\s*(?:AGL|AMSL))$/i;
// linhas de cabeçalho/rodapé das páginas
const LIXO = /^(AIP|BRASIL\/BRAZIL|DECEA|ENR 5\.\d+ - \d+|\d{2} [A-Z]{3} \d{4}|A \d+\/\d{4}.*|.*A \d+\/\d{4} DECEA|Identificação, Nome|Limites laterais|Limite superior|Limite inferior|RMK|\(Horário de atividade.*|natureza do perigo.*|Identification, Name|Lateral Limits|Upper Limit|Lower Limit|\(Time of activity.*|nature of hazard.*|1 2 3)$/;

const areas = []; let a = null, fase = '';
for (const l of linhas) {
  if (LIXO.test(l)) continue;
  const m = l.match(RE_ID);
  if (m) { a = { id: m[1], nome: m[2].replace(/\.$/, ''), coords: [], circ: null, lim: [], rmk: [] }; areas.push(a); fase = 'lat'; continue; }
  if (!a) continue;
  if (fase === 'lat') {
    const cs = [...l.matchAll(RE_COORD)].map(c => [-(+c[1] + c[2] / 60 + c[3] / 3600), -(+c[4] + c[5] / 60 + c[6] / 3600)]);
    const r = l.match(/raio de \/ within a ([\d.,]+)\s*(NM|KM|M)\b/i);
    if (/circular/i.test(l) || r || a.circ) {
      a.circ = a.circ || {};
      if (cs.length) a.circ.c = cs[0];
      if (r) { const v = parseFloat(r[1].replace(',', '.')); a.circ.r = r[2].toUpperCase() === 'NM' ? v * 1852 : r[2].toUpperCase() === 'KM' ? v * 1000 : v; }
      if (!RE_LIM.test(l)) continue;
    } else if (cs.length) { a.coords.push(...cs); continue; }
    if (/^radius\.?$/i.test(l) || /^on$/i.test(l)) continue;
    if (RE_LIM.test(l)) { fase = 'lim'; }
    else { a.notaLateral = (a.notaLateral ? a.notaLateral + ' ' : '') + l; continue; }
  }
  if (fase === 'lim') {
    if (RE_LIM.test(l) && a.lim.length < 2) { a.lim.push(l.replace(/\s+/g, ' ').toUpperCase()); if (a.lim.length === 2) fase = 'rmk'; continue; }
    fase = 'rmk';
  }
  if (fase === 'rmk') a.rmk.push(l);
}

// limite inferior/superior -> { txt, ft, ref }
function lim(t) {
  if (!t) return null;
  if (/^(GND|SFC)$/.test(t)) return { txt: t, ft: 0, ref: 'GND' };
  if (t === 'UNL') return { txt: t, ft: Infinity, ref: 'UNL' };
  let m = t.match(/^FL\s?(\d+)/); if (m) return { txt: 'FL' + m[1], ft: +m[1] * 100, ref: 'FL' };
  m = t.match(/^([\d.,]+)\s*FT\s*(AGL|AMSL|MSL)?/); if (m) return { txt: t, ft: parseFloat(m[1].replace(',', '.')), ref: m[2] === 'AGL' ? 'AGL' : 'AMSL' };
  m = t.match(/^([\d.,]+)\s*M\s*(AGL|AMSL)/); if (m) return { txt: t, ft: parseFloat(m[1].replace(',', '.')) / 0.3048, ref: m[2] };
  return { txt: t, ft: null, ref: '?' };
}

// só o que toca o RS (caixa aproximada do estado)
const noRS = ([la, lo]) => la <= -27.0 && la >= -33.9 && lo <= -49.5 && lo >= -57.8;
const sel = areas.filter(a => (a.circ && a.circ.c ? [a.circ.c] : a.coords).some(noRS));

const pt = x => x.toFixed(5);
const saida = sel.map(a => {
  const rmkPT = []; for (const r of a.rmk) { if (/^[A-Z][a-z]+ (by|under|authorization|activity|operations|flights|jumping|reasons|sporting|combat)|^(Military|Other|Technical|Training|Activated|Under|Parachute|Hanggliding|Acrobatic|Air combat|Aerial|Harbor|Sensitive|Space)/.test(r)) break; rmkPT.push(r); }
  const o = { id: a.id, tipo: a.id[2], nome: a.nome, sup: lim(a.lim[0]), inf: lim(a.lim[1]), rmk: rmkPT.join(' ') };
  if (a.circ) o.circ = { c: a.circ.c.map(v => +pt(v)), r: Math.round(a.circ.r) };
  else o.poly = a.coords.map(c => c.map(v => +pt(v)));
  return o;
});
const problemas = saida.filter(o => !o.sup || !o.inf || o.inf.ref === '?' || (!o.circ && o.poly.length < 3) || (o.circ && !(o.circ.r > 0)));
fs.writeFileSync('eac-rs.js',
`// Espaços Aéreos Condicionados (EAC) que tocam o RS – gerado por ferramentas/extrair-eac.js
// Fonte: ${fonte}, ENR 5.1 (Áreas proibidas – P, restritas – R e perigosas – D).
// NÃO editar à mão: rodar o extrator de novo quando sair nova emenda da AIP.
const EAC_FONTE = ${JSON.stringify(fonte)};
const EAC = ${JSON.stringify(saida, (k, v) => v === Infinity ? 'Infinity' : v, 1).replace(/"Infinity"/g, 'Infinity')};
if (typeof module !== 'undefined') module.exports = { EAC, EAC_FONTE };
`);
console.log(`${areas.length} áreas na ENR 5.1; ${saida.length} tocam o RS; ${problemas.length} com problema de leitura:`);
for (const p of problemas) console.log('  ', p.id, JSON.stringify(p).slice(0, 200));
