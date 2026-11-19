# CLAUDE.md – Verificador FRZ (Drones RS)

Contexto para o Claude Code trabalhar neste projeto.

## Quem usa e para quê
- Dono: Sgt Marcelo da Rocha – DTCEA-SM (Santa Maria/RS). Não é programador: explique tudo em passos simples, em português.
- Objetivo: **abreviar a consulta ao SARPAS**. A partir da coordenada, altura e tipo de voo do drone, dizer rapidamente se o voo entra em alguma **FRZ** (Zona de Restrição de Voo) e, portanto, se precisa de **Termo de Coordenação** (ICA 100-40, Art. 28).
- O SARPAS (DECEA) continua sendo a palavra final. Esta ferramenta é **orientação prévia**.

## Arquivos
- `index.html` – a página (abre direto no navegador). Carrega `frz.js`.
- `frz.js` – toda a lógica: dados dos aeródromos, tabelas da ICA 100-40 e cálculo das zonas. Funciona no navegador e no Node.
- `testes/teste-frz.js` – testes da lógica: `node testes/teste-frz.js`.
- `docs/diretrizes-de-resposta.md` – regras de resposta e tabelas da norma.
- `docs/geometria-frz-e-aerodromos.md` – geometria das zonas, interpretação da altura e dados dos aeródromos (fontes).
- `CHANGELOG.md` – histórico de versões.

## Regras de cálculo (resumo)
- **ZEA**: distância ao eixo da pista (segmento entre as cabeceiras). Tabela coluna 1: 1740/2350/2960/3570 m → pisos 0/100/200/300/400 ft.
- **ZAD**: em cada cabeceira, base de 300 m (150 m para cada lado) abrindo 20° para cada lado; distância à cabeceira. Coluna 1: 3550/4480/5400/6320 m.
- **Coluna 2** (Aérea Especial e Entorno de estrutura): ZEA 1130/1740/2350/2960; ZAD 1700/2630/3550/4480.
- **Entra em FRZ** quando altura máxima ≥ piso do anel (interpretação ainda em validação contra o SARPAS).
- Último anel (E/J): limite externo não definido na norma → resultado "confirmar no SARPAS".
- Área com raio: amostra centro + 2 anéis de 24 pontos e usa o pior caso.
- SBSM RWY 02/20 está fechada (SUP N0057, até 26/04/2029) → não considerar enquanto fechada.
- SJRG: cabeceiras não publicadas → resultado "indefinido".

## Regras de trabalho
- **Não inventar.** Toda regra deve vir da legislação (ICA 100-40/2026, RBAC-E 94, RBAC 100, Resolução ANAC 806/2026) ou de fonte oficial (AISWEB/DECEA). Se houver dúvida, perguntar ao Marcelo e avisar que não há certeza.
- Linguagem simples nas mensagens da página; citar artigo da norma.
- Ao mudar a lógica, rodar os testes e atualizar `CHANGELOG.md`.
- Versionar: subir a versão (v2 → v3…) no cabeçalho do `index.html` e no CHANGELOG, com data.

## Pendências
1. Validar a regra da altura comparando com pedidos reais no SARPAS.
2. Limite externo dos setores E/J.
3. Cabeceiras do SJRG (Rio Grande).
4. Conferir coordenadas das cabeceiras de SBCO (Canoas).
5. Incluir helipontos, FRZ de áreas de segurança (Arts. 13/16) e EAC (Art. 29) quando houver dados.
6. Se publicado no GitHub Pages, dá para colocar mapa com imagem de satélite (no Claude.ai isso é bloqueado).
