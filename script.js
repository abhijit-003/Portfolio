const profileData = {
  name: 'Abhijit Chavan',
  email: 'abhijitchavan005@gmail.com',
  github: 'https://github.com/abhijit-003',
  geeksforgeeks: 'https://www.geeksforgeeks.org/user/abhijit003/',
  leetcode: 'https://leetcode.com/abhijit003/',
  linkedin: 'https://www.linkedin.com/in/abhijit003/'
};

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Crafting responsive interfaces with strong UX, performance, and accessibility in mind.',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  { title: 'Backend & APIs', 
    description: 'Developing backend-oriented skills around APIs, application logic, databases, and scalable service design.', 
    tags: ['REST APIs', 'Java', 'SQL', 'Backend Development'] },
  {
    title: 'DSA',
    description: 'Solving problems with structured thinking, optimization, and efficient algorithms.',
    tags: ['Arrays', 'Graphs', 'DP', 'Trees', 'Hashing']
  },
  { title: 'Software Engineering', 
    description: 'Applying debugging, root-cause analysis, system thinking, and production problem solving to enterprise software.', 
    tags: ['System Design', 'Debugging', 'Git',  'Postman', 'Linux'] 
 } 
];

const projects = [
    {
  title: 'Treado',
  category: 'BACKEND',
  description:
    'Full-stack trading platform built with Spring Boot and React, featuring JWT-based authentication, stock trading, wallet and transaction management, secure REST APIs, and MySQL persistence with external market-data integrations.',
  tags: [
    'Java',
    'Spring Boot',
    'Spring Security',
    'JWT',
    'MySQL',
    'React',
    'REST API'
  ],
  link: 'https://github.com/abhijit-003/Treado'
},
{
  title: 'NewsApp',
  category: 'fullstack',
  description:
    'Java-based Android news application integrating REST APIs to deliver real-time, category-based news with user authentication, preference-based recommendations, and network image caching using Retrofit and Glide.',
  tags: ['Java', 'Android', 'REST API', 'Retrofit', 'Glide'],
  link: 'https://github.com/abhijit-003/NewsApp'
},
{
    title: 'Algorithm Vault',
    category: 'dsa',
    description: 'A collection of problem templates, strategies, and optimized solutions for interview preparation.',
    tags: ['Java', 'Python', 'DSA', 'Patterns'],
    link: 'https://github.com/abhijit-003/LeetcodeJavaSolutions'
  }
/*
{
  title: 'Image-to-PDF Converter Telegram Bot',
  category: 'backend',
  description:'Python Telegram bot for bidirectional image/PDF conversion, featuring asynchronous file processing, multi-step workflows, validation, error handling, and Telegram API integration.',
  tags: ['Python', 'Telegram API', 'AsyncIO', 'Pillow', 'PDF Processing'],
  link: 'https://github.com/abhijit-003/Image-to-PDF-Converter-Telegram-Bot'
},  

      { 
        title: 'Task Manager Java Application', 
        category: 'backend', 
        description: 'Java-based task management web application built with JSP and Servlets, implementing server-side request handling, session management, and task management workflows.', 
        tags: ['Java', 'JSP', 'Servlets', 'MVC'], 
        link: 'https://github.com/abhijit-003/Task-Manager-Java-Application' 
    }, 
    { 
        title: 'Social Problem Revealer', 
        category: 'fullstack', 
        description: 'Java web application for reporting and prioritizing local social issues, built with JSP, Servlets, and MySQL using MVC architecture, session management, and admin workflows.', 
        tags: ['Java', 'JSP', 'Servlets', 'MySQL', 'MVC'], 
        link: 'https://github.com/abhijit-003/Social-Problem-Revealer' 
    } */
];

const timeline = [
  {
    period: '2025 — Present',
    title: 'Product Analyst at PTC',
    detail: 'Solving complex enterprise software problems through Java-based customization, debugging, system analysis, and root-cause investigation across FlexPLM and Windchill. Building a strong foundation in software engineering, backend development, system design, and scalable problem solving.'
  }
];

const renderProfileLinks = () => {
  const container = document.getElementById('profileLinks');
  const links = [
    {
      label: 'GitHub',
      href: profileData.github,
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.47-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.61 5.23-5.1 5.5.4.34.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>'
    },
    {
      label: 'GeeksforGeeks',
      href: profileData.geeksforgeeks,
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2a9.8 9.8 0 1 0 9.8 9.8A9.81 9.81 0 0 0 12 2.2Zm0 2.1a7.7 7.7 0 1 1-7.7 7.7A7.71 7.71 0 0 1 12 4.3Zm-3.8 4v2h4.2a2 2 0 0 1 1.8 1H9v2h5.2a2 2 0 0 1-1.8 1H8.2v2h4.2a4 4 0 0 0 3.9-3h1.5v-2h-1.5a4 4 0 0 0-3.9-3Z"/></svg>'
    },
    {
      label: 'LeetCode',
      href: profileData.leetcode,
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.2 3.2 9.1 9.3a3.8 3.8 0 0 0 0 5.4l1.1 1.1-1.5 1.5-1.1-1.1a5.9 5.9 0 0 1 0-8.4l6.1-6.1Zm-4.3 15.2 1.5-1.5 1.1 1.1a3.8 3.8 0 0 0 5.4 0l1.5 1.5a5.9 5.9 0 0 1-8.4 0Zm-1-7.5h9.7v2.1H9.9Z"/></svg>'
    },
    {
      label: 'LinkedIn',
      href: profileData.linkedin,
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.2 18H5.8V9.6h2.4ZM7 8.5a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8ZM18.2 18h-2.4v-4.1c0-1 0-2.2-1.4-2.2s-1.6 1.1-1.6 2.1V18h-2.4V9.6h2.3v1.1h.1a2.6 2.6 0 0 1 2.3-1.3c2.5 0 3 1.6 3 3.7Z"/></svg>'
    }
  ];

  container.innerHTML = links
    .map(
      (link) => `
        <a class="profile-link" href="${link.href}" target="_blank" rel="noreferrer" aria-label="${link.label}" title="${link.label}">
          ${link.icon}<span>${link.label}</span>
        </a>
      `
    )
    .join('');

  const footerLinks = document.getElementById('footerLinks');
  footerLinks.innerHTML = links
    .map(
      (link) => `
        <a href="${link.href}" target="_blank" rel="noreferrer" aria-label="${link.label}" title="${link.label}">
          ${link.icon}
        </a>
      `
    )
    .join('');
};

const renderSkills = () => {
  const skillsGrid = document.getElementById('skillsGrid');
  skillsGrid.innerHTML = skillGroups
    .map(
      (skill, index) => `
        <article class="skill-card glass-card" style="--card-index: ${index}">
          <h4>${skill.title}</h4>
          <p>${skill.description}</p>
          <div class="skill-tags">
            ${skill.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
        </article>
      `
    )
    .join('');
};

const renderProjects = (filter = 'all') => {
  const projectsGrid = document.getElementById('projectsGrid');
  const filtered = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  projectsGrid.innerHTML = filtered
    .map(
      (project, index) => `
        <article class="project-card" style="--card-index: ${index}">
          <div class="project-media">
            <span class="project-badge">${project.category}</span>
          </div>
          <div class="project-body">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <div class="project-tags">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
            </div>
            <div class="project-links">
              <a href="${project.link}" target="_blank" rel="noreferrer">View Project</a>
              <span>↗</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');
};

const renderTimeline = () => {
  const timelineEl = document.getElementById('timeline');
  timelineEl.innerHTML = timeline
    .map(
      (item) => `
        <div class="timeline-item">
          <div class="timeline-card glass-card">
            <div class="meta">
              <span>${item.period}</span>
            </div>
            <h4>${item.title}</h4>
            <p>${item.detail}</p>
          </div>
        </div>
      `
    )
    .join('');
};

const animateStats = () => {
  const counters = document.querySelectorAll('[data-count]');

  counters.forEach((counter) => {
    const target = Number(counter.dataset.count);
    const duration = 1200;
    let start = null;

    const tick = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = `${value}${counter.dataset.count === '95' ? '%' : '+'}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
};

const setupFilters = () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      renderProjects(button.dataset.filter);
    });
  });
};

const setupRevealAnimations = () => {
  const revealItems = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
};

const setupThemeToggle = () => {
  const button = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('portfolioTheme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    button.innerHTML = '<span class="toggle-icon">🌙</span>';
  }

  button.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('portfolioTheme', isLight ? 'light' : 'dark');
    button.innerHTML = `<span class="toggle-icon">${isLight ? '🌙' : '☀️'}</span>`;
  });
};

const setupNavigation = () => {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
};
// To calculate experience in years and months
const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  return (months / 12).toFixed(1);
};

document.getElementById('experience').textContent =
  `${calculateExperience('2025-04-10')}+ yrs`;
const init = () => {
  document.getElementById('nameHighlight').textContent = profileData.name;
  renderProfileLinks();
  renderSkills();
  renderProjects();
  renderTimeline();
  animateStats();
  setupFilters();
  setupRevealAnimations();
  setupThemeToggle();
  setupNavigation();
};

window.addEventListener('DOMContentLoaded', init);
