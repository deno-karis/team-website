 /* =====================================================
   Team novateq script (CSC 216, Lab 2)
   Loaded on every page with `defer`, so the HTML is
   fully parsed before any of this code runs.
   ===================================================== */

/* ---------- 1. Shared: runs on every page ---------- */

// Put the current year in the footer.
const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Open and close the navigation menu on small screens.
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Dark mode, remembered across pages and visits.
const themeToggle = document.querySelector('.theme-toggle');
const THEME_KEY = 'team-theme';

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark', isDark);
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
  }
}

applyTheme(localStorage.getItem(THEME_KEY));

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  });
}
/* ---------- 2. Projects page ---------- */

const projects = [
<<<<<<< HEAD
  
{
  title: "Student Registration System",
  description: "A student registration website where students can enter their names, email addresses, select courses and submit their registration details.",
  technologies: ["HTML", "CSS", "JavaScript"],
  category: "js"
},
{
  title: "To-Do List Application",
  description: "A task management website that allows users to add daily tasks, mark tasks as completed and delete tasks when they are finished.",
  technologies: ["HTML", "CSS", "JavaScript"],
  category: "js"
}
=======
 {
    title: 'Personal landing page',
    category: 'html',
    description: 'A single semantic HTML page with headings, lists and links.'
  },
  {
    title: 'Responsive card grid',
    category: 'css',
    description: 'A layout that goes from one column on phones to three on laptops.'
  },
  {
    title: 'Tip calculator',
    category: 'js',
    description: 'Reads two inputs and updates the total as you type.'
  },
  {
    title: 'Accessible contact form',
    category: 'html',
    description: 'Labelled fields, helpful errors and keyboard-friendly controls.'
  },
  {
    title: 'Dark mode toggle',
    category: 'js',
    description: 'Switches the colour theme and remembers the choice.'
  },
  {
    title: 'Flexbox navigation bar',
    category: 'css',
    description: 'A header that collapses into a menu button on small screens.'
  },

  // My first additional project
  {
    title: 'Student Management System',
    category: 'python',
    description: 'A Python application for managing student registration, academic records and grades.'
  },

  // My second additional project
  {
    title: 'GitHub Version Control Project',
    category: 'git',
    description: 'Demonstrates Git and GitHub skills including repositories, commits, branches and version control.'
  }
>>>>>>> c20d4a8b6044e67795899f3c306db105d1f45569
];

const categoryNames = { html: 'HTML', css: 'CSS', js: 'JavaScript',python: 'Python',
  git: 'Git & GitHub' };

const projectList = document.querySelector('#project-list');
const projectCount = document.querySelector('#project-count');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectSearch = document.querySelector('#project-search');
let currentFilter = 'all';
function renderProjects(filter) {
  const visible = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  projectList.replaceChildren();

  visible.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'card';

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = categoryNames[project.category];

    const heading = document.createElement('h3');
    heading.textContent = project.title;

    const text = document.createElement('p');
    text.textContent = project.description;

    const link = document.createElement('a');
link.href = project.link;
link.textContent = 'View Project';
link.className = 'project-link';

card.append(tag, heading, text, link);
projectList.append(card);
  });

  projectCount.textContent = `Showing ${visible.length} of ${projects.length} projects`;
}

if (projectList) {
  renderProjects('all');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) =>
        btn.setAttribute('aria-pressed', 'false')
      );

      button.setAttribute('aria-pressed', 'true');

      currentFilter = button.dataset.filter;

      updateProjects();
    });
  });

  // Project search functionality
  if (projectSearch) {
    projectSearch.addEventListener('input', updateProjects);
  }
}

// Display projects according to search and category
function updateProjects() {
  const searchTerm = projectSearch
    ? projectSearch.value.toLowerCase().trim()
    : '';

  const visibleProjects = projects.filter((project) => {
    const matchesCategory =
      currentFilter === 'all' ||
      project.category === currentFilter;

    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  projectList.replaceChildren();

  visibleProjects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'card';

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = categoryNames[project.category];

    const heading = document.createElement('h3');
    heading.textContent = project.title;

    const text = document.createElement('p');
    text.textContent = project.description;

    card.append(tag, heading, text);
    projectList.append(card);
  });

  projectCount.textContent =
    `Showing ${visibleProjects.length} of ${projects.length} projects`;
}
/* ---------- 3. Contact page ---------- */

const form = document.querySelector('#contact-form');

if (form) {
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');
  const charCount = document.querySelector('#char-count');
  const statusEl = document.querySelector('#form-status');

  // Live character counter.
  messageInput.addEventListener('input', () => {
    charCount.textContent = messageInput.value.length;
  });

  // Show (or clear) the error message under one field.
  function showError(input, message) {
    const errorEl = document.querySelector(`#${input.id}-error`);
    errorEl.textContent = message;
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  // Check every field. Returns true only if all are valid.
  function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
      showError(nameInput, 'Please enter your name.');
      isValid = false;
    } else {
      showError(nameInput, '');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, 'Enter an email address like name@example.com.');
      isValid = false;
    } else {
      showError(emailInput, '');
    }

    if (messageInput.value.trim().length < 20) {
      showError(messageInput, 'Your message needs at least 20 characters.');
      isValid = false;
    } else {
      showError(messageInput, '');
    }

    return isValid;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    statusEl.textContent = '';

    if (!validateForm()) {
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }

    const firstName = nameInput.value.trim().split(' ')[0];
    statusEl.textContent = `Thanks, ${firstName}! Your message is ready. (We connect this form to a real server later.)`;
    form.reset();
    charCount.textContent = '0';
  });
}

/* ---------- 4. Student Registration System ---------- */

const registrationForm = document.querySelector('#registration-form');

if (registrationForm) {
  registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#student-name').value.trim();
    const email = document.querySelector('#student-email').value.trim();
    const course = document.querySelector('#student-course').value;

    const message = document.querySelector('#registration-message');

    message.textContent =
      `Congratulations, ${name}! You have successfully registered for ${course}.`;

    registrationForm.reset();
  });
}

/* ---------- 5. To-Do List Application ---------- */

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

if (todoForm && todoInput && todoList) {

  // Load saved tasks.
  let tasks = JSON.parse(localStorage.getItem('team-tasks') || '[]');

  function displayTasks() {
    todoList.replaceChildren();

    tasks.forEach((task, index) => {
      const li = document.createElement('li');

      const span = document.createElement('span');
      span.textContent = task.text;

      if (task.completed) {
        span.style.textDecoration = 'line-through';
      }

      const completeBtn = document.createElement('button');
      completeBtn.textContent = task.completed ? 'Undo' : 'Complete';

      completeBtn.addEventListener('click', () => {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';

      deleteBtn.addEventListener('click', () => {
        tasks.splice(index, 1);
        saveTasks();
      });

      li.append(span, completeBtn, deleteBtn);
      todoList.append(li);
    });
  }

  function saveTasks() {
    localStorage.setItem('team-tasks', JSON.stringify(tasks));
    displayTasks();
  }

  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskText = todoInput.value.trim();

    if (taskText === '') return;

    tasks.push({
      text: taskText,
      completed: false
    });

    saveTasks();
    todoForm.reset();
    todoInput.focus();
  });

  displayTasks();
}
