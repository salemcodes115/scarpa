// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// CTA Button functionality
document.getElementById('ctaBtn').addEventListener('click', () => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

// Toggle View (Grid/List)
const toggleViewBtn = document.getElementById('toggleViewBtn');
const projectList = document.getElementById('projectList');
let isGridView = true;

toggleViewBtn.addEventListener('click', () => {
  isGridView = !isGridView;
  projectList.classList.toggle('list-view');
  toggleViewBtn.textContent = isGridView ? 'Toggle View' : 'Toggle View';
});

// Search functionality
const searchBox = document.getElementById('searchBox');
const projectCards = document.querySelectorAll('.project-card');

searchBox.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  
  projectCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});

// Modal functionality
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

const projectDetails = {
  'Rocket Project': 'Lightning-fast application framework for rapid development and deployment.',
  'Innovation Hub': 'Creative solution platform designed for innovative teams to collaborate and innovate.',
  'Security Suite': 'Advanced protection system with state-of-the-art encryption and security protocols.',
  'Global Network': 'Worldwide connectivity solution ensuring seamless communication across borders.'
};

projectCards.forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') return;
    const title = card.querySelector('h3').textContent;
    modalTitle.textContent = title;
    modalBody.textContent = projectDetails[title] || 'Project details coming soon.';
    modal.style.display = 'block';
  });
});

document.querySelectorAll('.btn-info').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.project-card');
    const title = card.querySelector('h3').textContent;
    modalTitle.textContent = title;
    modalBody.textContent = projectDetails[title] || 'Project details coming soon.';
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Animated counter for stats
function animateCounter() {
  const stats = document.querySelectorAll('.stat-number');
  
  stats.forEach(stat => {
    const target = parseInt(stat.dataset.target);
    const increment = target / 50;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        stat.textContent = target;
        clearInterval(timer);
      } else {
        stat.textContent = Math.floor(current);
      }
    }, 30);
  });
}

// Trigger counter animation when stats section is in view
const statsSection = document.querySelector('.stats');
const observerOptions = { threshold: 0.5 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      animateCounter();
      entry.target.dataset.counted = 'true';
    }
  });
}, observerOptions);

observer.observe(statsSection);

// Form submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill out all fields.';
    formMessage.className = 'form-message error';
    return;
  }
  
  // Simulate form submission
  formMessage.textContent = '✓ Message sent successfully! Thank you for contacting us.';
  formMessage.className = 'form-message success';
  
  // Reset form
  contactForm.reset();
  
  // Clear message after 5 seconds
  setTimeout(() => {
    formMessage.className = 'form-message';
  }, 5000);
});

// Scroll animation for feature cards
const featureCards = document.querySelectorAll('.feature-card');

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

featureCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.6s ease';
  cardObserver.observe(card);
});

console.log('✓ Interactive App loaded successfully!');
