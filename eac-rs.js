// Espaços Aéreos Condicionados (EAC) que tocam o RS – gerado por ferramentas/extrair-eac.js
// Fonte: AIP Brasil – Emenda AIRAC A 25/2026 (publicada 19 NOV 2026, efetiva 24 DEC 2026), ENR 5.1, ENR 5.1 (Áreas proibidas – P, restritas – R e perigosas – D).
// NÃO editar à mão: rodar o extrator de novo quando sair nova emenda da AIP.
const EAC_FONTE = "AIP Brasil – Emenda AIRAC A 25/2026 (publicada 19 NOV 2026, efetiva 24 DEC 2026), ENR 5.1";
const EAC = [
 {
  "id": "SBP505",
  "tipo": "P",
  "nome": "REFINARIA A. PASQUALINI",
  "sup": {
   "txt": "1000 FT AGL",
   "ft": 1000,
   "ref": "AGL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Indústria química Chemical plant",
  "poly": [
   [
    -29.86722,
    -51.13389
   ],
   [
    -29.88389,
    -51.13389
   ],
   [
    -29.88389,
    -51.18389
   ],
   [
    -29.86722,
    -51.18389
   ]
  ]
 },
 {
  "id": "SBP565",
  "tipo": "P",
  "nome": "COPESUL",
  "sup": {
   "txt": "1000 FT AGL",
   "ft": 1000,
   "ref": "AGL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Outras atividades/motivos",
  "poly": [
   [
    -29.84222,
    -51.41722
   ],
   [
    -29.84222,
    -51.36556
   ],
   [
    -29.87194,
    -51.36556
   ],
   [
    -29.87194,
    -51.38278
   ],
   [
    -29.89361,
    -51.38278
   ],
   [
    -29.89361,
    -51.36556
   ],
   [
    -29.90722,
    -51.35722
   ],
   [
    -29.90722,
    -51.41722
   ]
  ]
 },
 {
  "id": "SBP568",
  "tipo": "P",
  "nome": "ITAARA",
  "sup": {
   "txt": "5000 FT AMSL",
   "ft": 5000,
   "ref": "AMSL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Outras atividades/motivos",
  "poly": [
   [
    -29.52556,
    -53.75889
   ],
   [
    -29.52556,
    -53.80889
   ],
   [
    -29.56722,
    -53.80889
   ],
   [
    -29.56722,
    -53.75889
   ]
  ]
 },
 {
  "id": "SBP597",
  "tipo": "P",
  "nome": "CHARQUEADAS",
  "sup": {
   "txt": "2000 FT AGL",
   "ft": 2000,
   "ref": "AGL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Outras atividades/motivos Área de Segurança Prisional",
  "circ": {
   "c": [
    -29.9525,
    -51.59556
   ],
   "r": 6000
  }
 },
 {
  "id": "SBP599",
  "tipo": "P",
  "nome": "OSÓRIO",
  "sup": {
   "txt": "2000 FT AGL",
   "ft": 2000,
   "ref": "AGL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Outras atividades/motivos Área de Segurança Prisional",
  "poly": [
   [
    -29.93333,
    -50.225
   ],
   [
    -29.93333,
    -50.25833
   ],
   [
    -29.96667,
    -50.25833
   ],
   [
    -29.96667,
    -50.225
   ]
  ]
 },
 {
  "id": "SBR108",
  "tipo": "R",
  "nome": "Paramotor Santo Antônio",
  "sup": {
   "txt": "3000 FT AMSL",
   "ft": 3000,
   "ref": "AMSL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "SAT, SUN, HOL HJ Parapente Treinamento Voos ultraleves ACFT não participantes deverão manter contato bilateral e coordenar o ingresso do EAC na frequência 123.45 Mhz Paragliding",
  "circ": {
   "c": [
    -28.83917,
    -55.59694
   ],
   "r": 3704
  }
 },
 {
  "id": "SBR500",
  "tipo": "R",
  "nome": "SANTA CRUZ DO SUL",
  "sup": {
   "txt": "FL240",
   "ft": 24000,
   "ref": "FL"
  },
  "inf": {
   "txt": "FL200",
   "ft": 20000,
   "ref": "FL"
  },
  "rmk": "H24 Sob AUTH ACC Curitiba. Operações militares H24",
  "poly": [
   [
    -29.51722,
    -53.28722
   ],
   [
    -29.08389,
    -52.33389
   ],
   [
    -29.66722,
    -51.83389
   ],
   [
    -29.95056,
    -51.90056
   ],
   [
    -29.95056,
    -52.16722
   ],
   [
    -29.76722,
    -53.00056
   ]
  ]
 },
 {
  "id": "SBR501",
  "tipo": "R",
  "nome": "BUTIÁ",
  "sup": {
   "txt": "FL230",
   "ft": 23000,
   "ref": "FL"
  },
  "inf": {
   "txt": "1000 FT AGL",
   "ft": 1000,
   "ref": "AGL"
  },
  "rmk": "Ativada mediante NOTAM. Operações militares Outras atividades/motivos",
  "poly": [
   [
    -30.16889,
    -52.36556
   ],
   [
    -30.16889,
    -51.67028
   ],
   [
    -29.94944,
    -51.67222
   ],
   [
    -29.95056,
    -52.36667
   ]
  ]
 },
 {
  "id": "SBR502",
  "tipo": "R",
  "nome": "LAGOA 1",
  "sup": {
   "txt": "UNL",
   "ft": Infinity,
   "ref": "UNL"
  },
  "inf": {
   "txt": "6000 FT AMSL",
   "ft": 6000,
   "ref": "AMSL"
  },
  "rmk": "H24 Ativada pelo APP-PALEGRE/ACC-CURITIBA. Operações militares H24",
  "poly": [
   [
    -29.85833,
    -50.60833
   ],
   [
    -29.55,
    -49.31667
   ],
   [
    -30.5,
    -49.33333
   ],
   [
    -30.14167,
    -50.61667
   ]
  ]
 },
 {
  "id": "SBR503",
  "tipo": "R",
  "nome": "OSÓRIO",
  "sup": {
   "txt": "FL050",
   "ft": 5000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Voos acrobáticos, acrobacias",
  "poly": [
   [
    -29.91722,
    -50.31722
   ],
   [
    -29.88389,
    -50.41722
   ],
   [
    -29.76722,
    -50.16722
   ],
   [
    -29.88389,
    -50.20056
   ]
  ]
 },
 {
  "id": "SBR504",
  "tipo": "R",
  "nome": "TUPA BAIXA",
  "sup": {
   "txt": "5000 FT AMSL",
   "ft": 5000,
   "ref": "AMSL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Ativada pelo APP-SM. Operações militares H24",
  "poly": [
   [
    -29.30389,
    -53.81722
   ],
   [
    -29.32222,
    -53.53889
   ],
   [
    -28.86722,
    -53.34389
   ],
   [
    -28.83889,
    -53.97556
   ]
  ]
 },
 {
  "id": "SBR506",
  "tipo": "R",
  "nome": "LAGOA 2",
  "sup": {
   "txt": "UNL",
   "ft": Infinity,
   "ref": "UNL"
  },
  "inf": {
   "txt": "2000 FT AMSL",
   "ft": 2000,
   "ref": "AMSL"
  },
  "rmk": "H24 Operações militares",
  "poly": [
   [
    -30.18333,
    -50.63333
   ],
   [
    -30.63333,
    -49.38333
   ],
   [
    -31.35833,
    -50.05
   ],
   [
    -30.4,
    -50.83333
   ]
  ]
 },
 {
  "id": "SBR510",
  "tipo": "R",
  "nome": "PINHAL",
  "sup": {
   "txt": "UNL",
   "ft": Infinity,
   "ref": "UNL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "Ativado mediante NOTAM ou SUPLEMENTO AIP. Combate aéreo e exercícios",
  "poly": [
   [
    -29.34222,
    -49.09222
   ],
   [
    -29.45056,
    -49.53389
   ],
   [
    -30.63389,
    -50.15889
   ],
   [
    -31.10889,
    -50.49222
   ],
   [
    -31.40056,
    -50.32556
   ]
  ]
 },
 {
  "id": "SBR512",
  "tipo": "R",
  "nome": "LAGOA 3",
  "sup": {
   "txt": "UNL",
   "ft": Infinity,
   "ref": "UNL"
  },
  "inf": {
   "txt": "2000 FT AMSL",
   "ft": 2000,
   "ref": "AMSL"
  },
  "rmk": "H24 Ativada pelo APP-PALEGRE/ACC-CURITIBA. Operações militares H24",
  "poly": [
   [
    -31.43333,
    -50.19167
   ],
   [
    -30.425,
    -50.875
   ],
   [
    -30.49167,
    -51.19167
   ],
   [
    -31.66667,
    -51.26667
   ]
  ]
 },
 {
  "id": "SBR514",
  "tipo": "R",
  "nome": "LAGOAS",
  "sup": {
   "txt": "UNL",
   "ft": Infinity,
   "ref": "UNL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Ativada pelo APP-SM/ACC CURITIBA. Operações militares H24",
  "poly": [
   [
    -29.32222,
    -53.53889
   ],
   [
    -29.51722,
    -53.28722
   ],
   [
    -29.29389,
    -52.79556
   ],
   [
    -28.86722,
    -53.34389
   ]
  ]
 },
 {
  "id": "SBR515",
  "tipo": "R",
  "nome": "TUPA ALTA",
  "sup": {
   "txt": "FL280",
   "ft": 28000,
   "ref": "FL"
  },
  "inf": {
   "txt": "5000 FT AMSL",
   "ft": 5000,
   "ref": "AMSL"
  },
  "rmk": "H24 Coordenação com o APP-SM/COPM2/ACC-CW. Operações militares H24 Coordination APP-SM/COPM2/ACC-CW.",
  "poly": [
   [
    -29.30389,
    -53.81722
   ],
   [
    -29.32222,
    -53.53889
   ],
   [
    -28.86722,
    -53.34389
   ],
   [
    -28.83889,
    -53.97556
   ]
  ]
 },
 {
  "id": "SBR516",
  "tipo": "R",
  "nome": "QUEVEDOS",
  "sup": {
   "txt": "FL280",
   "ft": 28000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Coordenação com o APP-SM/COPM2/ACC-CW. Operações militares H24 Coordination APP-SM/COPM2/ACC-CW.",
  "poly": [
   [
    -29.48722,
    -54.11722
   ],
   [
    -29.30389,
    -53.81722
   ],
   [
    -28.83889,
    -53.97556
   ],
   [
    -29.24194,
    -54.59111
   ]
  ]
 },
 {
  "id": "SBR517",
  "tipo": "R",
  "nome": "SAICÃ",
  "sup": {
   "txt": "FL230",
   "ft": 23000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Ativada pelo APP-SM/COPM2/ACC CURITIBA. Operações militares H24",
  "poly": [
   [
    -29.86917,
    -55.39167
   ],
   [
    -29.61667,
    -55.25
   ],
   [
    -29.71917,
    -54.48333
   ],
   [
    -29.855,
    -54.4525
   ],
   [
    -30,
    -54.4525
   ],
   [
    -30.11694,
    -54.81694
   ],
   [
    -30.11694,
    -55.16694
   ],
   [
    -29.97417,
    -55.16694
   ],
   [
    -30.0025,
    -55.36667
   ]
  ]
 },
 {
  "id": "SBR518",
  "tipo": "R",
  "nome": "GABRIEL",
  "sup": {
   "txt": "FL240",
   "ft": 24000,
   "ref": "FL"
  },
  "inf": {
   "txt": "8000 FT AMSL",
   "ft": 8000,
   "ref": "AMSL"
  },
  "rmk": "H24 Ativada pelo ACC CURITIBA. Operações militares H24",
  "poly": [
   [
    -29.95556,
    -54.10056
   ],
   [
    -30.58389,
    -55.24222
   ],
   [
    -31.16722,
    -54.41722
   ],
   [
    -30.26722,
    -53.50056
   ]
  ]
 },
 {
  "id": "SBR519",
  "tipo": "R",
  "nome": "BOQUI",
  "sup": {
   "txt": "UNL",
   "ft": Infinity,
   "ref": "UNL"
  },
  "inf": {
   "txt": "FL200",
   "ft": 20000,
   "ref": "FL"
  },
  "rmk": "H24 Ativada pelo APP-SM/ACC-CURITIBA. Operações militares H24",
  "poly": [
   [
    -29.48722,
    -54.11722
   ],
   [
    -29.30389,
    -53.81722
   ],
   [
    -29.32222,
    -53.53889
   ],
   [
    -29.51722,
    -53.28722
   ],
   [
    -29.76722,
    -53.00056
   ],
   [
    -30.26722,
    -53.50056
   ],
   [
    -29.95556,
    -54.10056
   ]
  ]
 },
 {
  "id": "SBR520",
  "tipo": "R",
  "nome": "SEPÉ",
  "sup": {
   "txt": "3000 FT AGL",
   "ft": 3000,
   "ref": "AGL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Operações militares",
  "poly": [
   [
    -29.90056,
    -53.80056
   ],
   [
    -29.90056,
    -53.61722
   ],
   [
    -30.13389,
    -53.56722
   ],
   [
    -30.13389,
    -53.95056
   ]
  ]
 },
 {
  "id": "SBR522",
  "tipo": "R",
  "nome": "PATOS",
  "sup": {
   "txt": "4000 FT AMSL",
   "ft": 4000,
   "ref": "AMSL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 COOR FCA 131.500MHZ. Ativada em coordenação com a Área SBR828 - Patos Alta Voos acrobáticos, acrobacias Treinamento H24 COOR FCA 131.500MHZ. Activated in coordination with Area SBR828 - Patos Alta",
  "poly": [
   [
    -30.155,
    -51.18056
   ],
   [
    -30.14722,
    -50.94722
   ],
   [
    -30.28472,
    -50.75
   ],
   [
    -30.43472,
    -50.9
   ],
   [
    -30.47222,
    -51.14722
   ],
   [
    -30.38611,
    -51.35833
   ]
  ]
 },
 {
  "id": "SBR525",
  "tipo": "R",
  "nome": "SÃO JERÔNIMO BAIXO",
  "sup": {
   "txt": "FL190",
   "ft": 19000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "Ativado mediante NOTAM ou SUPLEMENTO AIP. Salto de Pára-quedas",
  "poly": [
   [
    -29.95056,
    -52.01722
   ],
   [
    -29.95056,
    -51.88389
   ],
   [
    -30.03389,
    -51.88389
   ],
   [
    -30.03389,
    -52.01722
   ]
  ]
 },
 {
  "id": "SBR526",
  "tipo": "R",
  "nome": "SÃO JERÔNIMO ALTA",
  "sup": {
   "txt": "FL270",
   "ft": 27000,
   "ref": "FL"
  },
  "inf": {
   "txt": "FL190",
   "ft": 19000,
   "ref": "FL"
  },
  "rmk": "Ativado mediante NOTAM ou SUPLEMENTO AIP. Exercício de tiro real e/ou lançamento de foguetes. Outras atividades/motivos",
  "poly": [
   [
    -29.95056,
    -52.01722
   ],
   [
    -29.95056,
    -51.88389
   ],
   [
    -30.03389,
    -51.88389
   ],
   [
    -30.03389,
    -52.01722
   ]
  ]
 },
 {
  "id": "SBR527",
  "tipo": "R",
  "nome": "SANTA TECLA",
  "sup": {
   "txt": "FL190",
   "ft": 19000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "Ativado mediante NOTAM ou SUPLEMENTO AIP. Salto de Pára-quedas",
  "poly": [
   [
    -31.25056,
    -54.08389
   ],
   [
    -31.25056,
    -54.00056
   ],
   [
    -31.28389,
    -54.00056
   ],
   [
    -31.28389,
    -54.08389
   ]
  ]
 },
 {
  "id": "SBR529",
  "tipo": "R",
  "nome": "AEROCLUBE DE FREDERICO",
  "sup": {
   "txt": "5000 FT AGL",
   "ft": 5000,
   "ref": "AGL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "HJ Voos acrobáticos, acrobacias",
  "circ": {
   "c": [
    -27.3475,
    -53.40333
   ],
   "r": 5556
  }
 },
 {
  "id": "SBR532",
  "tipo": "R",
  "nome": "SOLEDADE",
  "sup": {
   "txt": "UNL",
   "ft": Infinity,
   "ref": "UNL"
  },
  "inf": {
   "txt": "10000 FT AMSL",
   "ft": 10000,
   "ref": "AMSL"
  },
  "rmk": "Ativado mediante NOTAM ou SUPLEMENTO AIP. Operações militares",
  "poly": [
   [
    -29.29389,
    -52.79556
   ],
   [
    -29.08389,
    -52.33389
   ],
   [
    -28.16722,
    -53.06722
   ],
   [
    -28.86722,
    -53.34389
   ]
  ]
 },
 {
  "id": "SBR533",
  "tipo": "R",
  "nome": "IJUÍ",
  "sup": {
   "txt": "UNL",
   "ft": Infinity,
   "ref": "UNL"
  },
  "inf": {
   "txt": "FL100",
   "ft": 10000,
   "ref": "FL"
  },
  "rmk": "Treinamento Ativada mediante NOTAM ou SUPLEMENTO AIP. Treinamento de ACFT MIL",
  "poly": [
   [
    -28.86722,
    -53.34389
   ],
   [
    -28.16722,
    -53.06722
   ],
   [
    -27.50056,
    -53.61722
   ],
   [
    -27.76722,
    -54.31722
   ],
   [
    -28.83889,
    -53.97556
   ]
  ]
 },
 {
  "id": "SBR534",
  "tipo": "R",
  "nome": "SANTO ÂNGELO",
  "sup": {
   "txt": "UNL",
   "ft": Infinity,
   "ref": "UNL"
  },
  "inf": {
   "txt": "FL100",
   "ft": 10000,
   "ref": "FL"
  },
  "rmk": "Treinamento Ativada mediante NOTAM ou SUPLEMENTO AIP. Treinamento de ACFT MIL",
  "poly": [
   [
    -28.83889,
    -53.97556
   ],
   [
    -27.76722,
    -54.31722
   ],
   [
    -28.00056,
    -54.91722
   ],
   [
    -28.90056,
    -55.24222
   ],
   [
    -29.24194,
    -54.59111
   ]
  ]
 },
 {
  "id": "SBR535",
  "tipo": "R",
  "nome": "SÃO PEDRO",
  "sup": {
   "txt": "UNL",
   "ft": Infinity,
   "ref": "UNL"
  },
  "inf": {
   "txt": "FL200",
   "ft": 20000,
   "ref": "FL"
  },
  "rmk": "H24 Sob coordenação do ACC-CURITIBA. Treinamento H24 under CURITIBA-ACC coordination.",
  "poly": [
   [
    -29.48722,
    -54.11722
   ],
   [
    -28.90056,
    -55.24222
   ],
   [
    -30.24222,
    -55.74222
   ],
   [
    -30.58389,
    -55.24222
   ],
   [
    -29.95556,
    -54.10056
   ]
  ]
 },
 {
  "id": "SBR538",
  "tipo": "R",
  "nome": "BENTO GONCALVES",
  "sup": {
   "txt": "FL085",
   "ft": 8500,
   "ref": "FL"
  },
  "inf": {
   "txt": "FL065",
   "ft": 6500,
   "ref": "FL"
  },
  "rmk": "H24 Voos acrobáticos, acrobacias Treinamento",
  "poly": [
   [
    -29.14222,
    -51.53528
   ],
   [
    -29.205,
    -51.57167
   ],
   [
    -29.23833,
    -51.53528
   ],
   [
    -29.205,
    -51.4
   ]
  ]
 },
 {
  "id": "SBR539",
  "tipo": "R",
  "nome": "INHANDUI",
  "sup": {
   "txt": "FL070",
   "ft": 7000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Atividade técnica",
  "poly": [
   [
    -29.83278,
    -55.99944
   ],
   [
    -29.80694,
    -55.95444
   ],
   [
    -29.84167,
    -55.92694
   ],
   [
    -29.87028,
    -55.97222
   ]
  ]
 },
 {
  "id": "SBR546",
  "tipo": "R",
  "nome": "NOVA PETROPOLIS",
  "sup": {
   "txt": "3000 FT AGL",
   "ft": 3000,
   "ref": "AGL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Asa-delta Parapente",
  "poly": [
   [
    -29.30722,
    -51.06389
   ],
   [
    -29.41722,
    -51.06389
   ],
   [
    -29.41722,
    -51.18889
   ],
   [
    -29.30722,
    -51.18889
   ]
  ]
 },
 {
  "id": "SBR547",
  "tipo": "R",
  "nome": "ELDORADO DO SUL",
  "sup": {
   "txt": "3000 FT AMSL",
   "ft": 3000,
   "ref": "AMSL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "HJ Treinamento",
  "poly": [
   [
    -30.08306,
    -51.5
   ],
   [
    -30.36667,
    -51.5
   ],
   [
    -30.38306,
    -51.65
   ],
   [
    -30.11667,
    -51.65
   ]
  ]
 },
 {
  "id": "SBR551",
  "tipo": "R",
  "nome": "ERECHIM",
  "sup": {
   "txt": "4500 FT AGL",
   "ft": 4500,
   "ref": "AGL"
  },
  "inf": {
   "txt": "1500 FT AGL",
   "ft": 1500,
   "ref": "AGL"
  },
  "rmk": "Voos acrobáticos, acrobacias Treinamento Ativada mediante NOTAM ou SUPLEMENTO AIP.",
  "circ": {
   "c": [
    -27.66,
    -52.27611
   ],
   "r": 9260
  }
 },
 {
  "id": "SBR557",
  "tipo": "R",
  "nome": "TORRES ACROBACIA",
  "sup": {
   "txt": "FL050",
   "ft": 5000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "DLY 1100 - 2030 Ativado através da FCA 123.45MHz quando a SBR805 não estiver ativada. Voos acrobáticos, acrobacias DLY 1100 - 2030",
  "poly": [
   [
    -29.38139,
    -49.82417
   ],
   [
    -29.39806,
    -49.79889
   ],
   [
    -29.42694,
    -49.82389
   ],
   [
    -29.41,
    -49.84861
   ]
  ]
 },
 {
  "id": "SBR569",
  "tipo": "R",
  "nome": "COPESUL 1",
  "sup": {
   "txt": "1000 FT AGL",
   "ft": 1000,
   "ref": "AGL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Tráfego de helicóptero/girocóptero Helicopter/Gyrocopter traffic",
  "poly": [
   [
    -29.87194,
    -51.36556
   ],
   [
    -29.87194,
    -51.38278
   ],
   [
    -29.89361,
    -51.38278
   ],
   [
    -29.89361,
    -51.36556
   ]
  ]
 },
 {
  "id": "SBR574",
  "tipo": "R",
  "nome": "CANELA",
  "sup": {
   "txt": "FL050",
   "ft": 5000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "HJ Voos acrobáticos, acrobacias",
  "poly": [
   [
    -29.21667,
    -50.63944
   ],
   [
    -29.33333,
    -50.63944
   ],
   [
    -29.33333,
    -50.80611
   ],
   [
    -29.21667,
    -50.80611
   ]
  ]
 },
 {
  "id": "SBR585",
  "tipo": "R",
  "nome": "MARIA BAIXA",
  "sup": {
   "txt": "FL140",
   "ft": 14000,
   "ref": "FL"
  },
  "inf": {
   "txt": "7000 FT AMSL",
   "ft": 7000,
   "ref": "AMSL"
  },
  "rmk": "H24 Veículo aéreo não tripulado Unmanned aerial vehicle",
  "poly": [
   [
    -29.55,
    -54.00139
   ],
   [
    -29.60472,
    -53.71778
   ],
   [
    -29.4275,
    -53.71528
   ],
   [
    -29.42,
    -54.00139
   ]
  ]
 },
 {
  "id": "SBR586",
  "tipo": "R",
  "nome": "TAURA BAIXA",
  "sup": {
   "txt": "FL140",
   "ft": 14000,
   "ref": "FL"
  },
  "inf": {
   "txt": "7000 FT AMSL",
   "ft": 7000,
   "ref": "AMSL"
  },
  "rmk": "H24 Sob coordenação com o APP-SM/ACC-CW. Veículo aéreo não tripulado H24",
  "poly": [
   [
    -29.90083,
    -53.80083
   ],
   [
    -29.90083,
    -53.6175
   ],
   [
    -30.13417,
    -53.5675
   ],
   [
    -30.13417,
    -53.76083
   ],
   [
    -30.06083,
    -53.90389
   ]
  ]
 },
 {
  "id": "SBR587",
  "tipo": "R",
  "nome": "MARIA ALTA",
  "sup": {
   "txt": "FL180",
   "ft": 18000,
   "ref": "FL"
  },
  "inf": {
   "txt": "FL140",
   "ft": 14000,
   "ref": "FL"
  },
  "rmk": "H24 Sob coordenação com o APP-SM/ACC-CW. Veículo aéreo não tripulado H24 under coordination APP-SM/ACC-CW. Unmanned aerial vehicle",
  "poly": [
   [
    -29.55,
    -54.00139
   ],
   [
    -29.60472,
    -53.71778
   ],
   [
    -29.4275,
    -53.71528
   ],
   [
    -29.42,
    -54.00139
   ]
  ]
 },
 {
  "id": "SBR588",
  "tipo": "R",
  "nome": "TAURA ALTA",
  "sup": {
   "txt": "FL180",
   "ft": 18000,
   "ref": "FL"
  },
  "inf": {
   "txt": "FL140",
   "ft": 14000,
   "ref": "FL"
  },
  "rmk": "H24 Sob coordenação com o APP-SM/ACC-CW. Veículo aéreo não tripulado H24 under coordination APP-SM/ACC-CW. Unmanned aerial vehicle",
  "poly": [
   [
    -29.90083,
    -53.80083
   ],
   [
    -29.90083,
    -53.6175
   ],
   [
    -30.13417,
    -53.5675
   ],
   [
    -30.13417,
    -53.76083
   ],
   [
    -30.06083,
    -53.90389
   ]
  ]
 },
 {
  "id": "SBR589",
  "tipo": "R",
  "nome": "CISM",
  "sup": {
   "txt": "FL145",
   "ft": 14500,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "Ativada mediante NOTAM. Outras atividades/motivos Exercício de tiro real.",
  "poly": [
   [
    -29.71222,
    -53.79389
   ],
   [
    -29.80056,
    -53.79389
   ],
   [
    -29.80056,
    -53.89556
   ],
   [
    -29.71222,
    -53.89556
   ]
  ]
 },
 {
  "id": "SBR593",
  "tipo": "R",
  "nome": "NOVO HAMBURGO",
  "sup": {
   "txt": "4000 FT AMSL",
   "ft": 4000,
   "ref": "AMSL"
  },
  "inf": {
   "txt": "1500 FT AMSL",
   "ft": 1500,
   "ref": "AMSL"
  },
  "rmk": "HJ Planador Salto de Pára-quedas Treinamento Gliding",
  "poly": [
   [
    -29.58389,
    -51.14222
   ],
   [
    -29.58389,
    -51.03389
   ],
   [
    -29.76722,
    -51.03389
   ],
   [
    -29.76722,
    -51.14222
   ]
  ]
 },
 {
  "id": "SBR800",
  "tipo": "R",
  "nome": "São Pio",
  "sup": {
   "txt": "1000 FT AMSL",
   "ft": 1000,
   "ref": "AMSL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "DLY 1000 - SS Mediante COOR APP SANTA MARIA Asa-delta Parapente DLY 1000 - SS",
  "circ": {
   "c": [
    -29.58056,
    -53.39806
   ],
   "r": 3704
  }
 },
 {
  "id": "SBR801",
  "tipo": "R",
  "nome": "Campo de Instrução Rincão",
  "sup": {
   "txt": "FL190",
   "ft": 19000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "HJ Operações militares",
  "poly": [
   [
    -28.80028,
    -55.63722
   ],
   [
    -28.75417,
    -55.63778
   ],
   [
    -28.75056,
    -55.58528
   ],
   [
    -28.80278,
    -55.55528
   ]
  ]
 },
 {
  "id": "SBR803",
  "tipo": "R",
  "nome": "Voo Livre Jaguari",
  "sup": {
   "txt": "FL080",
   "ft": 8000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "SAT, SUN, HOL HJ Asa-delta Parapente",
  "poly": [
   [
    -29.35583,
    -54.67833
   ],
   [
    -29.42417,
    -54.8425
   ],
   [
    -29.61806,
    -54.87028
   ],
   [
    -29.61806,
    -54.7425
   ],
   [
    -29.54,
    -54.64472
   ],
   [
    -29.35667,
    -54.63333
   ]
  ]
 },
 {
  "id": "SBR805",
  "tipo": "R",
  "nome": "SSTE - AEROPORTO DE TORRES-RS",
  "sup": {
   "txt": "FL140",
   "ft": 14000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "DLY SR - 0250 ATIVADA MEDIANTE COORDENAÇÃO COM A",
  "circ": {
   "c": [
    -29.415,
    -49.81
   ],
   "r": 18520
  }
 },
 {
  "id": "SBR808",
  "tipo": "R",
  "nome": "Paraquedismo Novo Hamburgo SSNH",
  "sup": {
   "txt": "FL150",
   "ft": 15000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "DLY SR - 0259 ATIVADA SOMENTE MEDIANTE DESATIVAÇÃO DA SBR593 Salto de Pára-quedas DLY SR - 0259 ACTIVATED ONLY BY DEACTIVATION OF SBR593",
  "circ": {
   "c": [
    -29.69583,
    -51.08167
   ],
   "r": 5556
  }
 },
 {
  "id": "SBR815",
  "tipo": "R",
  "nome": "PRESIDENTE GETULIO",
  "sup": {
   "txt": "FL050",
   "ft": 5000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "HJ Parapente Paragliding",
  "circ": {
   "c": [
    -27.07778,
    -49.6325
   ],
   "r": 5556
  }
 },
 {
  "id": "SBR828",
  "tipo": "R",
  "nome": "PATOS ALTA",
  "sup": {
   "txt": "FL150",
   "ft": 15000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 SUBJ AUTH/COOR APP PORTO ALEGRE de 3500FT TIL FL150 e COOR FCA 131.50Mhz do GND TIL 3500FT AMSL. Ativada mediante COOR com a SBR 522. Salto de Pára-quedas H24 SUBJ AUTH/COOR PORTO ALEGRE APP of 3500FT TIL FL150 and COOR FCA 131.50Mhz of GND TIL 3500FT AMSL. Activated by COOR with the SBR 522.",
  "circ": {
   "c": [
    -30.18917,
    -51.1825
   ],
   "r": 4074
  }
 },
 {
  "id": "SBR835",
  "tipo": "R",
  "nome": "PARQUE NATURAL DOS MORROS",
  "sup": {
   "txt": "2500 FT AMSL",
   "ft": 2500,
   "ref": "AMSL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "DLY 1300 - SS Parapente Paragliding",
  "poly": [
   [
    -29.64806,
    -53.81778
   ],
   [
    -29.66194,
    -53.80028
   ],
   [
    -29.6725,
    -53.80028
   ],
   [
    -29.67222,
    -53.84028
   ],
   [
    -29.6525,
    -53.84139
   ]
  ]
 },
 {
  "id": "SBR851",
  "tipo": "R",
  "nome": "ACROBACIA ALEGRETE",
  "sup": {
   "txt": "5000 FT AMSL",
   "ft": 5000,
   "ref": "AMSL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "DLY 1000 - 2100 Coordenado mediante FCA 123.45MHz Voos acrobáticos, acrobacias Treinamento DLY 1000 - 2100",
  "poly": [
   [
    -29.79417,
    -55.89278
   ],
   [
    -29.80583,
    -55.87722
   ],
   [
    -29.81611,
    -55.8875
   ],
   [
    -29.80444,
    -55.90306
   ]
  ]
 },
 {
  "id": "SBR852",
  "tipo": "R",
  "nome": "ACROBACIA PAPAGAERO",
  "sup": {
   "txt": "FL060",
   "ft": 6000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "DLY 1100 - 2000 Ativado mediante coordenação na frequência 123.45 MHz Voos acrobáticos, acrobacias Treinamento DLY 1100 - 2000",
  "circ": {
   "c": [
    -27.18056,
    -52.05111
   ],
   "r": 1852
  }
 },
 {
  "id": "SBR854",
  "tipo": "R",
  "nome": "PARAMOTOR CAPAO DA CANOA",
  "sup": {
   "txt": "3000 FT AMSL",
   "ft": 3000,
   "ref": "AMSL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "HJ Parapente Paragliding",
  "poly": [
   [
    -31.28444,
    -52.29972
   ],
   [
    -31.36417,
    -51.92944
   ],
   [
    -31.17778,
    -51.63694
   ],
   [
    -30.99833,
    -52.41611
   ]
  ]
 },
 {
  "id": "SBD265",
  "tipo": "D",
  "nome": "BALÃO SÃO MIGUEL DAS MISSÕES",
  "sup": {
   "txt": "2000 FT AGL",
   "ft": 2000,
   "ref": "AGL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "DLY 0800 - 1200, DLY 1900 - 2230 Balões de ar quente Hot air balloons",
  "circ": {
   "c": [
    -28.54083,
    -54.55778
   ],
   "r": 5000
  }
 },
 {
  "id": "SBD338",
  "tipo": "D",
  "nome": "BALONISMO PRAIA GRANDE",
  "sup": {
   "txt": "FL050",
   "ft": 5000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "DLY 120 MIN AFT SR - 120 MIN BFR SS Balões de ar quente Hot air balloons",
  "circ": {
   "c": [
    -29.19528,
    -49.94778
   ],
   "r": 14816
  }
 },
 {
  "id": "SBD523",
  "tipo": "D",
  "nome": "SAPIRANGA",
  "sup": {
   "txt": "5000 FT AMSL",
   "ft": 5000,
   "ref": "AMSL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "HJ Asa-delta",
  "poly": [
   [
    -29.61722,
    -51.00056
   ],
   [
    -29.65056,
    -50.96722
   ],
   [
    -29.65056,
    -50.86722
   ],
   [
    -29.56722,
    -50.80056
   ],
   [
    -29.50056,
    -50.80056
   ],
   [
    -29.55056,
    -51.00056
   ]
  ]
 },
 {
  "id": "SBD528",
  "tipo": "D",
  "nome": "VOO LIVRE TIMBE BAIXA",
  "sup": {
   "txt": "FL040",
   "ft": 4000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "DLY 1100 - 2100 Asa-delta",
  "poly": [
   [
    -28.78444,
    -49.88
   ],
   [
    -28.82056,
    -49.86778
   ],
   [
    -28.94694,
    -49.86778
   ],
   [
    -28.94694,
    -49.97222
   ],
   [
    -28.85417,
    -49.97222
   ],
   [
    -28.78444,
    -49.89333
   ]
  ]
 },
 {
  "id": "SBD578",
  "tipo": "D",
  "nome": "OBSTÁCULO PORTO ALEGRE 1",
  "sup": {
   "txt": "400 FT AGL",
   "ft": 400,
   "ref": "AGL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Outras atividades/motivos Área com obstáculos violando a ZPA.",
  "poly": [
   [
    -30.01972,
    -51.19611
   ],
   [
    -30.01139,
    -51.19111
   ],
   [
    -30.01139,
    -51.165
   ],
   [
    -30.00333,
    -51.16028
   ],
   [
    -30.00417,
    -51.12611
   ],
   [
    -30.01528,
    -51.12861
   ],
   [
    -30.02111,
    -51.13861
   ],
   [
    -30.02639,
    -51.15972
   ],
   [
    -30.01972,
    -51.17806
   ]
  ]
 },
 {
  "id": "SBD579",
  "tipo": "D",
  "nome": "OBSTACULO PORTO ALEGRE 2",
  "sup": {
   "txt": "600 FT AGL",
   "ft": 600,
   "ref": "AGL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "H24 Outras atividades/motivos Área com obstáculos violando a ZPA.",
  "poly": [
   [
    -30.03306,
    -51.21139
   ],
   [
    -30.01972,
    -51.20417
   ],
   [
    -30.01972,
    -51.17806
   ],
   [
    -30.02639,
    -51.15972
   ],
   [
    -30.02111,
    -51.13861
   ],
   [
    -30.03444,
    -51.13083
   ],
   [
    -30.04139,
    -51.15778
   ],
   [
    -30.04056,
    -51.18611
   ]
  ]
 },
 {
  "id": "SBD584",
  "tipo": "D",
  "nome": "VOO LIVRE TIMBE ALTA",
  "sup": {
   "txt": "FL080",
   "ft": 8000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "DLY 1100 - 2100 Parapente Paragliding DECEA A 25/2026",
  "poly": [
   [
    -28.78444,
    -49.89333
   ],
   [
    -28.85417,
    -49.97222
   ],
   [
    -28.78444,
    -49.97139
   ]
  ]
 },
 {
  "id": "SBD856",
  "tipo": "D",
  "nome": "Torres Balonismo",
  "sup": {
   "txt": "FL080",
   "ft": 8000,
   "ref": "FL"
  },
  "inf": {
   "txt": "GND",
   "ft": 0,
   "ref": "GND"
  },
  "rmk": "DLY 1800 - SS, DLY SR - 1200 Ativada mediante coordenação com a SBR805 SSTE - Aeroporto de Torres-RS Balões de ar quente DLY 1800 - SS, DLY SR - 1200",
  "poly": [
   [
    -29.37972,
    -49.75361
   ],
   [
    -29.36361,
    -49.77778
   ],
   [
    -29.37583,
    -49.78944
   ],
   [
    -29.365,
    -49.82444
   ],
   [
    -29.32111,
    -49.83556
   ],
   [
    -29.2775,
    -49.82111
   ],
   [
    -29.25722,
    -49.7975
   ],
   [
    -29.24889,
    -49.75694
   ],
   [
    -29.25583,
    -49.73306
   ],
   [
    -29.27083,
    -49.7075
   ],
   [
    -29.29278,
    -49.69333
   ]
  ]
 }
];
if (typeof module !== 'undefined') module.exports = { EAC, EAC_FONTE };
