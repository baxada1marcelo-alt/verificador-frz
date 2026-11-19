# Histórico de versões

## v10 – 19/11/2026
- Inclui as mudanças da v9 (não publicada separadamente).
- **Altura em pés ou metros:** ao lado do campo "Altura máxima" há um seletor pés (ft) / metros (m). O cálculo continua em pés, porque as tabelas da ICA 100-40 estão em ft (1 ft = 0,3048 m). Ao trocar a unidade, o número do campo é convertido, e a escolha fica lembrada neste navegador.
- Os campos de altura e raio aceitam qualquer número (antes o navegador podia recusar, por exemplo, 105 ft ou raio 120 m).
- Conferido com prints do SARPAS (SBSM, 10 ft, raio 100 m): ponto no setor F da ZAD → SARPAS "Não aceito – ZAD SBSM" e verificador "Entra".

## v9 – 19/11/2026
- SBSM: a RWY 02/20 (fechada pelo SUP N0057 até 26/04/2029) continua **fora** do cálculo, por decisão do Sgt Marcelo.
- O aviso da SBSM agora diz que o SARPAS ainda considera a 02/20 e pode mostrar conflito a mais.

## v8 – 19/11/2026
- **Regra da altura conferida no SARPAS** (prints de 19/11/2026, ponto no setor B da SBSM): a 100 ft o SARPAS deu "Aprovação automática"; a 105 ft deu conflito com FRZ e Termo de Coordenação obrigatório.
- A regra passou de "altura ≥ piso" para **"altura > piso"** (voar exatamente na altura do anel não entra). No anel A/F (desde o solo) qualquer voo entra.
- Último anel (E/J): até 400 ft não entra; acima de 400 ft fica "confirmar no SARPAS".
- Textos da página explicam o caso "exatamente no piso".

## v7 – 19/11/2026
- Comparado com o SARPAS (print de 19/11/2026, ponto em Santa Maria a 390 ft, heliponto SDWY): a detecção de FRZ coincide; o "Não aceito" do SARPAS vinha do **prazo de antecedência**.
- Novo campo opcional **"Início do voo"** e quadro **"Prazo de antecedência"** (ICA 100-40, Arts. 56 e 57): 30 min / 4 dias / 8 dias conforme o caso; avisa "SARPAS: não aceito – prazo insuficiente", início no passado, pedido com mais de 90 dias e área proibida (Art. 56, V).

## v6 – 19/11/2026
- **Filtro das áreas (EAC)**: liga/desliga por tipo (Proibidas, Restritas, Perigosas) e área por área, com busca e botões "Ligar todas", "Desligar todas" e "Desligar as mediante NOTAM".
- Área desligada some do mapa e não entra na verificação; se o voo tocar uma área desligada, a página avisa ("Filtro: ... não foi considerada").
- A escolha fica guardada neste navegador.

## v5 – 19/11/2026
- **Áreas proibidas (P), restritas (R) e perigosas (D)** – ICA 100-40, Art. 29: 63 áreas que tocam o RS, extraídas da AIP Brasil, ENR 5.1 (emenda AIRAC A 25/2026, efetiva 24 DEC 2026), conferidas com a carta ENRC L1 (29 OCT 2026).
  - P → "OPERAÇÃO PROIBIDA" (Art. 29, I); R → Termo de Coordenação obrigatório (Art. 29, II); D → aviso, TCo dispensado (Art. 29, III).
  - Limite inferior GND/AGL comparado com a altura do voo; limite em AMSL → "confirmar" (depende do terreno), a não ser que comece acima de 4.600 ft + altura do voo; limite em FL → não afeta drones.
- Mapa: áreas P/R/D desenhadas (camada que pode ser ligada/desligada), com nome e limites ao passar o mouse.
- Novo arquivo `eac-rs.js` (dados) e `ferramentas/extrair-eac.js` (gera os dados a partir do PDF da AIP).
- Testes: 6 casos de áreas P/R/D.

## v4 – 19/11/2026
- **Helipontos**: 35 helipontos do RS (AISWEB/ROTAER, 19/11/2026) com FRZ de heliponto (ZEH – ICA 100-40, Art. 15, Fig. 4). Heliponto IFR usa a coluna 1 nas operações padrão/recreativa/etc.; heliponto VFR usa sempre a coluna 2.
- **Último anel (E/J)**: conferido nas vistas de perfil da ICA 100-40/2026 (Figs. 3 e 5) – a FRZ começa em 400 ft nesse anel. Abaixo de 400 ft o resultado é "não entra"; só com 400 ft ou mais fica "confirmar no SARPAS" (acima de 400 ft já vale a segregação do Art. 25).
- Aviso da nota (4) das Figs. 2 e 4 para operação no entorno de estrutura (afastamento mínimo de 500 m do aeroporto / 200 m do heliponto).
- Mapa: helipontos marcados com "H" e anéis da ZEH; aeródromos/helipontos próximos desenhados juntos.
- Testes: 6 novos casos de helipontos.
- Botão **"Limpar dados"**: volta todos os campos ao início (coordenada, altura 200 ft, raio 0, Recreativa) e apaga o resultado e o ponto do mapa.

## v3 – 19/11/2026
- Mapa com **imagem de satélite** (Esri) e opção de mapa de ruas (OpenStreetMap), com zoom e arrastar (biblioteca Leaflet).
- FRZ desenhadas por cima do satélite, com controle de transparência ("Cor das FRZ").
- Pistas e nomes dos aeródromos no mapa; ponto do voo e raio da área marcados.
- Sem internet, a página volta a usar o mapa desenhado simples da v2.
- Lógica de cálculo (frz.js) sem mudanças.

## v2 – 19/11/2026
- Escala do mapa até ± 50 km (opções de 20, 30 e 50 km).
- Barra de escala ajustada automaticamente.

## v1 – 19/11/2026
- Primeira versão: verificação de FRZ de aeródromos do RS (ZEA/ZAD, ICA 100-40 Art. 14).
- Conclusão sobre Termo de Coordenação (Art. 28), avisos dos Arts. 25 e 32.
- Mapa desenhado das FRZ; entrada de coordenada decimal ou GMS, ou clique no mapa.
- 10 aeródromos cadastrados (dados AISWEB 19/11/2026).
