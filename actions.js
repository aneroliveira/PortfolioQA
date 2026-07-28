// Códigos JavaScripts do Portfólio :)
//
//
//
// Quando a página estiver carregado, define a seção "Home" como ativa por padrão
document.addEventListener("DOMContentLoaded", () => {
  const homeSection = document.getElementById("home");
  if (homeSection) {
    homeSection.classList.add("active");
  }

  // Faz com que os itens da navegação da seção Home fiquem ativos como default
  const homeNavItem = document.querySelector('.nav-item a[href="#home"]');
  if (homeNavItem) {
    homeNavItem.classList.add("active");
  }
});

// * Carrossel de frases do cargo (substitui a digitação do Typed.js) *
// Mede a altura real de cada frase e fixa essa altura na caixa — em vez de
// chutar "quantas linhas" ela ocupa (o que varia por navegador/zoom/fonte e
// cortava a frase mais longa em algumas telas)
function ajustarAlturaRoleSwap() {
  const container = document.querySelector(".profile h2.role-swap");
  if (!container) return;

  let maiorAltura = 0;
  container.querySelectorAll("span").forEach((span) => {
    // Mede como texto normal (sem o position:absolute da animação),
    // então a quebra de linha reflete a largura real da caixa
    span.style.position = "static";
    span.style.visibility = "hidden";
    const altura = span.getBoundingClientRect().height;
    span.style.position = "";
    span.style.visibility = "";
    if (altura > maiorAltura) maiorAltura = altura;
  });

  if (maiorAltura > 0) {
    container.style.height = maiorAltura + "px";
  }
}

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(ajustarAlturaRoleSwap);
} else {
  window.addEventListener("load", ajustarAlturaRoleSwap);
}
window.addEventListener("resize", ajustarAlturaRoleSwap);

// * Código das particles.js apenas no Header
// Ativa o efeito visual de partículas no cabeçalho, se a biblioteca `particlesJS` estiver disponível
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 15,
        density: {
          enable: true,
          value_area: 500,
        },
      },
      color: {
        value: "#e2d8cf",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 9,
        random: true,
        anim: {
          enable: false,
          speed: 90,
          size_min: 2,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
}

// Código para botão de voltar ao topo
var mybutton = document.getElementById("myBtn");

// Gerencia a visibilidade e funcionalidade do botão "voltar ao topo"
// Quando o usuário rolar para baixo 20px a partir do topo do documento, mostra o botão
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block"; // Exibe
  } else {
    mybutton.style.display = "none"; // Esconde
  }
};

// Quando o usuário clicar no botão, retorna ao topo da página
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// * Código para o comportamento de navegação do menu (entre abas)
// Exibe a seção alvo e só então rola até ela — a ordem importa, porque as
// seções inativas são `display: none` e não podem receber scroll
document.querySelectorAll(".nav-item a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link

    // Obtém o ID da seção alvo (sem o #)
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Oculta todas as seções
    document.querySelectorAll("section").forEach((section) => {
      section.classList.remove("active");
    });

    // Exibe a seção correspondente ao ID
    if (targetSection) {
      targetSection.classList.add("active");
    }

    // Marca o item de navegação como ativo
    document.querySelectorAll(".nav-item a").forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");

    // Rolagem suave, agora que a seção já está visível
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// * TEMA CLARO-ESCURO *
// Controla a troca entre o modo claro e escuro e salva a preferência do usuário
const themeToggleButton = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Aplica automaticamente o modo escuro se o usuário já tiver escolhido antes
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  sunIcon.style.display = "none";
  moonIcon.style.display = "inline-block";
}

// Adiciona evento de clique ao botão
themeToggleButton.addEventListener("click", () => {
  // Alterna a classe 'dark-mode'
  document.body.classList.toggle("dark-mode");

  // Alterna a exibição dos ícones
  if (document.body.classList.contains("dark-mode")) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
    localStorage.setItem("theme", "dark"); // Salva a escolha do tema
  } else {
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
    localStorage.setItem("theme", "light"); // Salva a escolha do tema
  }
});

// * SIDEBAR RECOLHER/EXPANDIR *
// Controla o estado da sidebar (só tem efeito visual em telas ≥900px) e salva a preferência
const sidebarToggleButton = document.getElementById("sidebarToggle");
const collapseIcon = document.getElementById("collapse-icon");
const expandIcon = document.getElementById("expand-icon");

// Aplica automaticamente o estado recolhido se o usuário já tiver escolhido antes
if (localStorage.getItem("sidebarState") === "collapsed") {
  document.body.classList.add("sidebar-collapsed");
  collapseIcon.style.display = "none";
  expandIcon.style.display = "inline-block";
}

sidebarToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-collapsed");

  if (document.body.classList.contains("sidebar-collapsed")) {
    collapseIcon.style.display = "none";
    expandIcon.style.display = "inline-block";
    localStorage.setItem("sidebarState", "collapsed");
  } else {
    collapseIcon.style.display = "inline-block";
    expandIcon.style.display = "none";
    localStorage.setItem("sidebarState", "expanded");
  }
});

//[x]:tentar tirar o botão direito tbm
//* Código que não permite copiar para área de transferência
// Impede que o conteúdo da página seja copiado (bloqueia Ctrl+C)
document.addEventListener("copy", (e) => {
  e.preventDefault();
});

// Impede o menu de contexto (clique direito)
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
window.addEventListener("load", function () {
  document.querySelector(".nav-menu ul").classList.add("show");
});

// Código para funcionalidade de carrossel de slides
document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const indicators = document.querySelectorAll(".indicator");

  if (!carouselTrack || slides.length === 0) return;

  let currentIndex = 0;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let isDragging = false;
  let animationID = 0;

  // Define a posição inicial do carrossel
  function setPositionByIndex() {
    currentTranslate = currentIndex * -100;
    prevTranslate = currentTranslate;
    setSliderPosition();
    updateIndicators();
  }

  // Atualiza a posição dos slides visualmente
  function setSliderPosition() {
    carouselTrack.style.transform = `translateX(${currentTranslate}%)`;
  }

  // Atualiza os indicadores do carrossel conforme o slide atual
  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  //  Vai para o slide anterior
  function moveToPrevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      setPositionByIndex();
    } else {
      // volta ao primeiro se estiver no último
      currentIndex = slides.length - 1;
      setPositionByIndex();
    }
  }
  // Vai para o próximo slide
  function moveToNextSlide() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      setPositionByIndex();
    } else {
      // Opcional: volta ao último se estiver no primeiro 
      currentIndex = 0;
      setPositionByIndex();
    }
  }

  // Adiciona eventos de clique nos botões "anterior" e "próximo"
  prevButton.addEventListener("click", moveToPrevSlide);
  nextButton.addEventListener("click", moveToNextSlide);

  // Permite pular para um slide específico clicando nos indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      setPositionByIndex();
    });
  });

  // Permite navegar pelos slides com as setas do teclado (← →)
  document.addEventListener("keydown", (e) => {
    if (document.querySelector("#templates").classList.contains("active")) {
      if (e.key === "ArrowLeft") {
        moveToPrevSlide();
      } else if (e.key === "ArrowRight") {
        moveToNextSlide();
      }
    }
  });

  // Adiciona suporte a gestos de toque (arrastar) em dispositivos móveis
  carouselTrack.addEventListener("touchstart", touchStart);
  carouselTrack.addEventListener("touchmove", touchMove);
  carouselTrack.addEventListener("touchend", touchEnd);

  // Permite arrastar os slides com o mouse no desktop
  carouselTrack.addEventListener("mousedown", touchStart);
  carouselTrack.addEventListener("mousemove", touchMove);
  carouselTrack.addEventListener("mouseup", touchEnd);
  carouselTrack.addEventListener("mouseleave", touchEnd);

  function touchStart(event) {
    const touch = event.type.includes("mouse") ? event : event.touches[0];
    startPos = touch.clientX;
    isDragging = true;
    animationID = requestAnimationFrame(animation);
    carouselTrack.style.cursor = "grabbing";
  }

  function touchMove(event) {
    if (isDragging) {
      const touch = event.type.includes("mouse") ? event : event.touches[0];
      const currentPosition = touch.clientX;
      const diff = currentPosition - startPos;
      const slideWidth = carouselTrack.clientWidth;
      const percentMove = (diff / slideWidth) * 100;
      currentTranslate = prevTranslate + percentMove;
    }
  }

  function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    carouselTrack.style.cursor = "grab";

    const movedBy = currentTranslate - prevTranslate;

    // Se mover o suficiente para o lado negativo (para a esquerda), vá para o próximo slide
    if (movedBy < -20 && currentIndex < slides.length - 1) {
      currentIndex++;
    }

    // Se mover o suficiente para o lado positivo (para a direita), volte para o slide anterior
    if (movedBy > 20 && currentIndex > 0) {
      currentIndex--;
    }

    setPositionByIndex();
  }

  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation); //Continua a animação enquanto estiver arrastando
  }

  // Impede o comportamento padrão ao arrastar
  carouselTrack.addEventListener("dragstart", (e) => e.preventDefault());

  // Inicializa o carrossel
  setPositionByIndex();
});

// Funcionalidade do modal de pré-visualização de PDF
document.addEventListener("DOMContentLoaded", function () {
  // Obtém o modal
  const modal = document.getElementById("pdfPreviewModal");
  const pdfFrame = document.getElementById("pdfFrame");
  const closeModal = document.querySelector(".close-modal");

  // Obtém todos os botões de pré-visualização
  const previewBtns = document.querySelectorAll(".preview-btn");

  // Adiciona evento de clique a todos os botões de pré-visualização
  previewBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const pdfUrl = this.getAttribute("data-url");
      pdfFrame.src = pdfUrl;
      modal.style.display = "block";
    });
  });

  // Fecha o modal ao clicar no X
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    pdfFrame.src = "";
  });

  // Fecha o modal ao clicar fora dele
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      pdfFrame.src = "";
    }
  });
});
