// Vagas Jau e Regiao - logica do site (JS puro, sem dependencias)

// Jaú fica sempre em primeiro (é a cidade padrão); as demais estão em ordem alfabética.
var CIDADES = [
  "Jaú",
  "Agudos", "Araraquara", "Areiópolis", "Avaí", "Bariri", "Barra Bonita", "Bauru",
  "Boa Esperança do Sul", "Borborema", "Brotas", "Dois Córregos", "Duartina", "Iacanga",
  "Ibitinga", "Igaraçu do Tietê", "Itaju", "Itapuí", "Lençóis Paulista", "Macatuba",
  "Mineiros do Tietê", "Pederneiras", "Piratininga", "Presidente Alves", "Ribeirão Bonito",
  "São Carlos", "Tabatinga", "Torrinha"
];

var CIDADE_PADRAO = "Jaú";

function porExtenso(dataStr) {
  if (!dataStr) { return "Data não informada"; }
  var partes = dataStr.split("-");
  if (partes.length !== 3) { return dataStr; }
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

function limitar(texto, n) {
  texto = texto || "";
  if (texto.length <= n) { return texto; }
  return texto.substring(0, n) + "...";
}

function escapeHtml(s) {
  s = (s === null || s === undefined) ? "" : String(s);
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function popularCidades() {
  var sel = document.getElementById("filtroCidade");
  var optTodas = document.createElement("option");
  optTodas.value = "";
  optTodas.text = "Todas as cidades";
  sel.appendChild(optTodas);

  for (var i = 0; i < CIDADES.length; i++) {
    var opt = document.createElement("option");
    opt.value = CIDADES[i];
    opt.text = CIDADES[i];
    if (CIDADES[i] === CIDADE_PADRAO) { opt.selected = true; }
    sel.appendChild(opt);
  }
}

function getJobById(id) {
  for (var i = 0; i < JOBS_DATA.length; i++) {
    if (JOBS_DATA[i].id === id) { return JOBS_DATA[i]; }
  }
  return null;
}

function filtrarVagas() {
  var cidade = document.getElementById("filtroCidade").value;
  var termo = document.getElementById("campoBusca").value.toLowerCase().replace(/^\s+|\s+$/g, "");

  var resultado = [];
  for (var i = 0; i < JOBS_DATA.length; i++) {
    var v = JOBS_DATA[i];
    if (cidade && v.cidade !== cidade) { continue; }
    if (termo) {
      var alvo = (v.titulo + " " + (v.empresa || "") + " " + (v.descricao || "")).toLowerCase();
      if (alvo.indexOf(termo) === -1) { continue; }
    }
    resultado.push(v);
  }
  resultado.sort(function (a, b) {
    return a.titulo.localeCompare(b.titulo, "pt-BR", { sensitivity: "base" });
  });
  return resultado;
}

function renderLista() {
  var lista = filtrarVagas();
  var container = document.getElementById("listaVagas");
  var contagem = document.getElementById("contagem");

  contagem.textContent = lista.length + (lista.length === 1 ? " vaga encontrada" : " vagas encontradas");

  if (lista.length === 0) {
    container.innerHTML = '<div class="vazio">Nenhuma vaga encontrada com esses filtros. Tente escolher "Todas as cidades" ou outra palavra-chave.</div>';
    return;
  }

  var html = "";
  for (var i = 0; i < lista.length; i++) {
    var v = lista[i];
    var snippet = limitar(v.descricao, 100);
    html += '<div class="vaga-card">';
    html += '<span class="cidade-tag">' + escapeHtml(v.cidade) + '</span>';
    html += '<h2>' + escapeHtml(v.titulo) + '</h2>';
    html += '<p class="empresa">' + escapeHtml(v.empresa || "Não informado") + '</p>';
    html += '<p class="meta">Publicado em ' + porExtenso(v.data_publicacao) + '</p>';
    html += '<p class="snippet">' + escapeHtml(snippet) + '</p>';
    html += '<a class="btn" href="#vaga=' + v.id + '">Ver detalhes</a>';
    html += '</div>';
  }
  container.innerHTML = html;
}

function renderDetalhe(id) {
  var v = getJobById(id);
  var container = document.getElementById("conteudoDetalhe");

  if (!v) {
    container.innerHTML = '<div class="vazio">Vaga não encontrada. Ela pode ter sido removida em uma atualização recente.</div>';
    return;
  }

  var html = "";
  html += '<div class="detalhe">';
  html += '<span class="cidade-tag">' + escapeHtml(v.cidade) + '</span>';
  html += '<h2>' + escapeHtml(v.titulo) + '</h2>';

  html += '<div class="campo"><div class="rotulo">Empresa</div><div class="valor">' + escapeHtml(v.empresa || "Não informado") + '</div></div>';
  html += '<div class="campo"><div class="rotulo">Cidade</div><div class="valor">' + escapeHtml(v.cidade) + '</div></div>';
  html += '<div class="campo"><div class="rotulo">Salário</div><div class="valor">' + escapeHtml(v.salario || "Não informado") + '</div></div>';
  html += '<div class="campo"><div class="rotulo">Data de publicação</div><div class="valor">' + porExtenso(v.data_publicacao) + '</div></div>';
  html += '<div class="campo"><div class="rotulo">Descrição completa</div><div class="valor">' + escapeHtml(v.descricao || "Sem descrição disponível.") + '</div></div>';

  html += '<div class="campo"><div class="rotulo">Como se candidatar</div><div class="valor candidatura">' + escapeHtml(v.candidatura || "Não informado.") + '</div></div>';

  html += '<div class="fonte">Fonte: ' + escapeHtml(v.fonte_nome || "Não informada");
  if (v.fonte_url) {
    html += ' — <a href="' + escapeHtml(v.fonte_url) + '" target="_blank" rel="noopener">ver anúncio original</a>';
  }
  html += '</div>';
  html += '</div>';

  container.innerHTML = html;
}

function mostrarView() {
  var hash = window.location.hash || "";
  var viewLista = document.getElementById("viewLista");
  var viewDetalhe = document.getElementById("viewDetalhe");

  if (hash.indexOf("#vaga=") === 0) {
    var id = hash.substring(6);
    renderDetalhe(id);
    viewLista.style.display = "none";
    viewDetalhe.style.display = "block";
    window.scrollTo(0, 0);
  } else {
    viewLista.style.display = "block";
    viewDetalhe.style.display = "none";
  }
}

function init() {
  popularCidades();
  renderLista();
  mostrarView();

  document.getElementById("filtroCidade").addEventListener("change", renderLista);
  document.getElementById("campoBusca").addEventListener("input", renderLista);
  document.getElementById("campoBusca").addEventListener("keyup", renderLista);
  document.getElementById("campoBusca").addEventListener("change", renderLista);
  window.addEventListener("hashchange", mostrarView);

  document.getElementById("totalVagas").textContent = JOBS_DATA.length;
  document.getElementById("dataAtualizacao").textContent = DATA_ATUALIZACAO;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
