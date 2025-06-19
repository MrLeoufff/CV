function revealForm() {
  const form = document.getElementById('contactForm');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

const allQuests = [
  { tech: 'symfony', content: "📦 <strong>SweetDelices</strong> – Commandes clients + API Prestashop" },
  { tech: 'vue', content: "🧙 <strong>Interface RPG</strong> – Vue.js + composant dynamique" },
  { tech: 'html', content: "💅 <strong>Mini Site Onglerie</strong> – design responsive mobile-first" },
  { tech: 'symfony', content: "🛠️ <strong>Gestion Zoo</strong> – Symfony + rôles utilisateurs" },
];

let currentIndex = 0;
const itemsPerLoad = 2;

function loadMoreQuests() {
  const list = document.getElementById('questList');
  const filter = currentFilter;

  const filtered = filter === 'all'
    ? allQuests
    : allQuests.filter(q => q.tech === filter);

  const slice = filtered.slice(currentIndex, currentIndex + itemsPerLoad);
  slice.forEach(q => {
    const li = document.createElement('li');
    li.innerHTML = q.content;
    li.dataset.tech = q.tech;
    setTimeout(() => {
  li.classList.add('fade-in');
}, 10);
    list.appendChild(li);
  });

  currentIndex += itemsPerLoad;
  if (currentIndex >= filtered.length) {
    document.getElementById('loadMoreBtn').style.display = 'none';
  }
}

let currentFilter = 'all';

function filterProjects(tech) {
  currentFilter = tech;
  currentIndex = 0;

  const list = document.getElementById('questList');
  
  list.style.transition = 'opacity 0.3s ease';
  list.style.opacity = '0';

  setTimeout(() => {
    list.innerHTML = '';
    list.style.opacity = '1'

    document.getElementById('loadMoreBtn').style.display = 'inline-block';
    loadMoreQuests();
  }, 200); 
}

