(function () {
  'use strict';

  function init() {
    // Анимированная строка роли
    if (window.Typed) {
      new Typed('#typed', {
        strings: [
          'Fullstack разработчик',
          'Java & Spring Boot',
          'React Frontend',
          'GPT-4o-mini интеграции'
        ],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
      });
    }

    // Мобильное меню
    const nav = document.getElementById('siteNav');
    const toggle = document.getElementById('navToggle');

    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav-links a, .nav-cta').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Проекты
    const projects = [
      {
        name: 'User Service',
        url: 'https://github.com/degtuareva/user-service',
        description: 'Микросервис пользователей: регистрация, профили и REST API.',
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker']
      },
      {
        name: 'Message Service',
        url: 'https://github.com/degtuareva/message-service',
        description: 'Сервис сообщений с хранением истории и API для интеграций.',
        tech: ['Java', 'Spring Boot', 'Docker']
      },
      {
        name: 'Telegram GPT Bot',
        url: 'https://github.com/degtuareva/java-bot-homework-1',
        description: 'Telegram-бот с диалогами на базе GPT-4o-mini.',
        tech: ['Java', 'Telegram Bot API', 'GPT-4o-mini']
      },
      {
        name: 'AI Tutor',
        url: 'https://github.com/degtuareva/java-ai-tutor',
        description: 'React-приложение с AI-репетитором и интерактивными уроками.',
        tech: ['React', 'JavaScript', 'GPT']
      },
      {
        name: 'CreditCalculator',
        url: 'https://github.com/degtuareva/creditCalculator.git',
        description: 'Fullstack-приложение для расчёта кредита с PWA-поддержкой.',
        tech: ['React', 'Java', 'PWA']
      },
      {
        name: 'GAME',
        url: 'https://degtuareva.github.io/GAME/',
        description: 'Интерактивная браузерная игра на JavaScript.',
        tech: ['JavaScript', 'HTML', 'CSS']
      },
      {
        name: 'Pizza Constructor',
        url: 'https://github.com/degtuareva/pizza',
        description: 'Конструктор пиццы с выбором ингредиентов и расчётом стоимости.',
        tech: ['JavaScript', 'HTML', 'CSS']
      }
    ];

    const grid = document.getElementById('projectsGrid');

    projects.forEach(function (project) {
      const card = document.createElement('article');
      card.className = 'project-card';

      const title = document.createElement('h4');
      title.textContent = project.name;

      const desc = document.createElement('p');
      desc.textContent = project.description;

      const tech = document.createElement('div');
      tech.className = 'project-tech';

      project.tech.forEach(function (item) {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = item;
        tech.appendChild(tag);
      });

      const link = document.createElement('a');
      link.href = project.url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.className = 'btn btn-outline';
      link.style.marginTop = '1rem';
      link.innerHTML = '<i class="fab fa-github"></i> Открыть проект';

      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(tech);
      card.appendChild(link);
      grid.appendChild(card);
    });

    // Шкалы навыков
    document.querySelectorAll('.skill-card').forEach(function (card) {
      const level = parseInt(card.dataset.level, 10);
      const segments = 10;
      const filled = Math.round((level / 100) * segments);
      const meter = card.querySelector('.meter');

      for (let i = 0; i < segments; i++) {
        const seg = document.createElement('i');
        if (i < filled) seg.classList.add('on');
        meter.appendChild(seg);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
