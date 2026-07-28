# 📌 Status do Projeto

> Documento de retomada. Se você está voltando ao projeto depois de um tempo, comece pela seção **Onde parei**.
>
> **Convenção:** os itens de trabalho ficam como comentários no próprio código, marcados `[ ]` (pendente) e `[x]` (feito), e aparecem no painel da extensão **todo-tree** do VS Code (configurada em `.vscode/settings.json`). Os comentários são a fonte da verdade — este arquivo é só uma visão consolidada por cima deles.

*Última revisão: 28/07/2026 — 3 pendentes, 12 concluídos*

---

## 🎯 Onde parei

**A sidebar nova está pronta.** Os únicos itens realmente pendentes agora são os Templates, que dependem de você criar os arquivos:

1. **Os 3 templates** (Casos de Teste, Relatório de Bugs, Checklist de QA) precisam ser criados e subidos no S3. Os cards estão em estado "Em breve", sem link quebrado.
2. **As miniaturas reais** dos 4 cards — hoje é um placeholder local (a joaninha).

Mais duas decisões suas registradas em *Decisões abertas*, e a externalização dos textos, deliberadamente postergada.

## 📥 Ideias e pedidos futuros (ainda sem ação)

- **Promoção para Product Owner** — a Lorena vai atualizar tanto o portfólio quanto o LinkedIn quando a mudança for formalizada. *Só nota por enquanto, aguardando ela avisar.*
- **App de agenda próprio** — hoje o botão de agenda ([index.html:42](index.html:42)) aponta pro SimplyMeet (`app.simplymeet.me/lorena-santos-qa`). Ideia de criar uma aplicação própria depois; se não for viável, mantém o SimplyMeet.
- **Carrossel de Templates → grid** — a Lorena perguntou se o carrossel é a forma mais intuitiva de exibir os templates. Minha avaliação: não é o ideal. Os 4 cards são comparáveis entre si (mesma estrutura, mesmo tipo de conteúdo) — esse é o caso onde grid bate carrossel, porque comparação pede ver tudo de uma vez, não navegação sequencial. Hoje o carrossel também esconde que só 1 dos 4 cards está pronto — com grid isso fica visível de cara. Recomendo migrar Templates para o mesmo grid usado em Projetos ([styles.css](styles.css), `.projects-grid`) quando for mexer nos templates novos.
- **Templates com campos preenchíveis** — ideia para quando forem criados os 3 templates que faltam: gerar `.docx` com campos de formulário, uma visão em PDF fiel ao layout para preview, e no download deixar só os campos abertos para o usuário preencher — sem alterar o layout do documento. A Lorena marcou como "faremos juntos", ainda sem trabalho iniciado.

## 🎨 Paleta "Inverno Profundo" (28/07/2026)

Troca completa das cores do site pela cartela que a Lorena passou — com um ajuste dela mesma logo depois de ver o resultado:

| Cor | Hex | Papel |
|---|---|---|
| Branco | `#fefefc` | Fundo principal |
| ~~Índigo `#28326f`~~ → Neutro escuro `#1e1e1e` | Base do header/sidebar, footer e títulos das seções |
| Framboesa | `#af1958` | Único destaque — reservado para CTA (botão de download, hover do "voltar ao topo", borda da foto de perfil) |
| Verde petróleo | `#447a7c` | Links, ícones, `<strong>`, divisores |
| Greige | `#e2d8cf` | Fundo alternativo (miniaturas de template, botões neutros) |

O índigo original (`#28326f`) ficou "forte demais" no teste — a Lorena pediu para trocar por um neutro escuro, reaproveitando a família de tons que o modo escuro do site já usa (`--dark-bg:#121212` / `--card-bg-dark:#2a2a2a`). A variável `--color-indigo` continua com esse nome no código (evita reescrever ~15 usos), mas seu valor agora é `#1e1e1e` — puramente neutro, sem tom de azul. `--color-indigo-light` (usada só para títulos no modo escuro) foi removida; títulos em modo escuro agora usam `--text-light`, igual ao resto do texto nesse modo.

Variáveis novas em `styles.css`: `--color-white`, `--color-indigo`, `--color-raspberry` (+ `-hover`), `--color-teal` (+ `-hover`), `--color-greige`. As antigas (`--main-pink`, `--main-pink-hover`, `--accent-pink`, `--dark-pink`) foram removidas — nenhum uso ficou para trás (conferido por busca no arquivo inteiro).

**Decisão de design:** o header/sidebar agora é **sempre nesse neutro escuro**, independente do tema claro/escuro — só o conteúdo alterna. Isso simplificou o CSS (várias regras `body.dark-mode header/nav` deixaram de ser necessárias e foram removidas) e deu uma identidade visual fixa pro menu, sem depender de saturação de cor para isso.

*Nota:* os blobs decorativos de fundo (`body::before`/`::after`) ainda usam o RGB do índigo antigo em opacidade bem baixa (5-20%) como um dos 4 tons do gradiente ambiente. Não achei que isso fosse o que ficou "forte" (é sutil demais pra perceber como cor definida) e mantive, para preservar a variedade visual do fundo. Se quiser trocar também, é rápido.

**Fora desta rodada, de propósito:** as cores das tabelinhas (Home e experiências — roxo/dourado/rosa/azul) não foram tocadas. Não é a mesma origem das variáveis antigas (usam hex direto, não `--main-pink`), e a Lorena não pediu mexer nelas nesta rodada. Se quiser unificar com a paleta nova depois, é só avisar.

**Bug pré-existente corrigido de brinde:** `.nav-menu a { color: inherit; }` tinha mais especificidade CSS do que `nav ul li a { color: var(--text-menu); }` (uma classe sempre vence qualquer quantidade de seletores de elemento) — todo item de menu inativo herdava a cor do body em vez do tom pretendido. Existia desde antes desta sessão, no layout horizontal original. Corrigido removendo o `color:inherit` da regra menos específica.

## 🐛 Ajustes na sidebar (28/07/2026)

Cinco pontos que a Lorena reportou depois de ver a sidebar funcionando, todos corrigidos:

| Reportado | Causa | Correção |
|---|---|---|
| Botão de recolher com borda e criando scroll indevido | `<button>` sem reset herdava borda/padding padrão do navegador — com `box-sizing: content-box`, isso somava aos 44×44px declarados e estourava a altura disponível do header | Reset completo (`background/border/padding: none`), igual ao toggle de tema já existente |
| Fundo rosa nas opções "quebrado" quando recolhe | O hover/ativo tinha `background-color` semi-transparente, que ficava desproporcional numa sidebar de 76px | Removido — o item ativo/hover agora se distingue só pela barra lateral colorida + cor do texto, sem fundo |
| Joaninhas não preenchiam a sidebar toda | O giro (`rotate(30deg)`) era aplicado na camada CSS inteira; presa exatamente ao tamanho da sidebar (`inset:0`, necessário pra não recriar o bug de scroll), a rotação deixava 2 cantos sem cobertura | Reconstruí o fundo como um SVG com `<pattern patternTransform="rotate(30)">` — a rotação fica dentro do próprio ladrilho, então cobre 100% da área sem precisar de uma caixa maior que o header |
| Footer invadindo a sidebar | `.content-area` só tinha `margin-left`, sem `width` — herdava 100% da largura do `body` (flex) sem descontar a margem, e o `header` tinha padding somado por fora (content-box) | `width: calc(100% - var(--sidebar-width))` no `.content-area` + `box-sizing: border-box` no `header` |

Verificado nos dois temas, nos dois estados da sidebar (expandida/recolhida) e no breakpoint mobile (nada quebrou abaixo de 900px).

## 🔧 Segunda rodada de ajustes (28/07/2026)

Depois de ver a sidebar com a paleta nova, a Lorena pediu mais quatro coisas:

**Índigo trocado por neutro escuro** — já documentado acima, na seção da paleta.

**"Chip" atrás dos ícones + scroll ainda aparecendo, mesmo recolhida.** Causa raiz: `header` tem `align-items: center` (pra centralizar a foto), e isso faz o `<nav>` **encolher para o tamanho do próprio conteúdo** em vez de ocupar a coluna toda — cada item do menu ficava com ~20px de largura real (numa sidebar de 76px recolhida), soltinho e centralizado, em vez de ocupar a largura inteira. O padrão de joaninhas atrás, cortado pelas bordas dessa caixa estreita, é que criava a aparência de "chip". Corrigido com `.nav-menu { width: 100%; }` dentro do breakpoint da sidebar — o mesmo problema, pela mesma causa, afetava o bloco da foto/nome (ver abaixo). O scroll residual (~8px) que sobrava do ajuste anterior foi eliminado de vez trocando `overflow-y: auto` por `overflow: hidden` no header — na prática o conteúdo sempre coube, então não fazia sentido manter scroll "só por via das dúvidas".

**Texto digitado (Typed.js) removido — trocado por carrossel vertical de frases.** As 3 frases (`Quality Engineer` / `Analista de Qualidade de Software` / `Caçadora de bugs`) agora ficam todas no HTML como `<span>`s dentro de `.profile h2.role-swap`, cada uma entrando por baixo e saindo por cima via `@keyframes` puro CSS (sem biblioteca — o `<script>` do Typed.js foi removido do `index.html`). Documentado com `prefers-reduced-motion` (mostra só a primeira frase, sem animar).

⚠️ **Isso revelou o mesmo bug do "chip" em outro lugar:** o bloco `.profile` (foto + nome + cargo) também encolhe pelo `align-items:center` do header — o texto do cargo ficava confinado a uma coluna de ~150px em vez dos ~240px disponíveis, e a frase mais longa quebrava em 3 linhas em vez de 2, sendo cortada pela altura fixa da caixa (isso foi o "quebrou" que a Lorena reportou com print). Corrigido com `.profile { width: 100%; }`, junto com o `.nav-menu`.

**A altura da caixa do cargo agora é medida de verdade, não chutada.** Em vez de calcular "quantas linhas cabem" via CSS (frágil — varia por navegador, zoom e fonte), o `actions.js` mede a altura real de cada frase depois que a fonte carrega (`document.fonts.ready`) e fixa esse valor via JS. O CSS mantém uma altura de 3 linhas como fallback (antes do JS rodar), só por segurança. Reavalia no `resize` da janela também.

Verificado: nenhum corte de texto, largura do item do menu correta (240px numa sidebar de 260px, descontado o padding), sem scroll em nenhum estado, animação de frases ciclando corretamente (confirmado via Web Animations API, já que o preview às vezes trata a aba como "em segundo plano" e pausa as animações — não é bug, é economia de bateria padrão do navegador).

*Nota:* a regra `.nav-menu { width: 100%; }` (parte da correção do "chip") foi removida a pedido da Lorena depois — ela conferiu que os itens do menu continuam corretos sem ela (o fix do `.profile { width: 100%; }`, feito ao lado, parece ter sido suficiente sozinho).

## 🌗 Sidebar acompanha o tema claro/escuro (28/07/2026)

Reverti a decisão de deixar a sidebar sempre no neutro escuro — agora ela (e o footer, que compartilha a mesma identidade visual) **muda com o tema**, como o resto do site.

A pedido da Lorena ("ajuste as cores por paleta que me surpreenda"), não foi uma simples troca de cor chapada — usei um **gradiente diagonal sutil** nos dois modos, e reaproveitei o índigo original (`#28326f`, aquele que ficou "forte demais" como fundo) como **cor de texto** no modo claro, resgatando ele de um jeito mais discreto:

| | Modo claro | Modo escuro |
|---|---|---|
| Fundo da sidebar/footer | `linear-gradient(160deg, #eef0f7, #e2d8cf)` — gelo lavanda para greige | `linear-gradient(160deg, #1a1a26, #16161a)` — quase preto com sombra de índigo |
| Nome / título | Índigo original (`#28326f`) | Branco |
| Cargo (texto digitado/carrossel) | Índigo original, 65% opacidade | Branco, 75% opacidade |
| Menu (inativo) | Verde petróleo escuro (`--color-teal`) | Verde petróleo claro (`#6fa3a5`) |
| Menu (ativo/hover) | Índigo original | Branco |
| **Barra do item ativo** | **Framboesa** — único uso da framboesa fora de um CTA, como destaque | Verde petróleo |
| Botão de recolher | Índigo original | Branco |

Variáveis novas: `--sidebar-bg-light`, `--sidebar-bg-dark` (os gradientes), `--color-deep-indigo` (o índigo original, agora só usado como cor de texto/destaque — sem relação com `--color-indigo`, que continua sendo o neutro escuro fixo usado nos ícones da barra superior e no `<thead>` da tabela de carreira, que não mudam com o tema).

**Detalhe técnico:** `--footer-bg` (usada só na `<thead>` da tabela de carreira, que sempre tem texto branco fixo) foi desacoplada do fundo do `<footer>` — antes as duas compartilhavam a mesma variável, o que teria quebrado o contraste da tabela quando o footer passasse a clarear no modo claro.

Verificado nos dois temas, nos dois estados da sidebar e no mobile — tudo consistente.

## 🐞 Fundo da sidebar: três tentativas até acertar (28/07/2026)

1. Ladrilho diagonal repetido — não agradou.
2. Uma joaninha só, grande, no canto — também não. Trocado por:
3. **Rastro de 3 joaninhas** de tamanhos decrescentes (90px, 55px, 32px), "caminhando" em diagonal a partir do canto inferior direito, cada uma com sua própria inclinação (embutida no `<g transform="rotate(...)">` de cada SVG — múltiplos `background-image` em CSS não aceitam transform individual por camada, por isso 3 SVGs quase idênticos, só a rotação interna muda). Opacidade 13%, funciona nos dois temas e na sidebar recolhida.

## 🎯 Outline de foco e hover da tabela (28/07/2026)

**O contorno azul que aparecia ao navegar pelo menu** (print da Lorena mostrando um arco/parêntese ao lado de "Sobre Mim") era o **outline nativo do navegador** seguindo o `border-radius: 20px` do link — nunca tínhamos estilizado isso, então o navegador usava o padrão dele (geralmente azul). Corrigido com um `:focus-visible` explícito em framboesa (`nav ul li a:focus-visible { outline: 2px solid var(--color-raspberry); outline-offset: -2px; }`).

Detalhe de verificação: `:focus-visible` só ativa em interação real de teclado (Tab) — cliques de mouse não mostram o contorno por design (é assim que o navegador evita o "anel" incômodo em cliques comuns). Testado via Tab de verdade nos dois temas; a cor trocou de azul para framboesa como pedido.

**Hover da linha "Sobre mim" na tabela da Home** (a Lorena chamou de "rosa", embora fosse um lilás claro `#c4b7eb`/`#b3a2e6`) trocado por um ametista mais profundo e saturado (`#8a6fc9`, com texto branco) — mais na linha da paleta "Inverno Profundo" (tons mais ricos/joia) do que o pastel que estava lá.

## 🖥️ Servidor de preview + dois ajustes finos (28/07/2026)

**`.claude/launch.json` criado**, servindo o projeto via `npx serve` em `http://localhost:5000` (Node já disponível na máquina). Resolve de vez os problemas de cache do `file://` que atrapalharam boa parte desta sessão — pelo servidor, um Ctrl+Shift+R normal já basta.

**Framboesa no item ativo, nos dois temas.** A Lorena reparou que no modo escuro a barra do item ativo ainda saía num tom azulado (era o teal que eu tinha escolhido de propósito, como "toque de surpresa" — mas não foi isso que ela queria). Removida a exceção `body.dark-mode nav ul li a.active { border-left-color: teal }`; agora é framboesa sempre.

**As 4 linhas da tabela "Aqui você encontrará" recoloridas** — as cores antigas (roxo `#c4b7eb`, dourado `#f5d78e`, rosa `#f7a7c8`, azul `#79cde2`) destoavam do visual mais sóbrio que o site ganhou. Novos tons, cada um uma tinta clara de uma cor da paleta (fundo da tabela continua branco fixo, não muda com o tema):

| Linha | Fundo (tinta clara) | Hover |
|---|---|---|
| Sobre mim | `#dde1f0` (índigo) | `#6b74a8` |
| Projetos | `#cfe3e3` (verde petróleo) | `var(--color-teal)` |
| Habilidades | `#f0d4de` (framboesa) | `var(--color-raspberry)` |
| Templates | `var(--color-greige)` | `#b8a692` |

Verificado nos dois temas — como a tabela sempre tem fundo branco fixo (`body.dark-mode table`), as cores das linhas ficam idênticas em ambos, só o restante da página muda.

### Estado atual dos cards de Templates

| Card | Miniatura | Preview | Download |
|---|---|---|---|
| 1. Plano de Teste | placeholder local | ✅ `.pdf` (200) | ✅ `.docx` (200) |
| 2. Casos de Teste | placeholder local | — Em breve | — Em breve |
| 3. Relatório de Bugs | placeholder local | — Em breve | — Em breve |
| 4. Checklist de QA | placeholder local | — Em breve | — Em breve |

**Padrão definido para Word:** o card 1 já estabelece a convenção — o `preview-btn` aponta para o `.pdf` (o modal usa `<iframe>`, que não renderiza `.docx`) e o `download-btn` aponta para o `.docx`. Seguir esse mesmo par nos próximos cards.

### ⚠️ Sobre o bucket S3

Os arquivos que faltam davam **403**. Verificado em 28/07/2026:

| Arquivo | Status |
|---|---|
| `[QA - Modelo] DOCUMENTAÇÃO DE QUALIDADE.pdf` | ✅ 200 — 142 KB |
| `[QA - Modelo] DOCUMENTAÇÃO DE QUALIDADE.docx` | ✅ 200 — 68 KB |
| `foto_perfil_portfolio.jpg` | ✅ 200 — 169 KB |
| `favicon.svg` (era usado nas miniaturas) | ❌ 403 |
| `"Isso é coisa do QA!"...pdf` (era usado nos cards 2-4) | ❌ 403 |

As referências aos dois arquivos com 403 já foram removidas do HTML, então **o site não tem mais link nem imagem quebrada**. Mas vale investigar a causa ao subir os templates novos: como os outros objetos respondem 200, o bucket serve conteúdo público — o mais provável é que esses dois estejam privados ou não existam.

---

## ✅ Estado do repositório — publicado

**Tudo publicado em 28/07/2026** — o trabalho de outubro/2025 (que estava preso nesta máquina desde antes desta sessão) e toda a redesign feita hoje foram commitados e enviados juntos.

| | |
|---|---|
| Commit publicado | `e6bcbe4` — "Redesign layout with fixed sidebar and new 'Inverno Profundo' palette" |
| Commit anterior no GitHub | 11/04/2025 — `7acc76f` |
| Repositório | https://github.com/aneroliveira/PortfolioQA |
| Site publicado | https://aneroliveira.github.io/PortfolioQA |

O GitHub Pages rebuilda automaticamente a cada push na `main` — o site no ar deve refletir tudo isso em alguns minutos.

*Nota:* `core.autocrlf` está como `true` e os arquivos locais usam LF. O conteúdo commitado fica normalizado em LF — só os arquivos no disco passam a CRLF em checkouts futuros. Não afeta o conteúdo.

*Nota:* `.claude/launch.json` tem o caminho absoluto desta máquina (`C:/Users/Lorena/...`) hardcoded no comando do `npx serve`. Funciona aqui, mas quebraria se o repositório fosse clonado em outra máquina/caminho — ajustar para um caminho relativo (`.`) se for usar em outro lugar.

*Nota:* hospedagem — avaliado ficar no GitHub Pages ou migrar para o Vercel. Para um site estático como este as duas se equivalem; o único ganho real do Vercel são os preview deployments por branch. Todos os caminhos do projeto são relativos (`./images/...`), então uma migração não quebraria nada. Recomendação registrada: manter o Pages como URL canônica e conectar o Vercel só para previews, sem escolher entre os dois.

---

## ⏳ Pendente

### Templates — depende de você criar os arquivos

- `[ ]` **Adicionar os demais templates** — [index.html:356](index.html:356)
  Criar os 3 documentos, subir no S3 e trocar o `<span class="coming-soon">` dos cards 2-4 pelo par `preview-btn` (`.pdf`) + `download-btn` (`.docx`), seguindo o card 1.
- `[ ]` **Incluir uma miniatura** — [index.html:355](index.html:355)
  Gerar a prévia da 1ª página de cada documento e substituir o placeholder `./images/ladybug-svg.svg` nos 4 cards.

### Decisões abertas

- **Divergências entre o site e o LinkedIn** na tabela de experiências ([index.html:190](index.html:190) em diante). Não foram alteradas — são duas fontes que você controla, e o site pode estar certo com o LinkedIn abreviado:

  | Tabela do site | PDF do LinkedIn |
  |---|---|
  | 2024 - Atual — Impulso **(Grupo RD Saúde)** | nov/2024 - Present — Impulso, sem menção ao grupo |
  | 2021 - 2024 — "Transição de Carreira → Analista de QA na Muralis" | Dois cargos: Estagiária de **desenvolvimento** (jul/21-jul/22) e Analista de QA (jul/22-out/24) |
  | 2019 - 2020 — Analista de Suporte Service Desk na **Original Veículos** | **Não existe no PDF** |
  | 2018 - 2019 — "Auxiliar de Suporte de TI", sem empresa | **Menina de Laço** (+ Estagiária de TI em jan/18) |

- **Título do projeto acadêmico da Fatec** — no print do LinkedIn o título estava parcialmente encoberto. Usei "eCommerce de roupas femininas" ([index.html](index.html)); confirmar o nome real.

### Refatoração — decidido deixar para depois

- `[ ]` **Mover os textos para arquivos externos** — [index.html:225](index.html:225)
  Objetivo é reduzir o HTML (hoje ~460 linhas, a maior parte texto corrido).
  ⚠️ Deliberadamente postergado: enquanto ainda entra conteúdo (templates, projetos), refatorar agora vira retrabalho.
  Abordagem avaliada quando for a hora: um `content.js` com os textos injetados no DOM — sem build e funciona ao abrir o arquivo direto do disco. A alternativa (partials via `fetch()`) quebra em `file://` por CORS.

---

## ✅ Concluído

### Redesenho da tela inicial — sidebar fixa à esquerda (28/07/2026)

Substituído o header-no-topo por uma sidebar fixa: foto circular, nome e cargo digitado, menu vertical (ícone + rótulo sempre visíveis, sem precisar de hover), conteúdo da seção exibido à direita. Camada 100% aditiva via `@media (min-width: 900px)` — nada do layout abaixo de 900px foi alterado, é o mesmo header-no-topo de sempre.

| O que mudou | Onde |
|---|---|
| Ícones sociais + tema saíram do header e viraram uma barra fixa (`.topbar`) no topo do conteúdo | `index.html`, `styles.css` |
| Sidebar fixa (`position:fixed`), conteúdo com `margin-left` | `styles.css`, bloco `@media (min-width:900px)` |
| Botão de recolher/expandir a sidebar (ícones e nome somem, só ícones ficam), preferência salva no `localStorage` | `index.html`, `styles.css`, `actions.js` — mesmo padrão do toggle de tema |
| Ícones do menu trocados: da joaninha para os mesmos ícones da tabelinha "Aqui você encontrará" da Home (casa, pessoa, kanban, prêmio, prancheta) — dá consistência entre a Home e o menu | `index.html`, `styles.css` (`.nav-icon`, substitui `.ladybug-svg`) |
| Fundo de joaninhas pequenas na diagonal atrás do conteúdo da sidebar, bem sutil (opacidade 8%) — reaproveita o arquivo `ladybug-svgrepo-com.svg`, que ficou livre depois da troca de ícones acima | `styles.css` (`header::before`) |
| Item ativo do menu ganhou uma barra lateral colorida — funciona mesmo com a sidebar recolhida (sem rótulo visível) | `styles.css` |

**Por que o mecanismo funciona sem tocar no JS de navegação:** o `window.onscroll`/`window.scrollTo` (botão voltar-ao-topo) dependem do documento inteiro rolando, não de um container interno — por isso a sidebar é `position:fixed` (sai do fluxo) em vez de um painel com scroll próprio. O `particles.js` já roda com `resize:true`, então se realinha sozinho ao redimensionar. Só o toggle de recolher precisou de JS novo, no mesmo molde do toggle de tema já existente.

**Cuidado ao editar depois:** o pseudo-elemento do padrão de fundo (`header::before`) precisa ficar com `inset: 0` (preenchendo exatamente a sidebar), não maior — uma versão inicial usava `inset: -30%` para o giro de 30° não deixar cantos sem padrão, mas isso inflava o `scrollHeight` do header (que tem `overflow-y:auto` para o menu rolar em conteúdo alto) e criava uma barra de rolagem falsa, comendo ~15px de largura. Motivo documentado no próprio CSS.

### Revisão de 28/07/2026

| Item | Onde | O que foi feito |
|---|---|---|
| Transição entre seções | [index.html:139](index.html:139) | `@keyframes sectionIn` em `section.active`. `display` não é animável, então animação em vez de `transition` — dispara sozinha quando a classe entra, sem mexer no JS. Inclui `prefers-reduced-motion`. |
| Pointer na lista de habilidades | [index.html:241](index.html:241) | As duas definições de cursor em `styles.css` eram **idênticas** — não havia distinção entre clicável e não. Extraídas para `--cursor-arrow` / `--cursor-click` (cores da marca invertidas), com `summary` no grupo clicável e `details li` voltando à seta. |
| Desabilitar o botão direito | [actions.js:216](actions.js:216) | Listener de `contextmenu` ao lado do bloqueio de cópia. |
| Docs em Word | [index.html:357](index.html:357) | Convenção definida e documentada: preview no `.pdf`, download no `.docx`. |
| Parte da Impulso | [index.html:167](index.html:167) | Parágrafo novo na narrativa de Sobre Mim, com os números do LinkedIn (-30% retrabalho, -40% regressão, Cypress front-end e API). Sem duplicar a tabela de experiências. |
| Seção de Projetos | [index.html:233](index.html:233) | Seção nova com **7 projetos** extraídos do LinkedIn, mais item no menu. Cada card tem título, período, empresa, resumo e um `<details>` com o escopo completo. |

**Sobre a seção de Projetos:** usei **grid de cards**, não carrossel. Motivo técnico: o carrossel em `actions.js` usa `document.querySelector(".carousel-track")` — instância única. Um segundo carrossel entraria em conflito com o de Templates. Os `<details>` reaproveitam o padrão já usado em Habilidades, e o CSS (`.project-card`) reaproveita os mesmos tokens do `.template-card`.

Projetos incluídos: Portfólio Web Profissional · Central de Qualidade (autoral, Impulso) · Vale Pedágio Obrigatório (Veloe) · SGB Base PETRO & LITO · Gestão de Tags PJ (Veloe) · eCommerce de roupas femininas (Fatec) · QuickComex.

Correções encontradas de passagem na mesma revisão:

- **Bug de ordem no menu** — o `scrollIntoView` rodava *antes* de a seção virar `display: block`, ou seja, rolava sobre um elemento invisível. Os três handlers de clique sobrepostos (`.nav-item`/`.nav-item a`, dois deles duplicando a lógica de `.active`) foram consolidados em um, com a seção sendo exibida antes do scroll.
- **Código morto removido** — o bloco `toggleButtons` procurava `.toggle-button`, que não existe no HTML; e o handler de `data-color` lia um atributo que nenhum item de menu tem.
- **Miniaturas quebradas** — as 4 apontavam para um `favicon.svg` com 403 no S3; agora usam um arquivo local.
- **Favicon** — [index.html:8](index.html:8) declarava `type="image/svg+xml"` apontando para um `.png`.

### Itens concluídos antes

| Item | Local |
|---|---|
| Mudar cursor | [index.html:28](index.html:28) |
| Adicionar link da agenda de chamadas | [index.html:41](index.html:41) |
| Melhorar imagem de perfil (subiu para o S3) | [index.html:52](index.html:52) |
| Melhorar o hover do menu | [index.html:70](index.html:70) |
| Hover em cada linha da tabela | [index.html:116](index.html:116) |
| Cor no hover da tabela de carreira | [index.html:181](index.html:181) |

### Estrutura e recursos já entregues

- 4 seções, todas ligadas ao menu: `#home`, `#sobreMim`, `#habilidades`, `#templates`
- Dark mode com persistência em `localStorage`
- Fundo animado com particles.js
- Efeito de digitação nos títulos
- Carrossel de templates com setas, indicadores, arraste e navegação por teclado
- Modal de preview de PDF em `<iframe>`
- Botão "voltar ao topo"
- Bloqueio de cópia (Ctrl+C) e de menu de contexto
- Tabelas de habilidades e de carreira com hover

---

## 🗂️ Arquivos

| Arquivo | Papel |
|---|---|
| `index.html` | Página única — `header` (sidebar ≥900px), `.content-area` (`.topbar` + `main` + `footer`), todas as seções |
| `styles.css` | Estilos: variáveis, dark mode, cursores customizados, transição de seções, layout de sidebar |
| `actions.js` | Tema, sidebar recolher/expandir, navegação, carrossel, modal de PDF, digitação, bloqueios |
| `README.md` | Apresentação pública do portfólio (não é registro de progresso) |
| `STATUS.md` | Este arquivo |
| `images/` | Favicons, joaninhas (uma delas agora é o fundo da sidebar) e foto de perfil antiga (a atual vem do S3) |
