# 📌 Status do Projeto

> Documento de retomada. Se você está voltando ao projeto depois de um tempo, comece pela seção **Onde parei**.
>
> **Convenção:** os itens de trabalho ficam como comentários no próprio código, marcados `[ ]` (pendente) e `[x]` (feito), e aparecem no painel da extensão **todo-tree** do VS Code (configurada em `.vscode/settings.json`). Os comentários são a fonte da verdade — este arquivo é só uma visão consolidada por cima deles.

*Última revisão: 31/07/2026 — 0 pendentes, 21 concluídos*

---

## 🎯 Onde parei

**Rodada de ajustes finos pós-rebrand PO/tradução PT-EN, em cima de feedback visual da Lorena** — quatro entradas de hoje (31/07/2026) em Concluído: correções de UI (dark mode, badge, grid, transição, link quebrado, contraste de miniatura), revisão de texto (sem travessões, nota de rodapé, dica menor), limpeza de conteúdo (divisor em Habilidades, card duplicado do Media Cloud removido, frase e data atualizadas) e o vaivém dos ícones de contato (testamos tirar a tabela da Home e destacar os ícones lá, ela preferiu reverter — tabela de volta, contatos só na sidebar, no estilo antigo da topbar).

**README.md atualizado** para refletir o rebrand de QA para Product Owner e o estado atual do site (seções, PT/EN, link publicado).

**Templates 100% concluídos — os 4 cards funcionam em produção.** Conteúdo real do ClickUp mesclado nos 3 documentos novos e os 6 arquivos (3 `.docx` + 3 `.pdf`) já subiram no bucket S3 pela Lorena — os 6 URLs verificados retornando 200, com o mesmo tamanho dos arquivos gerados localmente. Ver *"Templates: conteúdo real do ClickUp mesclado nos 3 documentos"* em Concluído.

**Google Analytics (GA4) integrado e verificado em produção** — ver *"Google Analytics (GA4) integrado ao portfólio"* em Concluído.

Mais duas decisões suas registradas em *Decisões abertas*.

## 📥 Ideias e pedidos futuros (ainda sem ação)

- **App de agenda próprio** — hoje o botão de agenda ([index.html:42](index.html:42)) aponta pro SimplyMeet (`app.simplymeet.me/lorena-santos-qa`). Ideia de criar uma aplicação própria depois; se não for viável, mantém o SimplyMeet.
- **Templates com campos preenchíveis** — ideia registrada por ela para uma próxima rodada: gerar `.docx` com campos de formulário de verdade, uma visão em PDF fiel ao layout para preview, e no download deixar só os campos abertos para o usuário preencher — sem alterar o layout do documento. Os 3 templates novos criados nesta rodada (ver Concluído) ainda são só texto comum, não campos de formulário — essa ideia continua de pé para depois.

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
| Menu (inativo) | Verde petróleo escuro (`--color-teal`, na época — variável renomeada depois para `--color-wine`, ver seção de troca de cor) | Verde petróleo claro (`#6fa3a5`, idem) |
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
| Projetos | `#f0dbe0` (vinho — era verde petróleo, ver seção de troca de cor abaixo) | `var(--color-wine)` |
| Habilidades | `#f0d4de` (framboesa) | `var(--color-raspberry)` |
| Templates | `var(--color-greige)` | `#b8a692` |

Verificado nos dois temas — como a tabela sempre tem fundo branco fixo (`body.dark-mode table`), as cores das linhas ficam idênticas em ambos, só o restante da página muda.

### Estado atual dos cards de Templates

| Card | Miniatura | Preview | Download |
|---|---|---|---|
| 1. Plano de Teste | ✅ SVG própria | ✅ `.pdf` (200, já no S3) | ✅ `.docx` (200, já no S3) |
| 2. Casos de Teste | ✅ SVG própria | ⏳ aponta pra URL esperada, aguardando upload | ⏳ idem |
| 3. Relatório de Bugs | ✅ SVG própria | ⏳ aponta pra URL esperada, aguardando upload | ⏳ idem |
| 4. Checklist de QA | ✅ SVG própria | ⏳ aponta pra URL esperada, aguardando upload | ⏳ idem |

**Padrão definido para Word:** o card 1 já estabelece a convenção — o `preview-btn` aponta para o `.pdf` (o modal usa `<iframe>`, que não renderiza `.docx`) e o `download-btn` aponta para o `.docx`. Os 3 cards novos seguem o mesmo par, com URLs no mesmo bucket/padrão de nome — só falta ela subir os arquivos (ver seção de Concluído com os nomes exatos).

### ⚠️ Sobre o bucket S3

Os arquivos que faltavam davam **403**. Verificado em 28/07/2026:

| Arquivo | Status |
|---|---|
| `[QA - Modelo] DOCUMENTAÇÃO DE QUALIDADE.pdf` | ✅ 200 — 142 KB |
| `[QA - Modelo] DOCUMENTAÇÃO DE QUALIDADE.docx` | ✅ 200 — 68 KB |
| `foto_perfil_portfolio.jpg` | ✅ 200 — 169 KB |
| `favicon.svg` (era usado nas miniaturas) | ❌ 403 |
| `"Isso é coisa do QA!"...pdf` (era usado nos cards 2-4) | ❌ 403 |

As referências aos dois arquivos com 403 já foram removidas do HTML havia tempo, e as miniaturas dos 4 cards agora são SVGs próprias no repositório (não dependem mais de nada no S3) — ver seção de Concluído. Os 3 documentos novos (Casos de Teste, Relatório de Bugs, Checklist de QA) ainda precisam ser enviados ao bucket para os links de preview/download funcionarem.

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

### Decisões abertas

- **Divergências entre o site e o LinkedIn** na tabela de experiências ([index.html:190](index.html:190) em diante). Não foram alteradas — são duas fontes que você controla, e o site pode estar certo com o LinkedIn abreviado:

  | Tabela do site | PDF do LinkedIn |
  |---|---|
  | 2024 - Atual — Impulso **(Grupo RD Saúde)** | nov/2024 - Present — Impulso, sem menção ao grupo |
  | 2021 - 2024 — "Transição de Carreira → Analista de QA na Muralis" | Dois cargos: Estagiária de **desenvolvimento** (jul/21-jul/22) e Analista de QA (jul/22-out/24) |
  | 2019 - 2020 — Analista de Suporte Service Desk na **Original Veículos** | **Não existe no PDF** |
  | 2018 - 2019 — "Auxiliar de Suporte de TI", sem empresa | **Menina de Laço** (+ Estagiária de TI em jan/18) |

- **Título do projeto acadêmico da Fatec** — no print do LinkedIn o título estava parcialmente encoberto. Usei "eCommerce de roupas femininas" ([index.html](index.html)); confirmar o nome real.

---

## ✅ Concluído

### README atualizado para o rebrand PO (31/07/2026)

O `README.md` ainda descrevia um portfólio genérico de QA, sem refletir o rebrand para Product Owner nem as seções atuais do site (Projetos, Product Owner, tradução PT/EN). Reescrito para citar a atuação atual como PO, listar as 5 seções reais e linkar o site publicado — removida também a nota "mais templates em breve", já que os 4 templates estão prontos em produção.

### Ícones de contato: tabela de volta, contatos só na sidebar (31/07/2026)

A Lorena perguntou se a tabela "Aqui você encontrará" (Home) era necessária, já que a sidebar já cobre a mesma navegação. Concordamos que o valor real da tabela é a frase de contexto por seção (algo que a sidebar não tem), então a ideia virou outra: liberar a tabela e usar aquele espaço para os ícones de contato (LinkedIn, e-mail, agenda), tirando-os da topbar (que ficaria só com idioma e tema).

Testamos essa primeira versão: tabela removida, ícones em destaque num bloco "Vamos conversar?" na Home, e uma versão discreta (só a cor, sem fundo) abaixo do nome na sidebar, pra manter os contatos alcançáveis em qualquer seção.

**Ela pediu pra reverter a Home e manter só a versão da sidebar** — mas com o mesmo visual que os ícones tinham no bloco "Vamos conversar?" (quadrado framboesa, igual ao que já existia na topbar), não a versão discreta. Estado final:
- Tabela da Home de volta, sem alterações.
- Topbar com só idioma e tema (classe renomeada de `.social-icons-left/-right` para `.topbar-icons`, já que só sobrou um grupo).
- LinkedIn/e-mail/agenda abaixo do nome na sidebar (`.profile-social`), reaproveitando as classes `.icon.linkedin/.email/.agenda` já existentes — mesma cor, mesmo tamanho (34px) da topbar antiga.
- Espaçamento ajustado a pedido dela: mais espaço entre o nome e os ícones (`margin-top` de `.profile-social`, antes negativo/colado, agora positivo), e o espaço entre os ícones e o menu removido (`padding-top` do `.nav-menu ul` no layout de sidebar zerado).
- Ícones somem junto com o nome quando a sidebar está recolhida (mesmo padrão já usado pro nome/cargo).

Verificado nos dois temas, sidebar expandida/recolhida e no layout mobile (onde a topbar perde os ícones também, e os de contato ficam visíveis abaixo do nome no header empilhado).

### Limpeza de conteúdo: Habilidades, Projetos e datas (31/07/2026)

- **Divisor faltando em Habilidades** — só essa seção não tinha o `.fancy-divider` entre o texto de introdução e o conteúdo abaixo (as outras quatro seções têm). Adicionado, igual às demais.
- **Card do Media Cloud removido de Projetos** — a Lorena notou que ele duplicava a seção "Product Owner", que já cobre o mesmo projeto com mais detalhe. Removido o card (era o "Projeto 0" no grid); limpo também `card0Badge`/`card0Desc`/`card0Details` do `content.js` (PT/EN), que ficaram órfãos. `card0Date` foi mantido — o card do Media Cloud em Product Owner ainda depende dela (marcado em comentário).
- **Frase da linha "Projetos" na tabela da Home** — trocada para "Uma seleção do que já construí em QA e sigo me aperfeiçoando, de plataformas a iniciativas autorais." (pedido dela; corrigi "autoriais" pra "autorais", grafia já usada no resto do site). Tradução em inglês ajustada junto.
- **Data do card "Central de Qualidade"** — de "nov 2024 - atual" para "nov 2024 - out 2025" (projeto encerrado).

### Revisão de texto: sem travessões, nota de rodapé e dica menor (31/07/2026)

A pedido da Lorena, três ajustes de texto/conteúdo nos cards de Projetos:

- **Nenhum travessão (—) nos textos do site.** 30 ocorrências reescritas em `content.js` (PT/EN) e nos textos-espelho em `index.html`, cada uma com a pontuação que fizesse sentido no contexto (vírgula, dois-pontos ou parênteses) — não foi uma troca mecânica. Ficaram de fora só os comentários de código, que não são texto do site.
- **"Detalhes completos na seção Product Owner do menu"** (dentro do "Ver detalhes" do card do Media Cloud) virou uma nota de rodapé do card — separada da lista de bullets por uma linha divisória (`.card-footnote`), em vez de mais um item da lista. O link "Product Owner" fica em framboesa negrito no tema claro e branco negrito no tema escuro.
- **"Clique em Ver detalhes..." em Projetos** reduzido pra 12px, no mesmo padrão já usado no hint "Navegue pelo menu" da Home.

### Correções de UI: dark mode, badge, grid, transição e link (31/07/2026)

Seis ajustes pontuais pedidos pela Lorena depois de revisar o site:

| Pedido | Correção |
|---|---|
| Título "Aqui você encontrará" sem contraste no modo escuro | `.header-row td` ganhou um `body.dark-mode` próprio (fundo `--color-indigo`, texto claro) — só essa linha, o resto da tabela mantém fundo claro fixo de propósito |
| Etiqueta do Media Cloud muito longa | Badge do card em Projetos trocado de "Product Owner de Tecnologia" pra "PO de Tecnologia", com uma chave de tradução própria (`projetos.card0Badge`) pra não afetar o cargo no header, que usa a mesma frase |
| Espaço vazio no card vizinho ao abrir "Ver detalhes" | `.projects-grid` ganhou `align-items: start` — o grid parava de esticar todo card da linha pra altura do mais alto |
| Toggle de "Ver detalhes" instantâneo, sem transição | Animação de altura via `::details-content` (CSS puro, sem mexer na estrutura); em navegadores sem suporte, cai pro toggle nativo sem quebrar |
| Link pra seção Product Owner (dentro do "Ver detalhes") não navegava | Só cliques em `.nav-item a` trocavam de seção; um listener delegado no documento agora cobre qualquer link interno `#id`, sobrevivendo também às re-renderizações do `content.js` ao trocar de idioma |
| Miniatura do Checklist de QA sem contraste (mesmo tom do fundo/borda do card) | Faixa superior do SVG trocada de `--color-greige` pra um tom mais escuro já usado na paleta (`#b8a692`) |

### Templates: conteúdo real do ClickUp mesclado nos 3 documentos (30/07/2026)

A Lorena achou os templates originais no ClickUp (dela mesma, de trabalho) e colou o conteúdo real de cada um, pra substituir o texto fictício que eu tinha escrito do zero na rodada anterior (ver *"Templates completos"*, 28/07/2026). Trabalho feito em `.tmp_templates/template-data.js` — mesmo gerador (`generate-docx.js` + `generate-pdf.js`), só o conteúdo mudou. Os 6 arquivos (3 `.docx` + 3 `.pdf`) foram regerados; nomes preservados, nenhuma mudança de código nos geradores.

**Casos de Teste:** tabela da seção 3 trocou a coluna "Prior." por **"Resultado Obtido"** (coluna real dela, ausente antes) e "Cenário" virou "Título" — exemplo preenchido com o dela (TC001 - Login Válido). Legenda perdeu a linha de Prioridade (não existe mais coluna pra isso). Seção nova, "4. MODELO DETALHADO POR CASO (BDD)": formato complementar por caso (Título/Resumo → Objetivo → Pré-condições → Cenário no padrão Dado/Quando/Então) que ela também tinha no ClickUp, pra casos mais complexos — não substitui a tabela, soma a ela.

**Relatório de Bugs:** tabela foi de 7 para **9 colunas**, ganhando "Descrição" e "Prioridade" (ambas reais, ausentes antes) — exemplo preenchido com o dela (BUG001 - Erro ao salvar usuário). "Severidade" renomeada para **"Gravidade"** (legenda e índice), termo que ela usa de fato. Larguras de coluna ajustadas numa segunda passada — a primeira versão deixou "ID"/"Status"/"Gravidade"/"Prior." quebrando em várias linhas no cabeçalho; aumentei essas e reduzi "Descrição"/"Passos"/"Resultado Esperado"/"Resultado Obtido" proporcionalmente, mantendo a largura total da tabela.

**Checklist de QA:** duas seções novas, ambas a partir do conteúdo dela: **"3. CHECKLIST RESUMIDO POR CATEGORIA"** (visão geral de alto nível — Funcionalidade/Performance/Segurança/Interface do Usuário/Regressão — logo após "Como usar", antes dos checklists detalhados) e **"9. CHECKLIST DE REGRESSÃO"** (categoria que não existia nas 5 já cobertas: Funcional/Usabilidade/Compatibilidade/Performance/Segurança).

⚠️ **Bug evitado, não corrigido:** o ClickUp dela usa o caractere Unicode `☐` (ballot box, U+2610) pra status de checklist. Testei isoladamente no PDFKit antes de usar em produção — a fonte Helvetica padrão (WinAnsi) não cobre esse glifo e ele virava um `&` sem sentido no PDF, silenciosamente (sem lançar erro). Troquei por `"[ ]"` (texto puro), que funciona igual nos dois formatos e não depende de fonte com cobertura Unicode.

**Ela perguntou se o Checklist valeria a pena ser só um `.md`** em vez de docx/pdf. Recomendei manter docx/pdf, mesmo padrão dos outros 3 templates (mesmo par preview-PDF/download-DOCX já estabelecido nos cards) — um `.md` ficaria destoante visualmente (perde cabeçalho/rodapé de marca) e exigiria um jeito diferente de exibir no card. Ela seguiu a recomendação.

**Verificado nos 3 PDFs**, abrindo cada um no navegador após regenerar: sem bug de paginação (Casos de Teste 9 págs., Relatório de Bugs 8 págs., Checklist de QA 12 págs.), tabelas novas renderizando com as colunas/linhas corretas, seções novas na posição e numeração certas no índice.

**Pendência, igual à rodada anterior:** os 6 arquivos regerados ainda precisam substituir os que já estão no bucket S3 (`templates-portfolio-qa`) — mesmos nomes exatos de antes, upload manual continua fora do meu alcance neste ambiente.

### Google Analytics (GA4) integrado ao portfólio (28/07/2026)

A Lorena queria métricas de acesso e sessão do portfólio. Avaliadas três opções (GA4, Cloudflare Web Analytics, GoatCounter) — ela escolheu **GA4**, pela riqueza de dados (sessões, duração, geografia, dispositivo, origem de tráfego) frente às alternativas mais simples e privacy-first.

Criação da conta/propriedade/stream de dados web foi feita por ela mesma no console do Google Analytics — fora do meu alcance criar contas de terceiros. Measurement ID: `G-F26C18N3L9`.

**Integração:** snippet padrão do `gtag.js` adicionado no `<head>` do [index.html](index.html), logo após o favicon e antes das pré-conexões de fontes (posição recomendada pelo Google — o mais alto possível no `<head>`, para carregar antes do resto).

**Verificado em duas etapas:** localmente via `file://`, inspecionando `window.dataLayer` e confirmando os eventos `js`/`config`/`gtm.load` disparando; depois em produção, no relatório **Visão geral em tempo real** do GA4, mostrando 1 usuário ativo ao abrir o site publicado — confirma que o rebuild do GitHub Pages já está servindo a versão com o tracking.

Commit: `ae3bd08` — "Adiciona Google Analytics (GA4) ao portfólio".

### Frases da sidebar: sombreado, fonte e troca de cor (28/07/2026)

A Lorena pediu três ajustes na sidebar depois de ver o redesenho:

- **Removido o `text-shadow`** das frases de cargo (`Quality Engineer` / `Analista de Qualidade de Software` / `Caçadora de bugs`) — único `text-shadow` do arquivo inteiro, então fácil de isolar.
- **Fonte reduzida** dessas frases na visão de sidebar (≥900px): nova variável `--font-size-xs` (`clamp(11px, 0.6vw + 8px, 13px)`), substituindo `--font-size-small` só nesse contexto.
- **Verde petróleo → Vinho/Bordô** (`#6b2737`, hover `#521e2a`, variante clara `#be6e82` para o modo escuro): ela não gostou do teal como segunda cor de destaque. Tentei primeiro um verde esmeralda como substituto (ela pediu "me surpreenda"); ela não gostou e pediu pra reverter — o índigo **não foi tocado** nesse meio-tempo, só a cor que ocupava o lugar do teal. Depois preferiu um vinho/bordô, no mesmo espírito de "mesma família do vermelho, tom diferente da framboesa" (framboesa continua exclusiva do CTA). A variável foi **renomeada** de `--color-teal`/`--color-teal-hover` para `--color-wine`/`--color-wine-hover` (+ `--color-wine-light` nova, para contraste no modo escuro) — não é só uma troca de valor, então qualquer busca futura por `--color-teal` no código não vai encontrar nada (isso já está refletido nas tabelas acima, que citavam a variável antiga).
- **Hover cinza escuro (`#495357`) dos botões `summary`** ("Ver detalhes" dos projetos, categorias de Habilidades) trocado por **prateado** (`#c0c0c0`), a pedido dela — o texto no hover continua vinho, sem trocar de cor.

Commit isolado dessas mudanças: `652599c`.

### Templates completos: grid, 3 documentos novos e miniaturas (28/07/2026)

A pendência que ficava em aberto neste arquivo há algumas revisões foi resolvida nesta sessão:

**Carrossel → grid.** Confirmado com ela que era essa a direção (ideia já registrada aqui antes) — reaproveitei literalmente a classe `.projects-grid` (usada em Projetos) no container dos templates, em vez de duplicar a regra. Removido por completo: `.carousel-container/-wrapper/-track/-slide`, `.carousel-arrow` (+ variantes de tema/breakpoint) e `.indicator` do `styles.css`, e todo o bloco de JS do carrossel (arraste por mouse/touch, setas, indicadores, atalho de teclado) do `actions.js` — o único código que sobrou ali é o modal de preview de PDF, que não depende do carrossel e continua funcionando igual (testado clicando em "Visualizar" depois da remoção). `.template-card` perdeu o `max-width:400px; margin:0 auto` que só fazia sentido dentro do slide do carrossel.

**Os 3 documentos que faltavam** (Casos de Teste, Relatório de Bugs, Checklist de QA) foram redigidos do zero, no mesmo estilo visual do "Plano de Teste" já publicado (cabeçalho com metadados em coral/itálico, marca d'água "Modelo criado por Lorena Santos" em branco-sobre-branco, índice, seções numeradas, nota de rodapé com número de página). Conteúdo alinhado ao que o site já menciona dela (Cypress, Selenium, Postman, Azure DevOps, ClickUp, Scrum):

- **Casos de Teste** — tabela de casos com ID/cenário/pré-condições/passos/resultado/status/prioridade, legenda de status, resumo de execução.
- **Relatório de Bugs** — tabela de bugs com severidade/passos/resultado esperado x atual/status, legenda de severidade e prioridade.
- **Checklist de QA** — checklists por categoria (funcional, usabilidade, compatibilidade, performance, segurança) + aprovação final.

⚠️ **Ambiente sem LibreOffice/poppler/Python** — só Node/npm disponíveis. Isso mudou como os arquivos foram gerados:
- `.docx`: gerado com a lib `docx` (JS) — sem problema, é o caminho normal.
- `.pdf`: **não deu pra converter o `.docx`** (precisaria de LibreOffice, ausente aqui). Gerei o PDF **independentemente**, com `pdfkit`, replicando o mesmo conteúdo e estilo visual — não é uma conversão 1:1 do docx, é uma segunda renderização a partir dos mesmos dados. Bug feio no meio do caminho: o cabeçalho/rodapé (desenhados a cada página via evento `pageAdded`) não resetava o cursor do PDFKit de volta pro topo da área de conteúdo, deixando-o perto do rodapé — cada parágrafo achava que não cabia e forçava página nova (gerou um PDF de 146 páginas para um conteúdo de 8). Corrigido resetando `doc.x`/`doc.y` no fim da função de cabeçalho/rodapé.
- **Miniaturas dos 4 cards:** sem como renderizar a 1ª página real de um PDF (era a abordagem original planejada), desenhei **SVGs próprias** — mockup de página de documento com cor de destaque + ícone/motivo por tipo (alvo para Plano de Teste, mini-tabela para Casos de Teste, inseto para Relatório de Bugs, checkboxes para Checklist de QA), usando só as cores da paleta atual (índigo, framboesa, vinho, greige — sem inventar tom novo). Ficam em `images/thumb-*.svg`, versionadas no repositório (não dependem do S3).

**Pendência real, fora do meu alcance neste ambiente:** não tenho credenciais AWS aqui, então os 6 arquivos (3 `.docx` + 3 `.pdf`) foram entregues a ela para upload manual no mesmo bucket (`templates-portfolio-qa`, raiz, público, mesmo padrão do card 1). Os cards já apontam para as URLs finais esperadas — **os nomes abaixo precisam ser preservados exatamente** (mesmo padrão `[QA - Modelo] NOME.ext` do card 1) para os links funcionarem sem precisar editar o HTML de novo:

| Arquivo | URL esperada |
|---|---|
| `[QA - Modelo] CASOS DE TESTE.pdf` / `.docx` | `.../%5BQA+-+Modelo%5D+CASOS+DE+TESTE.pdf` / `.docx` |
| `[QA - Modelo] RELATORIO DE BUGS.pdf` / `.docx` | `.../%5BQA+-+Modelo%5D+RELATORIO+DE+BUGS.pdf` / `.docx` |
| `[QA - Modelo] CHECKLIST DE QA.pdf` / `.docx` | `.../%5BQA+-+Modelo%5D+CHECKLIST+DE+QA.pdf` / `.docx` |

### Topbar, ícones de contato, footer e scroll da Home (28/07/2026)

Depois de ver o site publicado, a Lorena reportou mais uma leva de ajustes finos — todos em `styles.css`, commit `d39894e`:

| Reportado | Causa | Correção |
|---|---|---|
| Ícones de contato (LinkedIn, e-mail, agenda) e o de tema (sol/lua) em preto | Usavam `--color-indigo` (o neutro escuro) | Trocados para `--color-raspberry` (framboesa), nos dois temas |
| Ícones de contato "grandes demais" | — | Reduzidos ~3px: caixa 50px → 47px, glifo 30px → 27px (só `.linkedin`/`.email`/`.agenda` — o de tema manteve o tamanho, ela só pediu a cor) |
| "Desenho" ao lado do ícone ativo com a sidebar recolhida (print dela mostrando um parêntese solto) | A barra lateral do item ativo (`border-left: 3px solid`) só tem borda de um lado; com `border-radius:20px` do link, essa borda isolada arredonda numa curva que, sem o rótulo ao lado pra dar contexto (sidebar recolhida), lê como um parêntese solto | Removida a borda **só** no estado `body.sidebar-collapsed` — o ícone sozinho já indica a seção ativa |
| Scroll aparecendo na Home | A seção é curta, mas `main` carregava um padding-bottom de 50px e a tabela "Aqui você encontrará" tinha margem/espaçamento generosos — passando de ~700-800px de altura de viewport | Padding do `main` reduzido (50px → 20px, global) e a tabela da Home especificamente compactada (`#home table`, margem e padding de célula menores). Testado até 1280×720 sem scroll; só reaparece em alturas bem incomuns (~650px) |
| Footer "flutuando" no meio da tela em vez de grudado embaixo (consequência direta do ajuste acima — a Home ficou curta demais pro `.content-area` preencher a tela) | `header` vira `position:fixed` no layout de sidebar (≥900px), saindo do fluxo normal — sem ele, `.content-area` (que embrulha topbar+main+footer) era o único elemento contando pra altura do `body`, e não tinha `min-height:100vh` nem era ela mesma um flex container, então `main{flex:1}` (que já existia!) nunca tinha efeito | `.content-area` ganhou `min-height:100vh; display:flex; flex-direction:column` — agora `main{flex:1}` funciona de verdade, empurrando o footer pro fim da tela quando sobra espaço, sem travar o scroll normal em seções longas (testado na Sobre Mim: ainda rola, 854px de conteúdo excedente) |
| Ela reparou que os ícones da direita da topbar (calendário, tema) pareciam mais deslocados que os da esquerda | `.topbar` tinha `width:100%` sem `box-sizing:border-box`; o padding de 20px de cada lado (só existe no layout ≥900px) somava por fora, deixando a topbar **40px mais larga que o próprio container** — o grupo de ícones da direita ficava efetivamente espremido/vazando pra fora da área visível, enquanto o da esquerda tinha o respiro correto | `box-sizing:border-box` na `.topbar` — os dois lados agora têm exatamente 20px de espaço, confirmado via `getBoundingClientRect` (antes: direita vazava 20px além do limite visível; depois: 20px dos dois lados) |
| Barra de rolagem cinza padrão do navegador, destoando da paleta | — | Estilizada em greige (`--color-greige`, `#e2d8cf`) via `scrollbar-color`/`scrollbar-width` (Firefox) e `::-webkit-scrollbar*` (Chrome/Edge/Safari) |

Todos os itens testados localmente pelo servidor de preview (`npx serve`, porta 5000) — importante ter usado ele e não `file://` direto, porque o cache do `file://` mascarou os primeiros testes das mudanças de espaçamento (mostrava valores antigos mesmo depois de editar o CSS; só o fetch com `cache:'no-store'` revelava o arquivo real). Testado em claro/escuro e em larguras de sidebar recolhida/expandida.

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
- Grid de templates (mesmo padrão do grid de Projetos)
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
| `actions.js` | Tema, sidebar recolher/expandir, navegação, modal de PDF, digitação, bloqueios |
| `README.md` | Apresentação pública do portfólio (não é registro de progresso) |
| `STATUS.md` | Este arquivo |
| `images/` | Favicons, joaninhas (uma delas agora é o fundo da sidebar), foto de perfil antiga (a atual vem do S3) e as 4 miniaturas dos templates (`thumb-*.svg`) |
