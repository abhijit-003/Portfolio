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
  category: 'fullstack',
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
    { label: 'GitHub', href: profileData.github },
    { label: 'GeeksforGeeks', href: profileData.geeksforgeeks },
    { label: 'LeetCode', href: profileData.leetcode },
    { label: 'LinkedIn', href: profileData.linkedin }
  ];

  container.innerHTML = links
    .map(
      (link) => `
        <a class="profile-link" href="${link.href}" target="_blank" rel="noreferrer">
          ${link.label}
        </a>
      `
    )
    .join('');

  const footerLinks = document.getElementById('footerLinks');
  footerLinks.innerHTML = links
    .map(
      (link) => `
        <a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>
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
