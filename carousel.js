const eventos = [
  {
    id: 1,
    title: "Semana do Software 2025",
    date: "12/05",
    time: "10:00",
    location: "Salão de Eventos",
    type: "tech",
    description:
      "Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    id: 2,
    title: "Workshop de IoT",
    date: "12/01",
    time: "08:00",
    location: "Laboratório CS&I",
    type: "tech",
    description:
      "Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    id: 3,
    title: "Festa dos Alunos 2025",
    date: "18/05",
    time: "19:00",
    location: "Área Esportiva do Inatel",
    type: "cultural",
    description:
      "Venha comemorar a melhor Festa dos Alunos de todos os tempos!",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    id: 4,
    title: "Feira de Oportunidades",
    date: "04/05",
    time: "10:00",
    location: "Salão de Eventos",
    type: "academic",
    description:
      "Venha conhecer empresas e projetos com destaque na área da engenharia.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400"
  }
];

const carousel = document.querySelector(".carousel");

function renderEvents(eventos) {
  eventos.forEach((event, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (index !== 0) card.style.display = "none";
    card.innerHTML = `
          <img src="${event.image}" alt="${event.title}">
          <div class="info">
              <h3>${event.title}</h3>
              <p>${event.description}</p>
              <p><span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}</p>
          </div>
      `;
    carousel.appendChild(card);
  });
}

renderEvents(eventos);

const cards = document.querySelectorAll(".card");
let currentIndex = 0;
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateCarousel() {
  cards.forEach((card, index) => {
    card.style.display = index === currentIndex ? "block" : "none";
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCarousel();
});

let auto = setInterval(() => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
}, 3000);

//mouse sobre o elemento
carousel.addEventListener("mouseenter", () => {
  clearInterval(auto); //clear = parar/limpar
});

//mouse fora do elemento
carousel.addEventListener("mouseleave", () => {
  auto = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }, 3000);
});

updateCarousel();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("theme").addEventListener("click", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    const userChoice = confirm("Deseja ativar o modo escuro?");

    if (userChoice) {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }

    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-theme");

      if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  });
});
