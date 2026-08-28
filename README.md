# Vagas Jaú e Região

Site estático (HTML + CSS + JS puro, sem backend/banco de dados) com vagas de emprego de Jaú/SP e cidades num raio de até 100km.

## Arquivos

- `index.html` — página única (lista de vagas + tela de detalhes)
- `style.css` — estilos
- `app.js` — lógica (filtros, busca, navegação)
- `data.js` — dados das vagas (variável `JOBS_DATA`), regenerado a cada atualização

## Cidades confirmadas (raio até 100km de Jaú/SP)

Distância em linha reta calculada a partir das coordenadas oficiais de cada sede municipal (a lista original enviada foi conferida e todas as 27 cidades ficaram dentro do raio de 100km):

| Cidade | Distância de Jaú |
|---|---|
| Mineiros do Tietê | 16,8 km |
| Itapuí | 18,0 km |
| Dois Córregos | 19,9 km |
| Barra Bonita | 21,7 km |
| Pederneiras | 23,2 km |
| Igaraçu do Tietê | 23,8 km |
| Macatuba | 27,9 km |
| Bariri | 31,3 km |
| Boa Esperança do Sul | 37,9 km |
| Lençóis Paulista | 41,9 km |
| Torrinha | 42,5 km |
| Areiópolis | 42,8 km |
| Itaju | 43,2 km |
| Brotas | 44,6 km |
| Ribeirão Bonito | 46,8 km |
| Agudos | 48,2 km |
| Bauru | 54,5 km |
| Piratininga | 60,7 km |
| Tabatinga | 65,7 km |
| Iacanga | 65,9 km |
| Ibitinga | 66,0 km |
| Araraquara | 69,0 km |
| São Carlos | 76,2 km |
| Avaí | 81,7 km |
| Duartina | 88,0 km |
| Borborema | 92,1 km |
| Presidente Alves | 93,2 km |

Observação: "Itaju" é um município real de SP (vizinho de Ibitinga, Bariri, Arealva e Iacanga) — a lista original estava correta, apesar de ser um nome fácil de confundir com "Itajobi" ou cidades de mesmo nome em outros estados.
