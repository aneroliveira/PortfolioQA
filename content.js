// Dicionário de tradução (PT/EN) + motor de aplicação de idioma.
// Convenção: elementos marcados com data-i18n="chave" têm o innerHTML trocado
// pelo texto correspondente. Atributos (title/aria-label/alt) usam
// data-i18n-title / data-i18n-aria-label / data-i18n-alt com o mesmo esquema
// de chaves (ex: "chave.aninhada").
const i18n = {
  pt: {
    common: {
      verDetalhes: "Ver detalhes",
      visualizarBtn: '<i class="bi bi-eye-fill"></i> Visualizar',
      downloadBtn: '<i class="bi bi-download"></i> Download',
      backToTop: "Voltar ao topo",
      toggleTheme: "Trocar tema",
      collapseMenu: "Recolher menu",
      schedule: "Minha agenda",
      email: "e-mail",
      closeModal: "Fechar",
    },
    nav: {
      home: "Home",
      sobreMim: "Sobre Mim",
      projetos: "Projetos",
      habilidades: "Habilidades",
    },
    header: {
      role1: "Product Owner de Tecnologia",
      role2: "Ainda acho bugs",
    },
    home: {
      welcome: "Bem vindo(a) ao meu Universo!",
      tagline:
        '<em>Sou a <strong>Lorena</strong>, uma <strong>geminiana</strong></em> ♊ <em>apaixonada por <strong>dogs</strong></em> 🐶<em>, desafios e por "caçar" bugs! </em>🐞',
      bio: 'Com mais de <strong>7</strong> anos de experiência em TI, iniciei minha carreira no suporte técnico, onde desenvolvi uma base sólida para minha transição para a área de <strong>Qualidade de Software</strong> (QA).<br>Hoje, atuo como <strong>Product Owner de Tecnologia</strong>, unindo essa base técnica à visão de produto e negócio, com diversas metodologias e criatividade para evoluir soluções robustas e eficientes.',
      tableHeader: "Aqui você encontrará:",
      rowSobreMimTitle: "Sobre mim",
      rowSobreMimDesc: "Um pouco mais sobre minha formação, carreira, visão profissional e mais.",
      rowProjetosTitle: "Projetos",
      rowProjetosDesc: "Uma seleção do que já construí e validei em QA e Produto, de plataformas a iniciativas autorais.",
      rowHabilidadesTitle: "Habilidades",
      rowHabilidadesDesc: "Ferramentas, tecnologias e metodologias que domino e utilizo no meu cotidiano.",
      rowTemplatesTitle: "Templates",
      rowTemplatesDesc: "Todos os templates de documentação de QA que desenvolvi",
      hint: "Navegue pelo menu",
    },
    sobreMim: {
      greeting: "Oi! 🙋🏽‍♀️",
      bio1: 'Me chamo <strong>Lorena</strong> (mas pode me chamar de Lori), sou formada em Análise e Desenvolvimento de Sistemas pela FATEC Mogi das Cruzes, com 7 anos de experiência na área de TI, com foco dedicado à <strong>Qualidade de Software</strong> (QA). Iniciei minha carreira em suporte técnico, onde desenvolvi habilidades essenciais em <strong>resolução de problemas</strong> e <strong>suporte a sistemas críticos</strong>, e depois migrei para QA, aproveitando essa base para garantir a <strong>excelência</strong> no desenvolvimento de software, com experiência em áreas diversas, incluindo comércio exterior, geolocalização governamental, gestão de frotas e tags de pedágio. <br>Ao longo da minha trajetória, contribui de forma significativa para a implementação de testes regressivos e automação de testes, com destaque para a criação de um case de testes <strong>E2E</strong> utilizando <strong>Cypress</strong> em um portal de Gestão de tags de estacionamento para Pessoa Jurídica. <br>Minha atuação abrange desde a validação de funcionalidades até a otimização de processos de qualidade, sempre com o objetivo de garantir a entrega de software de alta performance e a plena satisfação dos usuários. Tenho sólida experiência com metodologias ágeis (<strong>Scrum/Kanban</strong>), tendo familiaridade em conduzir cerimônias e prestado apoio às equipes na definição e cumprimento de objetivos de curto/longo prazo.',
      bio2: "Meu foco está em assegurar a entrega de software de alta qualidade por meio da combinação de testes manuais e automatizados, validação de funcionalidades, boa documentação (AMO!), e abordagens diferenciadas para testes. Em todos os processos, priorizo a colaboração estreita e eficaz com stakeholders e devs, promovendo um ambiente produtivo, sociável e alinhado.",
      bio3: 'Na <strong>Impulso</strong>, fui a única QA da empresa e estruturei todo o processo de qualidade <strong>do zero</strong> — de critérios de aceitação e validação em múltiplos ambientes até a automação e a integração dos testes no <strong>CI/CD</strong>. Esse trabalho reduziu o <strong>retrabalho em 30%</strong> e o tempo dos testes regressivos em <strong>40%</strong>, com <strong>Cypress</strong> cobrindo front-end e API. Essa proximidade com os times de Produto e Desenvolvimento abriu caminho para a promoção a <strong>Product Owner de Tecnologia</strong>, em 2026.',
      bio4: 'Estou em constante busca por aprimoramento profissional — hoje, isso significa mergulhar na mecânica do ecossistema <strong>Salesforce</strong> e me aprofundar em práticas de <strong>gestão de produto</strong>, unindo a bagagem técnica de QA à visão de negócio. Além da parte tech, sou apaixonada por explorar minha criatividade em <strong>design</strong>, onde gosto de experimentar com <strong>fontes</strong>, <strong>cores</strong> e <strong>elementos visuais</strong> para criar composições únicas.',
      experienceTitle: "Experiências profissionais",
      periodHeader: "Período",
      descHeader: "Descrição",
      current: "Atual",
      exp1: '<strong>Product Owner de Tecnologia na Impulso (Grupo RD Saúde)</strong> - Responsável pela evolução e melhoria contínua do <strong>Media Cloud</strong>, projeto core da empresa dentro do ecossistema Salesforce.',
      exp2: '<strong>Analista de Qualidade de Software na Impulso (Grupo RD Saúde)</strong> - Primeira profissional de QA da empresa, com foco na implantação de processos de qualidade e na estratégia de testes para garantir a excelência dos sistemas da organização.',
      exp3: '<strong>Transição de Carreira → Analista de Qualidade de Software na Muralis Tecnologia</strong>',
      exp4: '<strong>Atendente de Suporte NOC na 76Telecom</strong> - Diagnóstico e resolução de problemas em redes e sistemas críticos, adquirindo experiência em ambientes de alta disponibilidade.',
      exp5: '<strong>Analista de Suporte Service Desk na Original Veículos</strong> - Suporte a sistemas e infraestrutura de TI, desenvolvimento de soluções para melhorias de processos internos.',
      exp6: '<strong>Auxiliar de Suporte de TI</strong> - Atendimento técnico e suporte a usuários, com foco em resolução de problemas e manutenção de sistemas.',
    },
    projetos: {
      intro:
        'Uma seleção do que já construí e validei — de plataformas de mobilidade e comércio exterior a sistemas de informação geológica, além de iniciativas autorais de QA e Produto.<p>Clique em <strong>Ver detalhes</strong> em cada card para abrir o escopo completo.</p>',
      card0Date: "jun 2026 - atual",
      card0Desc: 'Atuação como <strong>Product Owner de Tecnologia</strong> do <strong>Media Cloud</strong>, projeto core da Impulso dentro do ecossistema <strong>Salesforce</strong>, com foco em evolução contínua, backlog e roadmap trimestral.',
      card0Details:
        '<summary>Ver detalhes</summary><li>Priorização, criação de cards, gestão de <strong>backlog</strong> e roadmap trimestral no <strong>Azure DevOps</strong>.</li><li>Equilíbrio entre novas demandas de produto e chamados de manutenção das áreas, com foco em reduzir retrabalho.</li><li>Detalhes completos na seção <a href="#productOwner">Product Owner</a> do menu.</li>',
      card1Title: "Portfólio Web Profissional",
      card1Date: "jan 2025 - atual",
      card1Pessoal: "Projeto pessoal",
      card1Desc: 'Este portfólio, conduzido como projeto ágil — com backlog, épicos, features e user stories — para consolidar minha identidade profissional em QA e, mais recentemente, Produto.',
      card1Details:
        '<summary>Ver detalhes</summary><li>Organização em <strong>Scrum</strong>: backlog, épicos, features, user stories e tarefas.</li><li>Design da interface criado no <strong>Figma</strong>.</li><li>Desenvolvimento em <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>, com atenção a responsividade, acessibilidade e otimizações de SEO.</li>',
      card2Title: "Central de Qualidade",
      card2Badge: "Projeto autoral",
      card2Date: "nov 2024 - atual",
      card2Desc: 'Iniciativa que idealizei e desenvolvi como <strong>QA solo</strong>: consolida e documenta todo o processo de testes dos portais da organização, com foco em transparência e rastreabilidade.',
      card2Details:
        '<summary>Ver detalhes</summary><li>Reúne no <strong>Confluence</strong> a estratégia de testes, critérios de aceitação, casos rastreáveis, histórico de bugs, ferramentas e ambientes disponíveis — integrada ao ciclo de vida dos projetos.</li><li>Elaborei um <strong>Plano de Testes</strong> completo, com objetivos, cronograma, riscos e próximos passos.</li><li>Padronizei o uso de atributos para facilitar a automação com <strong>Cypress</strong> e documentei ciclos de teste, bugs e entregas no <strong>Jira</strong>.</li><li>Registro de <strong>métricas trimestrais</strong>: bugs encontrados x corrigidos e evolução da cobertura de testes.</li><li><strong>Resultado:</strong> redução significativa nos chamados de suporte por falhas reportadas pelos usuários, menos retrabalho em produção e mais alinhamento entre Produto e Desenvolvimento.</li>',
      card3Date: "ago 2024 - out 2024",
      card3Desc: "Solução integrada para gestão de pagamentos e frotas, voltada à experiência de transportadores e embarcadores.",
      card3Details:
        '<summary>Ver detalhes</summary><li>Planejamento, execução e documentação de cenários e casos de teste, com evidências e relatórios detalhados.</li><li>Testes <strong>funcionais</strong>, de <strong>regressão</strong> e de <strong>API</strong>, com <strong>Postman</strong> para validação de requisições e <strong>Swagger</strong> para analisar a integração dos serviços.</li><li>Participação ativa nas cerimônias <strong>Scrum</strong> — planning, dailies e retrospectivas — em alinhamento contínuo com desenvolvimento e análise.</li>',
      card4Title: 'SGB (antiga CPRM): Base PETRO &amp; Base LITO',
      card4Date: "jan 2024 - jul 2024",
      card4Desc: "Modernização dos sistemas de informação geológica do Serviço Geológico do Brasil — análises petrográficas (PETRO) e unidades litoestratigráficas (LITO).",
      card4Details:
        '<summary>Ver detalhes</summary><li>Gerenciamento da execução, evidência e documentação de casos de teste no <strong>Azure DevOps</strong>, com a ferramenta de Test Cases.</li><li>Testes manuais <strong>exploratórios</strong> e de <strong>regressão</strong>, incluindo a versão mobile via <strong>Android Studio</strong>.</li><li>Validação detalhada de requisitos, regras de negócio e critérios de aceitação com base na documentação fornecida.</li><li>Reporte e acompanhamento contínuo de bugs, garantindo a estabilidade do sistema.</li>',
      card5Title: "Gestão de Tags (Pessoa Jurídica)",
      card5Date: "fev 2022 - dez 2023",
      card5Desc: "Plataforma da Veloe — iniciativa conjunta do Banco do Brasil e Bradesco — com soluções digitais para pedágio, estacionamento, abastecimento, IPVA e gestão de frotas.",
      card5Details:
        '<summary>Ver detalhes</summary><li>Planejamento, execução e documentação de cenários e casos de teste, com geração de evidências e relatórios de qualidade.</li><li>Implementação de testes automatizados <strong>end-to-end com Cypress</strong>, cobrindo as funcionalidades críticas da plataforma.</li><li>Testes funcionais, de regressão e de API com <strong>Postman</strong> e <strong>Swagger</strong>.</li><li>Colaboração na adoção de práticas <strong>DevOps</strong>, melhorando os ciclos de desenvolvimento e a integração contínua.</li>',
      card6Title: "eCommerce de roupas femininas",
      card6Date: "jan 2021 - jun 2022",
      card6Academico: "Acadêmico",
      card6Desc: 'Projeto da disciplina de Laboratório de Engenharia de Software: aplicação web funcional e escalável em arquitetura <strong>MVC</strong> com diversos padrões de projeto.',
      card6Details:
        '<summary>Ver detalhes</summary><li>Padrões aplicados: <strong>ViewHelper</strong>, <strong>Strategy</strong>, <strong>Command</strong>, <strong>Factory</strong>, <strong>Facade</strong> e <strong>DAO</strong>.</li><li>Front-end em <strong>HTML</strong>, <strong>CSS/SCSS</strong>, <strong>Bootstrap</strong> e <strong>JavaScript</strong>; back-end em <strong>JSP (Java Web)</strong> com Servlets e banco <strong>MySQL</strong>.</li><li>Funcionalidades do cliente: login e cadastro, perfil, catálogo e detalhe de produto, carrinho, cadastro de endereço e cartão de crédito.</li><li>Área administrativa: pedidos e vendas por período e cadastro de cupons de desconto.</li>',
      card7Date: "jul 2021 - jan 2022",
      card7Desc: "Solução para otimizar processos de comércio exterior, com foco em agenciamento de carga e desembaraço aduaneiro.",
      card7Details:
        '<summary>Ver detalhes</summary><li>Elaboração de <strong>Planos de Teste</strong> e manuais técnicos, detalhando as funcionalidades homologadas conforme os critérios de aceitação do cliente.</li><li>Testes manuais exploratórios e de regressão na interface web.</li><li>Implementação de testes automatizados com <strong>Selenium</strong>, ampliando a cobertura e otimizando os processos de QA.</li><li>Criação de manuais de usuário e documentação técnica, facilitando o uso da plataforma por equipes internas e clientes finais.</li>',
    },
    productOwner: {
      intro:
        'Depois de estruturar o processo de QA do zero na <strong>Impulso</strong>, hoje sou <strong>Product Owner de Tecnologia</strong> do <strong>Media Cloud</strong> — o projeto core da empresa dentro do ecossistema <strong>Salesforce</strong>, responsável por toda a operação de mídia, do planejamento à entrega das campanhas. Comecei como ponto focal, ajudando a organizar treinamentos e sessões de testes de ad servers, e a partir de <strong>junho de 2026</strong> passei a atuar 100% nessa frente, evoluindo e melhorando o produto no dia a dia (ainda em curva de aprendizado, rs).',
      cardDesc: 'Responsável pela evolução e melhoria contínua do <strong>Media Cloud</strong>, projeto core da Impulso dentro do ecossistema <strong>Salesforce</strong> — da operação de mídia como um todo, do planejamento à entrega e faturamento das campanhas. Ainda em curva de aprendizado ativa, apoiando os times enquanto evoluo o processo no dia a dia.',
      cardDetails:
        '<summary>Ver detalhes</summary><li>Priorização, criação de cards e gestão de <strong>backlog</strong>, com roadmap definido por trimestre.</li><li>Comunicação e alinhamento constante com a liderança sobre prioridades e andamento.</li><li>Gestão de demandas e chamados de manutenção no <strong>Azure DevOps</strong>.</li><li><strong>Resultado:</strong> tenho reduzido o retrabalho nas demandas ao coletar o máximo de contexto antes do início do desenvolvimento (e também nos chamados), alinhando as expectativas das áreas com a capacidade real do backlog, sem sobrecarregar o time.</li>',
    },
    habilidades: {
      pageTitle: "Habilidades Técnicas e Comportamentais",
      intro:
        'Sou uma profissional com excelente habilidade de comunicação e forte espírito de trabalho em equipe, sempre disposta a me adaptar para superar desafios. Destaco-me pela capacidade de resolver problemas de forma eficaz, com pensamento crítico e abordagem proativa. Sou organizada e busco constantemente a melhoria contínua em minhas atividades. Como <strong>Product Owner de Tecnologia</strong>, uno a visão de produto e negócio à base técnica que construí em Quality Engineering — automação de testes, análise de logs, consultas a bancos de dados e monitoramento de sistemas. Utilizo ferramentas modernas e aplico metodologias ágeis para conectar backlog, prioridades e qualidade técnica em todas as fases do desenvolvimento.',
      technicalTitle: "Habilidades Técnicas",
      d1: '<summary><i class="bi bi-braces"></i> Gestão de Produto</summary><li><strong>Priorização e Backlog</strong>: Criação de cards, priorização e definição de roadmap trimestral.</li><li><strong>Azure DevOps (Boards)</strong>: Gestão de backlog, demandas e chamados de manutenção.</li><li><strong>Discovery e Alinhamento</strong>: Coleta de contexto com as áreas antes do desenvolvimento e alinhamento de prioridades com a liderança.</li><li><strong>Salesforce (Media Cloud)</strong>: Evolução e melhoria contínua do projeto core da empresa, em curva de aprendizado ativa.</li>',
      d2: '<summary><i class="bi bi-braces"></i> Metodologias de Desenvolvimento</summary><li><strong>Scrum</strong>: Metodologia ágil, experiência como Scrum Master.</li><li><strong>Kanban</strong>: Controle de fluxo contínuo em projetos ágeis.</li>',
      d3: '<summary><i class="bi bi-braces"></i> Ferramentas de teste</summary><li><strong>Cypress</strong>: Automação de testes end-to-end.</li><li><strong>Selenium</strong>: Ferramenta para automação de testes de aplicações web.</li><li><strong>Postman</strong>: Testes de APIs.</li>',
      d4: '<summary><i class="bi bi-braces"></i> Ferramentas de Integração Contínua</summary><li><strong>Azure DevOps - Pipeline</strong>: Gerenciamento de projetos e CI/CD.</li><li><strong>GitHub - Actions</strong>: Gerenciamento de projetos e CI/CD.</li>',
      d5: '<summary><i class="bi bi-braces"></i> Testes Funcionais e Não Funcionais</summary><li><strong>Testes de Regressão</strong>: Validação de funcionalidades em versões anteriores.</li><li><strong>Testes de Caixa Preta (Black Box)</strong>: Validação de funcionalidades sem conhecimento da estrutura interna do sistema.</li><li><strong>Testes de Sistemas</strong>: Avaliação de todo o sistema em um ambiente integrado.</li><li><strong>Testes de Integração</strong>: Verificação da interação entre diferentes módulos ou sistemas.</li><li><strong>Testes de Compatibilidade</strong>: Verificação do desempenho em diferentes navegadores, dispositivos e sistemas operacionais.</li><li><strong>Testes de Usabilidade</strong>: Avaliação da experiência do usuário.</li>',
      d6: '<summary><i class="bi bi-braces"></i> Plataformas e Ferramentas de Bug Tracking</summary><li><strong>ClickUp</strong>: Plataforma de gerenciamento de trabalho com funcionalidades de bug tracking.</li><li><strong>Azure DevOps</strong>: Registro de bugs, melhorias e user stories.</li>',
      d7: '<summary><i class="bi bi-braces"></i> Ferramentas de Versionamento de Código</summary><li><strong>Git</strong>: Controle de versão distribuído.</li><li><strong>GitHub</strong>: Repositório de código e colaboração em projetos.</li>',
      d8: '<summary><i class="bi bi-braces"></i> Monitoramento e Análise de Logs</summary><li><strong>ElasticSearch/Kibana</strong>: Análise e visualização de logs.</li><li><strong>Grafana</strong>: Monitoramento de performance de sistemas.</li><li><strong>Elastic Stack (ELK)</strong>: Utilização de Elasticsearch, Logstash e Kibana para monitoramento, pesquisa e análise de logs em tempo real.</li><li><strong>Weave Scope</strong>: Ferramenta para visualização e monitoramento em tempo real de contêineres e serviços distribuídos.</li><li><strong>CloudWatch (AWS)</strong>: Serviço de monitoramento e gerenciamento de recursos e aplicativos na AWS.</li><li><strong>Dynatrace</strong>: Plataforma de monitoramento full-stack com foco em performance e análise de ambientes complexos.</li>',
      d9: '<summary><i class="bi bi-braces"></i> Infraestrutura e Redes</summary><li><strong>AWS (Amazon Web Services)</strong>: Plataformas de nuvem para testes de desempenho, ambientes de teste e deploys.</li>',
      d10: '<summary><i class="bi bi-braces"></i> Consultas e Análise de Bancos de Dados</summary>Bancos Relacionais<li><strong>MySQL</strong>: Conhecimento em criação de queries, manipulação e extração de dados de sistemas relacionais.</li><li><strong>PostgreSQL</strong>: Consultas avançadas, manipulação de dados, joins complexos e funções analíticas.</li>Bancos Não-Relacionais<li><strong>DynamoDB (AWS)</strong>: Banco de dados NoSQL gerenciado na AWS, com consultas e operações em tempo real.</li>',
      d11: '<summary><i class="bi bi-braces"></i> Design de Interface</summary><li>Habilidade em Canva e Figma para criar wireframes e protótipos, proporcionando uma visualização eficaz da experiência do usuário. Essa competência também permite a elaboração de relatórios visuais, diagramas de fluxos de processos e documentações mais acessíveis e organizadas. Com isso, facilito a comunicação entre as equipes, melhorando a clareza na apresentação dos resultados de testes e bugs, e asseguro que a usabilidade e a funcionalidade sejam avaliadas de maneira eficiente e integrada.</li><li><strong>Capcut</strong>: Edição de vídeos</li>',
      behavioralTitle: "Habilidades Comportamentais",
      behavioral:
        '<i class="bi bi-person-check-fill"></i> <strong>Comunicação Eficaz</strong>: Capacidade de expressar ideias de forma clara e ouvir feedback, facilitando a colaboração em equipe.<br><i class="bi bi-person-check-fill"></i> <strong>Trabalho em Equipe</strong>: Colaboração ativa com diferentes stakeholders para alcançar objetivos comuns, promovendo um ambiente de apoio.<br><i class="bi bi-person-check-fill"></i> <strong>Adaptabilidade</strong>: Flexibilidade para se ajustar a mudanças e novos desafios em um ambiente dinâmico de desenvolvimento de software.<br><i class="bi bi-person-check-fill"></i> <strong>Resolução de Problemas</strong>: Habilidade para identificar, analisar e propor soluções eficazes para desafios técnicos e operacionais.<br><i class="bi bi-person-check-fill"></i> <strong>Pensamento Crítico</strong>: Avaliação cuidadosa de informações e processos para tomar decisões informadas e baseadas em dados.<br><i class="bi bi-person-check-fill"></i> <strong>Organização</strong>: Capacidade de gerenciar múltiplas tarefas e prazos, garantindo a entrega eficiente de projetos.<br><i class="bi bi-person-check-fill"></i> <strong>Proatividade</strong>: Iniciativa para antecipar problemas e buscar melhorias contínuas nos processos e produtos.<br><i class="bi bi-person-check-fill"></i> <strong>Empatia</strong>: Compreensão das necessidades e perspectivas dos usuários e colegas, promovendo um ambiente de trabalho colaborativo.',
    },
    templates: {
      intro:
        'Aqui você encontra modelos e materiais que desenvolvi com base na minha experiência na área de QA e TI em geral.<p><em>Os arquivos estão disponíveis para uso pessoal gratuitamente, desde que os devidos créditos sejam mantidos.</em></p>Você pode utilizar, adaptar e compartilhar os conteúdos, mas lembre-se de valorizar quem criou —<strong> o reconhecimento fortalece a comunidade</strong>!<p> Se algum material for útil pra você, me avisa! Vou adorar saber como está sendo usado 😊</p>',
      card1Title: "Plano de Teste",
      card1Desc: "Template completo para documentação de planos de teste, incluindo objetivos, escopo, cronograma e recursos.",
      card1Alt: "Miniatura do template Plano de Teste",
      card2Title: "Casos de Teste",
      card2Desc: "Modelo estruturado para documentação de casos de teste, com pré-condições, passos, resultados esperados e status.",
      card2Alt: "Miniatura do template Casos de Teste",
      card3Title: "Relatório de Bugs",
      card3Desc: "Template para documentação detalhada de bugs, incluindo severidade, prioridade, passos para reprodução e evidências.",
      card3Alt: "Miniatura do template Relatório de Bugs",
      card4Title: "Checklist de QA",
      card4Desc: "Lista abrangente de verificações para garantir a qualidade do software antes da entrega, cobrindo funcionalidades, usabilidade e performance.",
      card4Alt: "Miniatura do template Checklist de QA",
      pdfViewTitle: "Visualização do PDF",
    },
  },
  en: {
    common: {
      verDetalhes: "View details",
      visualizarBtn: '<i class="bi bi-eye-fill"></i> View',
      downloadBtn: '<i class="bi bi-download"></i> Download',
      backToTop: "Back to top",
      toggleTheme: "Switch theme",
      collapseMenu: "Collapse menu",
      schedule: "My schedule",
      email: "email",
      closeModal: "Close",
    },
    nav: {
      home: "Home",
      sobreMim: "About Me",
      projetos: "Projects",
      habilidades: "Skills",
    },
    header: {
      role1: "Technology Product Owner",
      role2: "Still find bugs",
    },
    home: {
      welcome: "Welcome to my Universe!",
      tagline:
        '<em>I\'m <strong>Lorena</strong>, a <strong>Gemini</strong></em> ♊ <em>who loves <strong>dogs</strong></em> 🐶<em>, challenges, and "hunting" bugs! </em>🐞',
      bio: 'With over <strong>7</strong> years of IT experience, I started my career in technical support, where I built a solid foundation for my move into <strong>Software Quality</strong> (QA).<br>Today, I work as a <strong>Technology Product Owner</strong>, combining that technical foundation with a product and business vision, using diverse methodologies and creativity to evolve robust, efficient solutions.',
      tableHeader: "Here's what you'll find:",
      rowSobreMimTitle: "About Me",
      rowSobreMimDesc: "A bit more about my background, career, professional outlook, and more.",
      rowProjetosTitle: "Projects",
      rowProjetosDesc: "A selection of what I've built and validated in QA and Product, from platforms to self-authored initiatives.",
      rowHabilidadesTitle: "Skills",
      rowHabilidadesDesc: "Tools, technologies, and methodologies I master and use day to day.",
      rowTemplatesTitle: "Templates",
      rowTemplatesDesc: "All the QA documentation templates I've created",
      hint: "Navigate using the menu",
    },
    sobreMim: {
      greeting: "Hi! 🙋🏽‍♀️",
      bio1: 'My name is <strong>Lorena</strong> (but you can call me Lori). I have a degree in Systems Analysis and Development from FATEC Mogi das Cruzes, with 7 years of experience in IT, dedicated to <strong>Software Quality</strong> (QA). I started my career in technical support, where I developed essential <strong>problem-solving</strong> and <strong>critical systems support</strong> skills, and later moved into QA, using that foundation to ensure <strong>excellence</strong> in software development, with experience across diverse areas including foreign trade, government geolocation, fleet management, and toll tags. <br>Throughout my career, I\'ve made significant contributions to regression testing and test automation, notably building an <strong>E2E</strong> test case using <strong>Cypress</strong> for a corporate parking tag management portal. <br>My work spans from validating functionality to optimizing quality processes, always aiming to ensure high-performance software delivery and full user satisfaction. I have solid experience with agile methodologies (<strong>Scrum/Kanban</strong>), and I\'m familiar with running ceremonies and supporting teams in defining and meeting short- and long-term goals.',
      bio2: "My focus is on ensuring high-quality software delivery through a combination of manual and automated testing, functionality validation, good documentation (I LOVE it!), and creative approaches to testing. In every process, I prioritize close, effective collaboration with stakeholders and developers, fostering a productive, sociable, and aligned environment.",
      bio3: 'At <strong>Impulso</strong>, I was the company\'s only QA and built the entire quality process <strong>from scratch</strong> — from acceptance criteria and multi-environment validation to test automation and <strong>CI/CD</strong> integration. This work reduced <strong>rework by 30%</strong> and regression testing time by <strong>40%</strong>, with <strong>Cypress</strong> covering front-end and API. That closeness with the Product and Development teams paved the way for my promotion to <strong>Technology Product Owner</strong> in 2026.',
      bio4: 'I\'m constantly pursuing professional growth — today, that means diving into the mechanics of the <strong>Salesforce</strong> ecosystem and deepening my knowledge of <strong>product management</strong> practices, combining my QA technical background with a business mindset. Beyond the tech side, I\'m passionate about exploring my creativity in <strong>design</strong>, where I enjoy experimenting with <strong>fonts</strong>, <strong>colors</strong>, and <strong>visual elements</strong> to create unique compositions.',
      experienceTitle: "Professional Experience",
      periodHeader: "Period",
      descHeader: "Description",
      current: "Present",
      exp1: '<strong>Technology Product Owner at Impulso (Grupo RD Saúde)</strong> - Responsible for the continuous evolution and improvement of <strong>Media Cloud</strong>, the company\'s core project within the Salesforce ecosystem.',
      exp2: '<strong>Software Quality Analyst at Impulso (Grupo RD Saúde)</strong> - The company\'s first QA professional, focused on implementing quality processes and a testing strategy to ensure the excellence of the organization\'s systems.',
      exp3: '<strong>Career Transition → Software Quality Analyst at Muralis Tecnologia</strong>',
      exp4: '<strong>NOC Support Attendant at 76Telecom</strong> - Diagnosing and resolving network and critical systems issues, gaining experience in high-availability environments.',
      exp5: '<strong>Service Desk Support Analyst at Original Veículos</strong> - IT systems and infrastructure support, developing solutions to improve internal processes.',
      exp6: '<strong>IT Support Assistant</strong> - Technical support and user assistance, focused on problem resolution and systems maintenance.',
    },
    projetos: {
      intro:
        'A selection of what I\'ve built and validated — from mobility and foreign trade platforms to geological information systems, plus self-authored initiatives in QA and Product.<p>Click <strong>View details</strong> on each card to open the full scope.</p>',
      card0Date: "Jun 2026 - present",
      card0Desc: 'Acting as <strong>Technology Product Owner</strong> for <strong>Media Cloud</strong>, Impulso\'s core project within the <strong>Salesforce</strong> ecosystem, focused on continuous evolution, backlog, and quarterly roadmap.',
      card0Details:
        '<summary>View details</summary><li>Prioritization, card creation, and <strong>backlog</strong> management with a quarterly roadmap in <strong>Azure DevOps</strong>.</li><li>Balancing new product demands with maintenance tickets from other departments, focused on reducing rework.</li><li>Full details in the <a href="#productOwner">Product Owner</a> section of the menu.</li>',
      card1Title: "Professional Web Portfolio",
      card1Date: "Jan 2025 - present",
      card1Pessoal: "Personal project",
      card1Desc: 'This portfolio, run as an agile project — with backlog, epics, features, and user stories — to consolidate my professional identity in QA and, more recently, Product.',
      card1Details:
        '<summary>View details</summary><li>Organized in <strong>Scrum</strong>: backlog, epics, features, user stories, and tasks.</li><li>Interface design created in <strong>Figma</strong>.</li><li>Built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, with attention to responsiveness, accessibility, and SEO optimizations.</li>',
      card2Title: "Quality Hub",
      card2Badge: "Self-authored project",
      card2Date: "Nov 2024 - present",
      card2Desc: 'An initiative I conceived and built as a <strong>solo QA</strong>: it consolidates and documents the entire testing process for the organization\'s portals, with a focus on transparency and traceability.',
      card2Details:
        '<summary>View details</summary><li>Brings together the test strategy, acceptance criteria, traceable test cases, bug history, tools, and available environments in <strong>Confluence</strong> — integrated into the projects\' lifecycle.</li><li>Authored a complete <strong>Test Plan</strong>, with objectives, timeline, risks, and next steps.</li><li>Standardized the use of attributes to make automation with <strong>Cypress</strong> easier, and documented test cycles, bugs, and deliveries in <strong>Jira</strong>.</li><li>Tracked <strong>quarterly metrics</strong>: bugs found vs. fixed and test coverage evolution.</li><li><strong>Result:</strong> a significant reduction in support tickets for user-reported issues, less rework in production, and better alignment between Product and Development.</li>',
      card3Date: "Aug 2024 - Oct 2024",
      card3Desc: "Integrated solution for payment and fleet management, focused on the experience of carriers and shippers.",
      card3Details:
        '<summary>View details</summary><li>Planning, execution, and documentation of test scenarios and cases, with detailed evidence and reports.</li><li><strong>Functional</strong>, <strong>regression</strong>, and <strong>API</strong> testing, using <strong>Postman</strong> to validate requests and <strong>Swagger</strong> to review service integration.</li><li>Active participation in <strong>Scrum</strong> ceremonies — planning, dailies, and retrospectives — in constant alignment with development and analysis.</li>',
      card4Title: "SGB (formerly CPRM): PETRO &amp; LITO Databases",
      card4Date: "Jan 2024 - Jul 2024",
      card4Desc: "Modernization of the Brazilian Geological Survey's information systems — petrographic analyses (PETRO) and lithostratigraphic units (LITO).",
      card4Details:
        '<summary>View details</summary><li>Managed test case execution, evidence, and documentation in <strong>Azure DevOps</strong>, using the Test Cases tool.</li><li>Manual <strong>exploratory</strong> and <strong>regression</strong> testing, including the mobile version via <strong>Android Studio</strong>.</li><li>Detailed validation of requirements, business rules, and acceptance criteria based on the provided documentation.</li><li>Ongoing bug reporting and tracking, ensuring system stability.</li>',
      card5Title: "Tag Management (Corporate)",
      card5Date: "Feb 2022 - Dec 2023",
      card5Desc: "Veloe platform — a joint initiative between Banco do Brasil and Bradesco — offering digital solutions for tolls, parking, fueling, vehicle tax (IPVA), and fleet management.",
      card5Details:
        '<summary>View details</summary><li>Planning, execution, and documentation of test scenarios and cases, generating evidence and quality reports.</li><li>Implemented <strong>end-to-end automated tests with Cypress</strong>, covering the platform\'s critical functionality.</li><li>Functional, regression, and API testing with <strong>Postman</strong> and <strong>Swagger</strong>.</li><li>Collaborated on adopting <strong>DevOps</strong> practices, improving development cycles and continuous integration.</li>',
      card6Title: "Women's Clothing eCommerce",
      card6Date: "Jan 2021 - Jun 2022",
      card6Academico: "Academic",
      card6Desc: 'Project for the Software Engineering Lab course: a functional, scalable web application built with <strong>MVC</strong> architecture and several design patterns.',
      card6Details:
        '<summary>View details</summary><li>Patterns applied: <strong>ViewHelper</strong>, <strong>Strategy</strong>, <strong>Command</strong>, <strong>Factory</strong>, <strong>Facade</strong>, and <strong>DAO</strong>.</li><li>Front-end in <strong>HTML</strong>, <strong>CSS/SCSS</strong>, <strong>Bootstrap</strong>, and <strong>JavaScript</strong>; back-end in <strong>JSP (Java Web)</strong> with Servlets and a <strong>MySQL</strong> database.</li><li>Customer-facing features: login and sign-up, profile, product catalog and detail pages, cart, address and credit card registration.</li><li>Admin area: orders and sales by period, and discount coupon management.</li>',
      card7Date: "Jul 2021 - Jan 2022",
      card7Desc: "Solution to optimize foreign trade processes, with a focus on freight forwarding and customs clearance.",
      card7Details:
        '<summary>View details</summary><li>Authored <strong>Test Plans</strong> and technical manuals, detailing approved functionality according to the client\'s acceptance criteria.</li><li>Manual exploratory and regression testing on the web interface.</li><li>Implemented automated tests with <strong>Selenium</strong>, expanding coverage and streamlining QA processes.</li><li>Created user manuals and technical documentation, making it easier for internal teams and end clients to use the platform.</li>',
    },
    productOwner: {
      intro:
        'After building the QA process from scratch at <strong>Impulso</strong>, I\'m now the <strong>Technology Product Owner</strong> for <strong>Media Cloud</strong> — the company\'s core project within the <strong>Salesforce</strong> ecosystem, covering the entire media operation, from campaign planning to delivery. I started as a focal point, helping organize ad server training and testing sessions, and as of <strong>June 2026</strong> I moved to this role full time, evolving and improving the product day to day (still on the learning curve, lol).',
      cardDesc: 'Responsible for the continuous evolution and improvement of <strong>Media Cloud</strong>, Impulso\'s core project within the <strong>Salesforce</strong> ecosystem — covering the media operation as a whole, from campaign planning to delivery and billing. Still actively on the learning curve, supporting the teams while I evolve the process day to day.',
      cardDetails:
        '<summary>View details</summary><li>Prioritization, card creation, and <strong>backlog</strong> management, with a roadmap defined quarterly.</li><li>Ongoing communication and alignment with leadership on priorities and progress.</li><li>Managing demands and maintenance tickets in <strong>Azure DevOps</strong>.</li><li><strong>Result:</strong> I\'ve been reducing rework on requests by gathering as much context as possible before development starts (and even for tickets), aligning departments\' expectations with the backlog\'s real capacity, without overloading the team.</li>',
    },
    habilidades: {
      pageTitle: "Technical and Behavioral Skills",
      intro:
        'I\'m a professional with excellent communication skills and a strong team spirit, always ready to adapt to overcome challenges. I stand out for my ability to solve problems effectively, with critical thinking and a proactive approach. I\'m organized and constantly pursue continuous improvement in my work. As a <strong>Technology Product Owner</strong>, I combine a product and business vision with the technical foundation I built in Quality Engineering — test automation, log analysis, database querying, and system monitoring. I use modern tools and apply agile methodologies to connect backlog, priorities, and technical quality across every phase of development.',
      technicalTitle: "Technical Skills",
      d1: '<summary><i class="bi bi-braces"></i> Product Management</summary><li><strong>Prioritization and Backlog</strong>: Card creation, prioritization, and quarterly roadmap definition.</li><li><strong>Azure DevOps (Boards)</strong>: Backlog, demand, and maintenance ticket management.</li><li><strong>Discovery and Alignment</strong>: Gathering context with departments before development and aligning priorities with leadership.</li><li><strong>Salesforce (Media Cloud)</strong>: Continuous evolution and improvement of the company\'s core project, still on the learning curve.</li>',
      d2: '<summary><i class="bi bi-braces"></i> Development Methodologies</summary><li><strong>Scrum</strong>: Agile methodology, experience as Scrum Master.</li><li><strong>Kanban</strong>: Continuous flow control in agile projects.</li>',
      d3: '<summary><i class="bi bi-braces"></i> Testing Tools</summary><li><strong>Cypress</strong>: End-to-end test automation.</li><li><strong>Selenium</strong>: Tool for automating web application tests.</li><li><strong>Postman</strong>: API testing.</li>',
      d4: '<summary><i class="bi bi-braces"></i> Continuous Integration Tools</summary><li><strong>Azure DevOps - Pipelines</strong>: Project management and CI/CD.</li><li><strong>GitHub Actions</strong>: Project management and CI/CD.</li>',
      d5: '<summary><i class="bi bi-braces"></i> Functional and Non-Functional Testing</summary><li><strong>Regression Testing</strong>: Validating functionality against previous versions.</li><li><strong>Black Box Testing</strong>: Validating functionality without knowledge of the system\'s internal structure.</li><li><strong>System Testing</strong>: Evaluating the whole system in an integrated environment.</li><li><strong>Integration Testing</strong>: Verifying interaction between different modules or systems.</li><li><strong>Compatibility Testing</strong>: Verifying performance across different browsers, devices, and operating systems.</li><li><strong>Usability Testing</strong>: Evaluating the user experience.</li>',
      d6: '<summary><i class="bi bi-braces"></i> Bug Tracking Platforms and Tools</summary><li><strong>ClickUp</strong>: Work management platform with bug tracking features.</li><li><strong>Azure DevOps</strong>: Tracking bugs, improvements, and user stories.</li>',
      d7: '<summary><i class="bi bi-braces"></i> Code Versioning Tools</summary><li><strong>Git</strong>: Distributed version control.</li><li><strong>GitHub</strong>: Code repository and project collaboration.</li>',
      d8: '<summary><i class="bi bi-braces"></i> Monitoring and Log Analysis</summary><li><strong>ElasticSearch/Kibana</strong>: Log analysis and visualization.</li><li><strong>Grafana</strong>: System performance monitoring.</li><li><strong>Elastic Stack (ELK)</strong>: Using Elasticsearch, Logstash, and Kibana for real-time monitoring, search, and log analysis.</li><li><strong>Weave Scope</strong>: Tool for real-time visualization and monitoring of containers and distributed services.</li><li><strong>CloudWatch (AWS)</strong>: Monitoring and management service for AWS resources and applications.</li><li><strong>Dynatrace</strong>: Full-stack monitoring platform focused on performance and analysis of complex environments.</li>',
      d9: '<summary><i class="bi bi-braces"></i> Infrastructure and Networking</summary><li><strong>AWS (Amazon Web Services)</strong>: Cloud platforms for performance testing, test environments, and deployments.</li>',
      d10: '<summary><i class="bi bi-braces"></i> Database Querying and Analysis</summary>Relational Databases<li><strong>MySQL</strong>: Experience writing queries, manipulating, and extracting data from relational systems.</li><li><strong>PostgreSQL</strong>: Advanced queries, data manipulation, complex joins, and analytical functions.</li>Non-Relational Databases<li><strong>DynamoDB (AWS)</strong>: Managed NoSQL database on AWS, with real-time queries and operations.</li>',
      d11: '<summary><i class="bi bi-braces"></i> Interface Design</summary><li>Skilled in Canva and Figma for creating wireframes and prototypes, enabling an effective view of the user experience. This skill also supports building visual reports, process flow diagrams, and more accessible, organized documentation. It helps me communicate more clearly with teams, improving clarity when presenting test and bug results, and ensures usability and functionality are evaluated efficiently and cohesively.</li><li><strong>Capcut</strong>: Video editing</li>',
      behavioralTitle: "Soft Skills",
      behavioral:
        '<i class="bi bi-person-check-fill"></i> <strong>Effective Communication</strong>: Ability to express ideas clearly and listen to feedback, facilitating teamwork.<br><i class="bi bi-person-check-fill"></i> <strong>Teamwork</strong>: Active collaboration with different stakeholders to reach common goals, fostering a supportive environment.<br><i class="bi bi-person-check-fill"></i> <strong>Adaptability</strong>: Flexibility to adjust to changes and new challenges in a dynamic software development environment.<br><i class="bi bi-person-check-fill"></i> <strong>Problem Solving</strong>: Ability to identify, analyze, and propose effective solutions to technical and operational challenges.<br><i class="bi bi-person-check-fill"></i> <strong>Critical Thinking</strong>: Careful evaluation of information and processes to make informed, data-driven decisions.<br><i class="bi bi-person-check-fill"></i> <strong>Organization</strong>: Ability to manage multiple tasks and deadlines, ensuring efficient project delivery.<br><i class="bi bi-person-check-fill"></i> <strong>Proactivity</strong>: Initiative to anticipate problems and continuously seek improvements in processes and products.<br><i class="bi bi-person-check-fill"></i> <strong>Empathy</strong>: Understanding the needs and perspectives of users and colleagues, fostering a collaborative work environment.',
    },
    templates: {
      intro:
        'Here you\'ll find templates and materials I\'ve developed based on my experience in QA and IT in general. <em>(Note: the template files themselves are written in Portuguese.)</em><p><em>These files are available for personal use free of charge, as long as proper credit is kept.</em></p>You\'re welcome to use, adapt, and share the content, but please remember to credit whoever created it —<strong> recognition strengthens the community</strong>!<p> If any material is useful to you, let me know! I\'d love to hear how it\'s being used 😊</p>',
      card1Title: "Test Plan",
      card1Desc: "Complete template for documenting test plans, including objectives, scope, timeline, and resources.",
      card1Alt: "Test Plan template thumbnail",
      card2Title: "Test Cases",
      card2Desc: "Structured template for documenting test cases, with preconditions, steps, expected results, and status.",
      card2Alt: "Test Cases template thumbnail",
      card3Title: "Bug Report",
      card3Desc: "Template for detailed bug documentation, including severity, priority, reproduction steps, and evidence.",
      card3Alt: "Bug Report template thumbnail",
      card4Title: "QA Checklist",
      card4Desc: "Comprehensive checklist to ensure software quality before delivery, covering functionality, usability, and performance.",
      card4Alt: "QA Checklist template thumbnail",
      pdfViewTitle: "PDF preview",
    },
  },
};

function i18nGet(dict, path) {
  return path.split(".").reduce((o, k) => (o ? o[k] : undefined), dict);
}

function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.pt;

  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  document.title = lang === "en" ? "[PO] Portfolio" : "[PO] Portfólio";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = i18nGet(dict, el.getAttribute("data-i18n"));
    if (value !== undefined) el.innerHTML = value;
  });

  ["title", "aria-label", "alt"].forEach((attr) => {
    document.querySelectorAll(`[data-i18n-${attr}]`).forEach((el) => {
      const value = i18nGet(dict, el.getAttribute(`data-i18n-${attr}`));
      if (value !== undefined) el.setAttribute(attr, value);
    });
  });

  const langToggle = document.getElementById("langToggle");
  if (langToggle) langToggle.dataset.lang = lang;

  localStorage.setItem("lang", lang);

  // Textos mudam de tamanho entre idiomas — recalcula a altura do carrossel
  // de cargos do header (mesma função usada na troca de fonte/resize).
  if (typeof ajustarAlturaRoleSwap === "function") {
    requestAnimationFrame(ajustarAlturaRoleSwap);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(localStorage.getItem("lang") || "pt");

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLanguage(langToggle.dataset.lang === "en" ? "pt" : "en");
    });
  }
});
