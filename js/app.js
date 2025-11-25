const projects = [
  { name: 'User Service (Java + Docker + Testing)', url: 'https://github.com/degtuareva/user-service.git', categories: ['java', 'docker', 'testing'] },
  { name: 'Message Service (Java + Docker)', url: 'https://github.com/degtuareva/message-service.git', categories: ['java', 'docker'] },
  { name: 'Image Service (Java + Docker)', url: 'https://github.com/degtuareva/image-service.git', categories: ['java', 'docker'] },
  { name: 'Common Library (Java)', url: 'https://github.com/degtuareva/common-lib.git', categories: ['java'] },
  { name: 'Discovery Service (Java + Docker)', url: 'https://github.com/degtuareva/discovery-service.git', categories: ['java', 'docker'] },
  { name: 'API Gateway Service (Java)', url: 'https://github.com/degtuareva/api-gateway-service.git', categories: ['java'] },
  { name: 'Auth Service (Java)', url: 'https://github.com/degtuareva/auth-service.git', categories: ['java'] },
  { name: 'JCalc Project (Java)', url: 'https://github.com/degtuareva/jcalc.iml.git', categories: ['java'] },
  { name: 'GAME (JavaScript)', url: 'https://github.com/degtuareva/GAME.git', categories: ['javaScript'] },
  { name: 'Pizza (JavaScript)', url: 'https://github.com/degtuareva/pizza.git', categories: ['javaScript'] }
];

const projectList = document.getElementById('projectList');
const filterButtons = document.querySelectorAll('.filter-btn');

function displayProjects(filteredProjects) {
  projectList.innerHTML = '';
  if(filteredProjects.length === 0) {
    projectList.innerHTML = '<li class="text-center text-gray-500 col-span-full">Нет проектов для отображения</li>';
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
  if(category === 'all') {
    return projects;
  }
  return projects.filter(project => project.categories.includes(category));
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    const filtered = filterProjects(filter);
    displayProjects(filtered);
  });
});

// Показываем все проекты по умолчанию
displayProjects(projects);
