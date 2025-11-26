const projects = [
  {
    name: 'User Service (Java + Docker + Testing)',
    url: 'https://github.com/degtuareva/user-service.git',
    categories: ['java', 'docker', 'testing']
  },
  {
    name: 'Message Service (Java + Docker)',
    url: 'https://github.com/degtuareva/message-service.git',
    categories: ['java', 'docker']
  },
  {
    name: 'Image Service (Java + Docker)',
    url: 'https://github.com/degtuareva/image-service.git',
    categories: ['java', 'docker']
  },
  {name: 'Common Library (Java)', url: 'https://github.com/degtuareva/common-lib.git', categories: ['java']},
  {
    name: 'Discovery Service (Java + Docker)',
    url: 'https://github.com/degtuareva/discovery-service.git',
    categories: ['java', 'docker']
  },
  {
    name: 'API Gateway Service (Java)',
    url: 'https://github.com/degtuareva/api-gateway-service.git',
    categories: ['java']
  },
  {name: 'Auth Service (Java)', url: 'https://github.com/degtuareva/auth-service.git', categories: ['java']},
  {name: 'JCalc Project (Java)', url: 'https://github.com/degtuareva/jcalc.iml.git', categories: ['java']},
  {name: 'GAME (JavaScript)', url: 'https:https://degtuareva.github.io/GAME/', categories: ['javaScript']},
  {name: 'Pizza (JavaScript)', url: 'https://degtuareva.github.io/pizza/', categories: ['javaScript']}
];

const projectList = document.getElementById('projectList');
const filterButtons = document.querySelectorAll('.filter-btn');

function displayProjects(filteredProjects) {
  projectList.innerHTML = '';
  if (filteredProjects.length === 0) {
    projectList.innerHTML = '<li class="text-center text-gray-500 col-span-full" tabindex="0">Нет проектов для отображения</li>';
    return;
  }
  filteredProjects.forEach(project => {
    const li = document.createElement('li');
    li.className = 'project-item bg-white p-6 rounded-lg shadow-md cursor-pointer transition';

    const a = document.createElement('a');
    a.href = project.url;
    a.target = '_blank';
    a.rel = 'noreferrer noopener';
    a.textContent = project.name;
    a.className = 'text-indigo-600 hover:underline font-semibold text-lg';

    li.appendChild(a);
    projectList.appendChild(li);
  });
}

function filterProjects(category) {
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.categories.includes(category));
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    const filter = btn.getAttribute('data-filter');
    const filtered = filterProjects(filter);
    displayProjects(filtered);
  });
});

const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

//открываем меню
dropdownBtn.addEventListener('click', function (e) {
  dropdownMenu.classList.toggle('open');
});

document.addEventListener("click", function (e) {
  // НЕ закрываем, если клик по ссылке или по меню
  if (!dropdownMenu.contains(e.target) && e.target !== dropdownBtn) {
    dropdownMenu.classList.remove("open");
  }
});


document.addEventListener("click", function (e) {
  // Если клик был вне меню и не по кнопке, закрываем меню
  if (
    !dropdownMenu.contains(e.target) &&
    e.target !== dropdownBtn
  ) {
    dropdownMenu.classList.remove("open");
  }
});

// Показываем все проекты по умолчанию
displayProjects(projects);
