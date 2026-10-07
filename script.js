const profileData = {
  name: 'Your Name',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  geeksforgeeks: 'https://www.geeksforgeeks.org/user/yourusername/',
  leetcode: 'https://leetcode.com/yourusername/',
  linkedin: 'https://www.linkedin.com/in/yourusername/'
};

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Crafting responsive interfaces with strong UX, performance, and accessibility in mind.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind']
  },
  {
    title: 'Backend',
    description: 'Designing APIs and application logic with scalable service-oriented patterns.',
    tags: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL']
  },
  {
    title: 'DSA',
    description: 'Solving problems with structured thinking, optimization, and efficient algorithms.',
    tags: ['Arrays', 'Graphs', 'DP', 'Trees', 'Hashing']
  },
  {
    title: 'Tools',
    description: 'Using modern tooling to accelerate development and improve collaboration.',
    tags: ['Git', 'GitHub', 'Figma', 'Postman', 'VS Code']
  }
];

const projects = [
  {
    title: 'Smart Task Manager',
    category: 'fullstack',
    description: 'A productivity dashboard with task tracking, filters, reminders, and analytics for daily planning.',
    tags: ['React', 'Node', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Portfolio Analytics',
    category: 'frontend',
    description: 'A clean dashboard for tracking portfolio metrics, engagement, and performance insights.',
    tags: ['JavaScript', 'Chart.js', 'CSS'],
    link: '#'
  },
  {
    title: 'Algorithm Vault',
    category: 'dsa',
    description: 'A collection of problem templates, strategies, and optimized solutions for interview preparation.',
    tags: ['C++', 'DSA', 'Patterns'],
    link: '#'
  },
  {
    title: 'Campus Connect',
    category: 'fullstack',
    description: 'A platform that connects students, mentors, and events through a community-first experience.',
    tags: ['Express', 'MongoDB', 'JWT'],
    link: '#'
  },
  {
    title: 'Weather Now',
    category: 'frontend',
    description: 'A responsive weather app with location alerts, temperature trends, and a visual forecast UI.',
    tags: ['API', 'UI/UX', 'Responsive'],
    link: '#'
  },
  {
    title: 'Code Sprint Tracker',
    category: 'dsa',
    description: 'A daily challenge tracker for progress monitoring, streaks, and retrospective improvement.',
    tags: ['Python', 'Analytics', 'Automation'],
    link: '#'
  }
];

const timeline = [
  {
    period: '2024 — Present',
    title: 'Software Developer',
    detail: 'Building full-stack web solutions and improving design quality, architecture, and product thinking.'
  },
  {
    period: '2023 — 2024',
    title: 'Frontend Developer',
    detail: 'Focused on responsive interfaces, component structure, and interactive user experiences across multiple projects.'
  },
  {
    period: '2022 — 2023',
    title: 'Problem Solver & Learner',
    detail: 'Strengthened algorithmic thinking and development fundamentals while solving hundreds of coding challenges.'
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
      (skill) => `
        <article class="skill-card glass-card">
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
      (project) => `
        <article class="project-card">
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
