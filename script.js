// Experience information displayed when a company tab is selected.
const experiences = [
  {
    role: 'Autonomy and Automation Intern',
    team: 'AUTOMATION & AUTONOMY ENGINEERING',
    date: 'May 2026 to Aug 2026',
    points: [
      'Developed a proof of concept for coordinating multiple autonomous machines.',
      'Built a Python simulation to explore machine coordination, operating scenarios, and system behavior.',
      'Supported field testing, software flashing, machine data validation, and troubleshooting of autonomous equipment.'
    ],
    tags: ['Python', 'Autonomy', 'Simulation', 'Systems Engineering', 'Testing & Validation']
  },
  {
    role: 'Operational Technology Intern',
    team: 'OPERATIONAL TECHNOLOGY',
    date: 'Jun 2025 to Aug 2025',
    points: [
      'Developed Python automation tools to support operational workflows and reduce repetitive manual work.',
      'Validated SCADA telemetry and communication status for renewable energy facilities.',
      'Worked with industrial control configurations, operational data, and technical documentation.'
    ],
    tags: ['Python', 'SCADA', 'Automation', 'Data Validation']
  },
  {
    role: 'Full Stack Developer Intern',
    team: 'SOFTWARE DEVELOPMENT',
    date: 'May 2024 to Aug 2024',
    points: [
      'Contributed to application development and an AI powered recommendation system using Google Vertex AI.',
      'Worked with software development tools and AI technologies to support application features.'
    ],
    tags: ['Software Development', 'AI', 'Google Vertex AI']
  },
  {
    role: 'Peer Educator',
    team: 'STUDENT SUCCESS & MENTORSHIP',
    date: 'Aug 2024 to Present',
    points: [
      'Mentor students through challenging academic concepts and technical coursework.',
      'Support student learning through individual guidance, problem solving, and academic resources.',
      'Help students develop confidence and effective learning strategies.'
    ],
    tags: ['Mentorship', 'Tutoring', 'Communication', 'Problem Solving']
  },
  {
    role: 'Vice President',
    team: 'NATIONAL SOCIETY OF BLACK ENGINEERS',
    date: '2026 to 2027',
    points: [
      'Support and coordinate an executive board of 16 officers to advance chapter goals.',
      'Oversee leadership accountability, member engagement, and organizational initiatives.',
      'Collaborate with campus partners and student leaders to expand professional development opportunities.'
    ],
    tags: ['Leadership', 'Project Coordination', 'Teamwork']
  }
];

// Experience tab selection and keyboard accessibility.
const tabs = [...document.querySelectorAll('.experience-tab')];
const detail = document.querySelector('#experience-detail');

function showExperience(index) {
  const experience = experiences[index];
  detail.innerHTML = `
    <h3>${experience.role}</h3>
    <span class="date">${experience.date}</span>
    <p class="team">${experience.team}</p>
    <ul>${experience.points.map(point => `<li>${point}</li>`).join('')}</ul>
    <div class="pills">${experience.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
  `;

  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
    tab.setAttribute('aria-selected', String(i === index));
    tab.id = `experience-tab-${i}`;
  });
  detail.setAttribute('aria-labelledby', `experience-tab-${index}`);
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => showExperience(index));
  tab.addEventListener('keydown', event => {
    let nextIndex;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex = (index + tabs.length - 1) % tabs.length;
    } else {
      return;
    }
    event.preventDefault();
    tabs[nextIndex].focus();
    showExperience(nextIndex);
  });
});
showExperience(0);

// Mobile navigation toggle and automatic closing after a link is selected.
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
  menu.querySelector('i').className = isOpen ? 'bx bx-x' : 'bx bx-menu';
});

links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.querySelector('i').className = 'bx bx-menu';
  });
});
