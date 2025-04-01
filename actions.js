// Códigos JavaScripts do Portfólio :)
// 
// 
// 
// Fazer a seção Home ativo como default
document.addEventListener("DOMContentLoaded", () => {
  const homeSection = document.getElementById("home")
  if (homeSection) {
    homeSection.classList.add("active")
  }

  // Faz com que os itens da navegação da seção Home fiquem ativos como default
  const homeNavItem = document.querySelector('.nav-item a[href="#home"]')
  if (homeNavItem) {
    homeNavItem.classList.add("active")
  }
})

// * Código das particles.js apenas no Header
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
        value: "#d5838f",
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
var mybutton = document.getElementById("myBtn")

// Quando o usuário rolar para baixo 20px a partir do topo do documento, mostra o botão
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block" // Exibe
  } else {
    mybutton.style.display = "none" // Esconde
  }
}

// Quando o usuário clicar no botão, retorna ao topo da página
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Adiciona a rolagem suave
  })
}

// * Código para funcionamento dos botões do menu
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    document.body.style.backgroundColor = this.getAttribute("data-color")
  })
})

// * Código para o comportamento de navegação do menu (entre abas)
document.querySelectorAll(".nav-item a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault() // Impede o comportamento padrão do link

    const targetId = this.getAttribute("href").substring(1) // Obtém a ID do destino
    const targetElement = document.getElementById(targetId) // Encontra o elemento correspondente à ID

    // Rolagem suave
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    // Adiciona a classe de "ativo" no item de menu
    document.querySelectorAll(".nav-item a").forEach((link) => {
      link.classList.remove("active")
    })
    this.classList.add("active")
  })
})

// Código para alternar entre seções do menu
document.querySelectorAll(".nav-item a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault() // Impede o comportamento padrão do link

    // Obtém o ID da seção alvo (sem o #)
    const targetId = this.getAttribute("href").substring(1)

    // Oculta todas as seções
    document.querySelectorAll("section").forEach((section) => {
      section.classList.remove("active")
    })

    // Exibe a seção correspondente ao ID
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.classList.add("active")
    }

    // Marca o item de navegação como ativo
    document.querySelectorAll(".nav-item a").forEach((link) => {
      link.classList.remove("active")
    })
    this.classList.add("active")
  })
})

// * TEMA CLARO-ESCURO *
// Obtém o botão de alternância e os ícones
const themeToggleButton = document.getElementById("themeToggle")
const sunIcon = document.getElementById("sun-icon")
const moonIcon = document.getElementById("moon-icon")

// Verifica o tema preferido do usuário, se houver
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode")
  sunIcon.style.display = "none"
  moonIcon.style.display = "inline-block"
}

// Adiciona evento de clique ao botão
themeToggleButton.addEventListener("click", () => {
  // Alterna a classe 'dark-mode'
  document.body.classList.toggle("dark-mode")

  // Alterna a exibição dos ícones
  if (document.body.classList.contains("dark-mode")) {
    sunIcon.style.display = "none"
    moonIcon.style.display = "inline-block"
    localStorage.setItem("theme", "dark") // Salva a escolha do tema
  } else {
    sunIcon.style.display = "inline-block"
    moonIcon.style.display = "none"
    localStorage.setItem("theme", "light") // Salva a escolha do tema
  }
})

//*Código que não permite copiar para área de transferência
document.addEventListener("copy", (e) => {
  e.preventDefault()
})
window.addEventListener('load', function() {
  document.querySelector('.nav-menu ul').classList.add('show');
});


// Seleciona todos os botões de alternância
const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Encontra o item de lista associado e alterna a visibilidade
        const list = button.nextElementSibling;
        if (list.style.display === "none" || list.style.display === "") {
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    });
});

// Código para efeito de digitação no Header
var typed6 = new Typed('.typed6', { 
  strings: ['Quality Engineer', 'Analista de Qualidade de Software', 'Caçadora de bugs'],
  typeSpeed: 50,  // Velocidade da digitação
  backSpeed: 25,  // Velocidade ao apagar
  loop: true  // Para repetir o efeito
});

// Carousel functionality
document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.querySelector(".carousel-track")
  const slides = document.querySelectorAll(".carousel-slide")
  const prevButton = document.querySelector(".carousel-prev")
  const nextButton = document.querySelector(".carousel-next")
  const indicators = document.querySelectorAll(".indicator")

  if (!carouselTrack || slides.length === 0) return

  let currentIndex = 0
  let startPos = 0
  let currentTranslate = 0
  let prevTranslate = 0
  let isDragging = false
  let animationID = 0

  // Set up the initial position
  function setPositionByIndex() {
    currentTranslate = currentIndex * -100
    prevTranslate = currentTranslate
    setSliderPosition()
    updateIndicators()
  }

  // Update the slider position
  function setSliderPosition() {
    carouselTrack.style.transform = `translateX(${currentTranslate}%)`
  }

  // Update the indicators
  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active")
      } else {
        indicator.classList.remove("active")
      }
    })
  }

  // Move to the previous slide
  function moveToPrevSlide() {
    if (currentIndex > 0) {
      currentIndex--
      setPositionByIndex()
    } else {
      // Optional: loop back to the last slide
      currentIndex = slides.length - 1
      setPositionByIndex()
    }
  }

  // Move to the next slide
  function moveToNextSlide() {
    if (currentIndex < slides.length - 1) {
      currentIndex++
      setPositionByIndex()
    } else {
      // Optional: loop back to the first slide
      currentIndex = 0
      setPositionByIndex()
    }
  }

  // Event listeners for buttons
  prevButton.addEventListener("click", moveToPrevSlide)
  nextButton.addEventListener("click", moveToNextSlide)

  // Event listeners for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index
      setPositionByIndex()
    })
  })

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (document.querySelector("#templates").classList.contains("active")) {
      if (e.key === "ArrowLeft") {
        moveToPrevSlide()
      } else if (e.key === "ArrowRight") {
        moveToNextSlide()
      }
    }
  })

  // Touch events for mobile swipe
  carouselTrack.addEventListener("touchstart", touchStart)
  carouselTrack.addEventListener("touchmove", touchMove)
  carouselTrack.addEventListener("touchend", touchEnd)

  // Mouse events for drag
  carouselTrack.addEventListener("mousedown", touchStart)
  carouselTrack.addEventListener("mousemove", touchMove)
  carouselTrack.addEventListener("mouseup", touchEnd)
  carouselTrack.addEventListener("mouseleave", touchEnd)

  function touchStart(event) {
    const touch = event.type.includes("mouse") ? event : event.touches[0]
    startPos = touch.clientX
    isDragging = true
    animationID = requestAnimationFrame(animation)
    carouselTrack.style.cursor = "grabbing"
  }

  function touchMove(event) {
    if (isDragging) {
      const touch = event.type.includes("mouse") ? event : event.touches[0]
      const currentPosition = touch.clientX
      const diff = currentPosition - startPos
      const slideWidth = carouselTrack.clientWidth
      const percentMove = (diff / slideWidth) * 100
      currentTranslate = prevTranslate + percentMove
    }
  }

  function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)
    carouselTrack.style.cursor = "grab"

    const movedBy = currentTranslate - prevTranslate

    // If moved enough negative (to the left), move to next slide
    if (movedBy < -20 && currentIndex < slides.length - 1) {
      currentIndex++
    }

    // If moved enough positive (to the right), move to previous slide
    if (movedBy > 20 && currentIndex > 0) {
      currentIndex--
    }

    setPositionByIndex()
  }

  function animation() {
    setSliderPosition()
    if (isDragging) requestAnimationFrame(animation)
  }

  // Prevent default behavior on drag
  carouselTrack.addEventListener("dragstart", (e) => e.preventDefault())

  // Initialize the carousel
  setPositionByIndex()

})
