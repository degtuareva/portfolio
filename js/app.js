// Создаем частицы - безопасно
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    const size = 5 + Math.random() * 10;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particlesContainer.appendChild(particle);
  }
}

// Анимация появления при скролле - безопасно
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

// Проверка поддержки IntersectionObserver
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Опционально: отключаем наблюдение после появления
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
} else {
  // Fallback для старых браузеров
  document.querySelectorAll('.fade-in-up').forEach(el => {
    el.classList.add('visible');
  });
}

// Проекты
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
    categories: ['frontend']
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
    badges: ['React', 'JavaScript', 'GPT'],
    categories: ['ai', 'frontend']
  },
  {
    name: 'CreditCalculator',
    url: 'https://github.com/degtuareva/creditCalculator.git',
    description: 'Full-stack для кредита',
    badges: ['React', 'Java', 'PWA'],
    categories: ['frontend', 'java']
  },
  {
    name: 'Pizza Constructor',
    url: 'https://github.com/degtuareva/pizza',
    description: 'Конструктор пиццы',
    badges: ['JavaScript'],
    categories: ['frontend']
  }
];

const projectList = document.getElementById('projectList');
const filterButtons = document.querySelectorAll('.filter-btn');

function displayProjects(projectsToShow) {
  if (!projectList) return;

  projectList.innerHTML = '';

  projectsToShow.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-item fade-in-up';
    projectCard.style.animationDelay = (index * 0.1) + 's';
    projectCard.setAttribute('tabindex', '0');

    // Безопасное создание HTML через createElement
    const titleDiv = document.createElement('div');
    titleDiv.className = 'flex items-start justify-between mb-4';

    const title = document.createElement('h3');
    title.className = 'text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors';
    title.textContent = project.name;

    const link = document.createElement('a');
    link.href = project.url;
    link.target = '_blank';
    link.className = 'text-indigo-500 hover:text-indigo-700 transition-colors text-2xl';
    link.innerHTML = '<i class="fas fa-external-link-alt"></i>';

    titleDiv.appendChild(title);
    titleDiv.appendChild(link);

    const description = document.createElement('p');
    description.className = 'text-gray-600 mb-6';
    description.textContent = project.description;

    const badgesDiv = document.createElement('div');
    badgesDiv.className = 'flex flex-wrap gap-2';

    project.badges.forEach(badge => {
      const badgeSpan = document.createElement('span');
      badgeSpan.className = 'px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-sm font-semibold rounded-full border border-indigo-200';
      badgeSpan.textContent = badge;
      badgesDiv.appendChild(badgeSpan);
    });

    projectCard.appendChild(titleDiv);
    projectCard.appendChild(description);
    projectCard.appendChild(badgesDiv);

    projectCard.addEventListener('click', (e) => {
      // Предотвращаем всплытие, если клик был по ссылке
      if (e.target.closest('a')) return;
      window.open(project.url, '_blank');
    });

    projectList.appendChild(projectCard);

    // Добавляем для анимации
    setTimeout(() => {
      projectCard.classList.add('visible');
    }, 50);
  });
}

function filterProjects(category) {
  if (category === 'all') return projects;
  return projects.filter(project => project.categories.includes(category));
}

// Фильтрация
if (filterButtons.length > 0) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filteredProjects = filterProjects(btn.dataset.filter);
      displayProjects(filteredProjects);
    });
  });
}

// Плавный скролл для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId !== '#') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// Инициализация
displayProjects(projects);
