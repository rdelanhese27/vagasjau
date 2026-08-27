# Vagas Jaú e Região

Site estático (HTML + CSS + JS puro, sem backend/banco de dados) com vagas de emprego de Jaú/SP e cidades num raio de até 100km.

## Arquivos

- `index.html` — página única (lista de vagas + tela de detalhes)
- `style.css` — estilos
- `app.js` — lógica (filtros, busca, navegação)
- `data.js` — dados das vagas (variável `JOBS_DATA`), regenerado a cada atualização

## Como hospedar

Qualquer servidor de arquivos estáticos funciona: GitHub Pages, Netlify, Vercel, ou até abrir o `index.html` direto no navegador (duplo clique) — não precisa de servidor, banco de dados ou instalação.

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

## Coleta de dados desta primeira versão

Conforme combinado (orçamento de até R$15 em ferramentas de scraping), a coleta desta versão priorizou Jaú e as cidades maiores/mais próximas (Bauru, Araraquara, São Carlos, Lençóis Paulista, Igaraçu do Tietê, Barra Bonita, Pederneiras, Bariri, Dois Córregos, Itapuí, Mineiros do Tietê, Macatuba). Gasto real ficado em torno de R$8 (bem abaixo do teto).

**229 vagas** reais, coletadas de:
- **Indeed** (busca com raio de 100km a partir de Jaú) — 125 vagas
- **PAT/SINE Jaú** (boletim oficial da Prefeitura, período 24–28/08/2026) — 43 vagas
- **Instagram @vagas.jau** — 31 publicações
- **LinkedIn Jobs** (via agregador) — 20 vagas
- **Vagas.com** — 6 vagas
- **Facebook (grupo "Vagas de Emprego Jaú e Região")** — 4 vagas

Todas com data de publicação nos últimos 30 dias e duplicatas removidas.

### Limitações a saber
- **Catho, InfoJobs e Gupy** foram consultados via um agregador, mas não retornaram vagas específicas da região nesta rodada (essas plataformas concentram vagas nas grandes cidades do estado; o pouco que retornou de InfoJobs/Vagas.com/LinkedIn para a região está incluído acima).
- **Telegram**: não foi encontrado nenhum canal público específico da região de Jaú (só canais estaduais/nacionais genéricos, fora do escopo).
- **Instagram/Facebook**: só a conta @vagas.jau e o grupo "Vagas de Emprego Jaú e Região" tinham conteúdo relevante e público; outras cidades da região não têm páginas equivalentes ativas encontradas.
- Cidades menores (Torrinha, Boa Esperança do Sul, Duartina, etc.) tendem a ter pouquíssimas vagas publicadas *online* — o boletim do PAT/SINE de cada prefeitura costuma ser a fonte mais rica para essas cidades, mas só o de Jaú foi consultado nesta rodada.
- Para ampliar a cobertura (mais cidades, mais boletins de PAT/SINE das prefeituras vizinhas, mais grupos), é só pedir uma nova rodada de coleta.

## Atualizar os dados

Basta gerar um novo `data.js` (mesmo formato: `var JOBS_DATA = [...]`, um objeto por vaga com os campos `id, cidade, titulo, empresa, salario, data_publicacao, descricao, candidatura, fonte_nome, fonte_url`) e substituir o arquivo. O site não precisa de mais nenhuma alteração.

## Sugestões de nome de domínio (.com.br)

Verificação informal via WHOIS público — confirme a disponibilidade final e registre em https://registro.br antes de decidir:

- **vagasjau.com.br**
- **empregosjau.com.br**
- **trampojau.com.br**
- **jauvagas.com.br**
- **vagasregiaojau.com.br**
- **oportunidadejau.com.br**
