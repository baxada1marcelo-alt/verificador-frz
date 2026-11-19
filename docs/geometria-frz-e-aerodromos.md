# Geometria das FRZ e dados de aeródromos

Pesquisado em 19/11/2026. Fontes externas à legislação estão indicadas — conferir antes de uso oficial.

## 1. Como as zonas são medidas

A ICA 100-40/2026 (Art. 7º, LXII a LXIV) só traz definições curtas de ZAD, ZEA e ZEH. A geometria detalhada estava na **ICA 100-40/2023** (revogada, itens 2.1.69 a 2.1.71) e na MCA 56-5/2023. Como as distâncias da tabela de 2026 são as mesmas de 2023, essa geometria é usada como **referência interpretativa** (não é texto vigente):

- **ZAD** – linha perpendicular ao eixo da pista na cabeceira, 150 m para cada lado, abrindo 20° para cada lado; distância medida **a partir da cabeceira**. (Bate com a Figura 2 de 2026: "300 m" e "20°".)
- **ZEA** – origem no **eixo da pista**; limite variável em função da altura (formato oval da Figura 2). Exclui a ZAD.
- **ZEH** – círculo a partir do **ARP do heliponto**.

Fontes: ICA 100-40/2023 (decea.mil.br/drone/docs); MCA 56-5/2023; Glossário Anatel (ZAD).

## 2. Leitura da tabela (distância × altura)

Cada setor é um anel com um **piso de altura**; a FRZ começa no piso indicado.

Exemplo – aeroporto, ZAD, coluna 1 (recreativa/padrão):
- até 3550 m da cabeceira (setor F): FRZ desde o solo (0 ft);
- 3550–4480 m (G): a partir de 100 ft;
- 4480–5400 m (H): a partir de 200 ft;
- 5400–6320 m (I): a partir de 300 ft;
- além de 6320 m (J): a partir de 400 ft.

Mesma lógica para ZEA (A a E) e ZEH. **Há interseção com FRZ (Art. 28 → Termo de Coordenação obrigatório) quando a altura máxima do voo ≥ piso do setor onde está o ponto.**

Pendências:
- (a) validar esta interpretação comparando com o SARPAS;
- (b) o limite externo do último setor (E/J) não está definido no texto encontrado (o Verificador responde "confirmar no SARPAS").

## 3. Aeródromos cadastrados – principais do RS

Fonte: AISWEB/DECEA (aisweb.decea.mil.br/?i=aerodromos&codigo=XXXX), consultado em 19/11/2026. Coordenadas das cabeceiras conferidas por cálculo contra o comprimento da pista (diferenças ≤ 25 m, exceto SBPK, explicada pela cabeceira deslocada). Nenhum tem heliponto listado no AISWEB. Antes de cada análise, verificar NOTAM/AIP SUP vigentes.

| Aeródromo | Cidade | Tipo | Regras | ARP | Pista | Cabeceiras | Observações |
|---|---|---|---|---|---|---|---|
| SBSM – Santa Maria | Santa Maria | PUB/MIL | VFR/IFR | 29°42'39"S 053°41'32"W | 11/29 – 2694×45 | 11: S29°42'38" W053°42'14" · 29: S29°42'43" W053°40'34" | — |
| SBSM | Santa Maria | | | | 02/20 – 1505×30 | 02: S29°43'17" W053°41'19" · 20: S29°42'28" W053°41'17" | **Fechada (SUP N0057) até 26/04/2029 – não considerar enquanto fechada** |
| SBPA – Salgado Filho | Porto Alegre | PUB | VFR/IFR | 29°59'41"S 051°10'16"W | 11/29 – 3200×45 | 11: S29°59'39.79" W051°10'58.82" · 29: S29°59'42.14" W051°08'59.46" | — |
| SBCO – Canoas | Canoas | MIL | VFR/IFR | 29°56'44"S 051°08'37"W | 13/31 – 2751×45 | 13: S29°56'31" W051°09'28" · 31: S29°57'00" W051°07'51" | Conferir coordenadas |
| SBCX – Hugo Cantergiani | Caxias do Sul | PUB | VFR/IFR | 29°11'53"S 051°11'12"W | 15/33 – 1670×30 | 15: S29°11'33" W051°11'34" · 33: S29°12'12" W051°10'50" | Últimos 90 m da RWY 15 fechados |
| SBPF – Lauro Kurtz | Passo Fundo | PUB | VFR/IFR | 28°14'39"S 052°19'42"W | 09/27 – 1680×30 | 09: S28°14'49" W052°20'11" · 27: S28°14'29" W052°19'14" | — |
| SBPK – João Simões Lopes Neto | Pelotas | PUB | VFR/IFR | 31°42'58"S 052°19'52"W | 07/25 – 1823×42 | 07: S31°43'16" W052°20'01" · 25: S31°42'42" W052°19'11" | Cabeceira 07 deslocada 140 m |
| SBBG – Cmte Gustavo Kraemer | Bagé | PUB | VFR/IFR | 31°23'27"S 054°06'35"W | 06/24 – 1500×30 | 06: S31°23'42.70" W054°07'03.88" · 24: S31°23'09.00" W054°06'22.87" | — |
| SBUG – Rubem Berta | Uruguaiana | PUB INTL | VFR/IFR | 29°47'00"S 057°02'13"W | 10/28 – 1304×30 | 10: S29°46'57.29" W057°02'40.11" · 28: S29°46'53.48" W057°01'51.74" | — |
| SBNM – Santo Ângelo | Santo Ângelo | PUB | VFR/IFR | 28°16'54"S 054°10'06"W | 12/30 – 1625×30 | 12: S28°16'52" W054°10'40" · 30: S28°17'02" W054°09'41" | — |
| SJRG – Regional de Rio Grande | Rio Grande | PUB | **VFR** | 32°05'01"S 052°10'04"W | 06/24 – 1900×30 | **Não informadas no AISWEB** | Cabeceiras pendentes |
