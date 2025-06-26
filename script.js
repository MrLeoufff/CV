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

const popup = document.getElementById('musicConsent');
const music = document.getElementById('ambience');
const enableBtn = document.getElementById('enableMusic');
const declineBtn = document.getElementById('declineMusic');

enableBtn.addEventListener('click', () => {
  music.play()
    .then(() => {
      // ✅ Lecture réussie → on cache la popup
      popup.style.display = 'none';
    })
    .catch(error => {
      console.error("Erreur lecture audio :", error);
      alert("Impossible de lire la musique. Vérifiez le format ou autorisez l'audio.");
      popup.style.display = 'none'; // Optionnel : on cache quand même
    });
});

declineBtn.addEventListener('click', () => {
  popup.style.display = 'none';
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

  currentRole = currentRole === "manager" ? "developer" : "manager";
  currentIndex = 0;
  document.getElementById("questList").innerHTML = "";
  document.getElementById("loadMoreBtn").style.display = "inline-block";
  updateFilterLabels();
  loadMoreQuests();
}

// Appel initial pour mettre à jour les labels
const filterLabels = {
  developer: {
    html: "🃏 HTML/CSS/JS",
    symfony: "⚔️ Symfony",
    vue: "🧙 Vue.js"
  },
  manager: {
    html: "📋 Organisation",
    symfony: "📦 Gestion de stock",
    vue: "📈 Suivi des ventes"
  }
};

function updateFilterLabels() {
  const labels = filterLabels[currentRole];
  document.getElementById("filter-html").textContent = labels.html;
  document.getElementById("filter-symfony").textContent = labels.symfony;
  document.getElementById("filter-vue").textContent = labels.vue;
}

// === 5. Projets dynamiques ===
const questsByRole = {
  manager: [
    {
      tech: "html",
      content: "🧾 <strong>Optimisation de linéaire</strong> – Merchandising & facing"
    },
    {
      tech: "symfony",
      content: "📊 <strong>Suivi des stocks</strong> – Tableaux Excel & ERP"
    },
    {
      tech: "vue",
      content: "📈 <strong>Suivi des ventes</strong> – Graphiques & statistiques"
    }
  ],
  developer: [
    {
      tech: "vue",
      content: "🧙 <strong>Interface RPG</strong> – Vue.js + composant dynamique"
    },
    {
      tech: "symfony",
      content: `🛠️ <strong>Chatterie Bengal No-mori</strong> – Symfony + rôles utilisateurs
      <a href="https://chatteriebengalnomori.fr/" class="secret-link" target="_blank" rel="noopener noreferrer" title="Voir le projet 🧭">🔗</a>
      <div class="preview-container">
        <img src="assets/images/png.png" loading="lazy" style="width: 100%; object-fit: cover; border-radius: 8px;" />
      </div>`
    },
    {
      tech: "symfony",
      content: "📦 <strong>SweetDelices</strong> – Commandes clients + API Prestashop"
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
  ]
};

let currentRole = "manager";
let currentIndex = 0;
const itemsPerLoad = 2;
let currentFilter = "all";

function loadMoreQuests() {
  const list = document.getElementById("questList");
  const roleQuests = questsByRole[currentRole] || [];
  const filtered = currentFilter === "all" ? roleQuests : roleQuests.filter(q => q.tech === currentFilter);
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

function selectCard(cardElement) {
  document.querySelectorAll('.filter-card').forEach(c => c.classList.remove('active'));
  cardElement.classList.add('active');

  const tech = cardElement.dataset.tech;
  filterProjects(tech);
}

document.addEventListener("DOMContentLoaded", () => {
  updateFilterLabels();
  loadMoreQuests();
});


