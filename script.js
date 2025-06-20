// === 1. Loader RPG ===
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.remove();
  }, 2500);
});

// === 2. Musique d’ambiance ===
document.addEventListener("DOMContentLoaded", () => {
  const ambiance = document.getElementById("ambience");
  if (ambiance) ambiance.volume = 0.1;
});

// === 3. Formulaire magique ===
function revealForm() {
  const form = document.getElementById("contactForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

// === 4. Changement de rôle (flip 3D) ===
function toggleRole() {
  const card = document.getElementById("roleCard");
  card.classList.toggle("card-flipped");
}

// === 5. Projets dynamiques ===
const allQuests = [
  { tech: "symfony", content: "📦 <strong>SweetDelices</strong> – Commandes clients + API Prestashop" },
  { tech: "vue", content: "🧙 <strong>Interface RPG</strong> – Vue.js + composant dynamique" },
  { 
    tech: "symfony", 
    content: `🛠️ <strong>Chatterie Bengal No-mori</strong> – Symfony + rôles utilisateurs
      <a href="https://www.chatteriebengalnomori.fr/" class="secret-link" target="_blank" rel="noopener noreferrer" title="Voir le projet 🧭">🔗</a>
      <div class="preview-container"><img src="assets/images/Capture d’écran 2025-06-20 143415.png" loading="lazy"></img></div>`
  },
  {
    tech: "html",
    content: `⚔️ <strong>NW-Burger</strong> – Site food truck responsive
      <a href="https://burger-rene.netlify.app/" class="secret-link" target="_blank" rel="noopener noreferrer" title="Voir le projet 🧭">🔗</a>
      <div class="preview-container"><iframe src="https://burger-rene.netlify.app/" loading="lazy"></iframe></div>`
  },
  {
    tech: "html",
    content: `⚔️ <strong>Ongles Maribel</strong> – Site vitrine responsive
      <a href="https://votre-boutique-rene.netlify.app/" class="secret-link" target="_blank" rel="noopener noreferrer" title="Voir le projet 🧭">🔗</a>
      <div class="preview-container"><iframe src="https://votre-boutique-rene.netlify.app/" loading="lazy"></iframe></div>`
  }
];

let currentIndex = 0;
const itemsPerLoad = 2;
let currentFilter = "all";

function loadMoreQuests() {
  const list = document.getElementById("questList");
  const filtered = currentFilter === "all" ? allQuests : allQuests.filter(q => q.tech === currentFilter);
  const slice = filtered.slice(currentIndex, currentIndex + itemsPerLoad);

  slice.forEach(q => {
    const li = document.createElement("li");
    li.innerHTML = q.content;
    li.dataset.tech = q.tech;
    setTimeout(() => li.classList.add("fade-in"), 10);
    list.appendChild(li);
  });

  currentIndex += itemsPerLoad;
  if (currentIndex >= filtered.length) {
    document.getElementById("loadMoreBtn").style.display = "none";
  }
}

function filterProjects(tech) {
  currentFilter = tech;
  currentIndex = 0;

  const list = document.getElementById("questList");
  list.style.opacity = "0";

  setTimeout(() => {
    list.innerHTML = "";
    list.style.opacity = "1";
    document.getElementById("loadMoreBtn").style.display = "inline-block";
    loadMoreQuests();
  }, 200);
}


// === 6. Sons de clics magiques ===
function playClickSound() {
  const sound = document.getElementById("clickSound");
  if (sound) {
    sound.volume = 0.2;
    sound.play();
  }
}

// === 7. Étincelles féériques ===
function createSparkle(x, y) {
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    const dx = (Math.random() - 0.5) * 500 + "px";
    const dy = (Math.random() - 0.5) * 500 + "px";
    sparkle.style.setProperty("--dx", dx);
    sparkle.style.setProperty("--dy", dy);

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    document.body.appendChild(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove());
  }
}

// === 8. Interactions globales sur les boutons ===
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
