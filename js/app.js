const projects = [
  {
    name: 'User Service',
    url: 'https://github.com/degtuareva/user-service',
    description: 'Микросервис пользователей',
    badges: ['Java', 'Docker', 'JUnit'],
    categories: ['java', 'docker', 'testing']
  },
  {
    name: 'Message Service',
    url: 'https://github.com/degtuareva/message-service',
    description: 'Сервис сообщений',
    badges: ['Java', 'Docker'],
    categories: ['java', 'docker']
  },
  {
    name: 'GAME',
    url: 'https://degtuareva.github.io/GAME/',
    description: 'Игра на JavaScript',
    badges: ['JavaScript'],
    categories: ['frontend', 'javaScript']
  },
  {
    name: 'Telegram GPT Bot',
    url: 'https://github.com/degtuareva/java-bot-homework-1',
    description: 'Telegram бот с GPT-4o-mini',
    badges: ['Java', 'GPT-4o-mini'],
    categories: ['ai', 'java']
  },
  {
    name: 'AI Tutor',
    url: 'https://github.com/degtuareva/java-ai-tutor',
    description: 'AI репетитор (React + GPT)',
    badges: ['React', 'JavaScript', 'GPT-4o-mini'],
    categories: ['ai', 'frontend']
  },
  {
    name:'CreditCalculator',
    url: 'https://github.com/degtuareva/creditCalculator.git',
    description: 'Full‑stack‑приложение для расчета кредитного графика',
    badges: ['React','Java','JavaScript','PWA',],
    categories: ['frontend','java','docker']
  },
  {
    name: 'Pizza Constructor',
    url: 'https://github.com/degtuareva/pizza',
    description: 'Интерактивный конструктор пиццы',
    badges: ['JavaScript'],
    categories: ['frontend']
  }
];

const projectList = document.getElementById('projectList');
const filterButtons = document.querySelectorAll('.filter-btn');

function displayProjects(projectsToShow) {
  projectList.innerHTML = '';

  projectsToShow.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-item bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 border border-white/50 group cursor-pointer';
    projectCard.tabIndex = 0;

    projectCard.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <h3 class="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">${project.name}</h3>
        <a href="${project.url}" target="_blank" class="text-indigo-500 hover:text-indigo-700 transition-colors">
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
      <p class="text-gray-600 mb-6">${project.description}</p>
      <div class="flex flex-wrap gap-2 mb-6">
        ${project.badges.map(badge =>
      `<span class="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-sm font-semibold rounded-full border border-indigo-200">${badge}</span>`
    ).join('')}
      </div>
    `;

    projectCard.addEventListener('click', () => {
      window.open(project.url, '_blank');
    });

    projectList.appendChild(projectCard);
  });
}

function filterProjects(category) {
  if (category === 'all') return projects;
  return projects.filter(project => project.categories.includes(category));
}

// Фильтрация
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filteredProjects = filterProjects(btn.dataset.filter);
    displayProjects(filteredProjects);
  });
});

// Показать все по умолчанию
displayProjects(projects);

// Плавный скролл для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
