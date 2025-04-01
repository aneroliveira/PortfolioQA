// Add this code at the beginning of the file to make the home section active by default
document.addEventListener("DOMContentLoaded", () => {
  // Make the home section active by default
  const homeSection = document.getElementById("home")
  if (homeSection) {
    homeSection.classList.add("active")
  }

  // Make the home nav item active by default
  const homeNavItem = document.querySelector('.nav-item a[href="#home"]')
  if (homeNavItem) {
    homeNavItem.classList.add("active")
  }
})

// Código JavaScripts do Portfólio

// * Para botão de voltar ao topo
// Código para botão de voltar ao topo
var mybutton = document.getElementById("myBtn")

// Quando o usuário rolar para baixo 20px a partir do topo do documento, mostra o botão
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block" // Exibe o botão
  } else {
    mybutton.style.display = "none" // Esconde o botão
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

// Código para mudar o tema entre claro e escuro
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
// Impede copiar qualquer coisa
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

var typed6 = new Typed('.typed6', { // Corrigimos para usar uma CLASSE
  strings: ['Quality Engineer', 'Analista de Qualidade de Software', 'Caçadora de bugs'],  // Texto que será digitado
  typeSpeed: 50,  // Velocidade da digitação
  backSpeed: 25,  // Velocidade ao apagar
  loop: true  // Para repetir o efeito continuamente
});
