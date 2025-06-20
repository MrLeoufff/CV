// Loader RPG
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.remove();
  }, 2500);
});


function revealForm() {
  const form = document.getElementById('contactForm');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

let currentRole = 'manager';
function toggleRole() {
  const card = document.getElementById('roleCard');
  card.classList.toggle('card-flipped');
}

const allQuests = [
  { tech: 'symfony', content: "📦 <strong>SweetDelices</strong> – Commandes clients + API Prestashop" },
  { tech: 'vue', content: "🧙 <strong>Interface RPG</strong> – Vue.js + composant dynamique" },
  { tech: 'html', content: "💅 <strong>Mini Site Onglerie</strong> – design responsive mobile-first" },
  { tech: 'symfony', content: "🛠️ <strong>Gestion Zoo</strong> – Symfony + rôles utilisateurs" },
];

let currentIndex = 0;
const itemsPerLoad = 2;
let currentFilter = 'all';

function loadMoreQuests() {
  const list = document.getElementById('questList');
  const filter = currentFilter;
  const filtered = filter === 'all' ? allQuests : allQuests.filter(q => q.tech === filter);
  const slice = filtered.slice(currentIndex, currentIndex + itemsPerLoad);

  slice.forEach(q => {
    const li = document.createElement('li');
    li.innerHTML = q.content;
    li.dataset.tech = q.tech;
    setTimeout(() => li.classList.add('fade-in'), 10);
    list.appendChild(li);
  });

  currentIndex += itemsPerLoad;
  if (currentIndex >= filtered.length) {
    document.getElementById('loadMoreBtn').style.display = 'none';
  }
}

function filterProjects(tech) {
  currentFilter = tech;
  currentIndex = 0;
  const list = document.getElementById('questList');
  list.style.opacity = '0';

  setTimeout(() => {
    list.innerHTML = '';
    list.style.opacity = '1';
    document.getElementById('loadMoreBtn').style.display = 'inline-block';
    loadMoreQuests();
  }, 200);
}

// Réduction du volume à un niveau subtil
document.addEventListener('DOMContentLoaded', () => {
  const ambiance = document.getElementById('ambience');
  if (ambiance) {
    ambiance.volume = 0.1; // volume très bas
  }
});

function playClickSound() {
  const sound = document.getElementById('clickSound');
  if (sound) {
    sound.volume = 0.2;
  } sound.play();
}

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", playClickSound);
});

function createSparkle(x, y) {
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    // Aléatoire autour du point de clic
    const dx = (Math.random() - 0.5) * 500 + "px";
    const dy = (Math.random() - 0.5) * 500 + "px";
    sparkle.style.setProperty('--dx', dx);
    sparkle.style.setProperty('--dy', dy);

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    document.body.appendChild(sparkle);

    // Nettoyage après l’animation
    sparkle.addEventListener("animationend", () => sparkle.remove());
  }
}

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", e => {
    playClickSound();
    const rect = btn.getBoundingClientRect();
    createSparkle(
      rect.left + rect.width / 2 + window.scrollX,
      rect.top + rect.height / 2 + window.scrollY
    );
  });
});




