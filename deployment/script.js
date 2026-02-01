// Mobile menu toggle
document.getElementById('mobileToggle').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('active');
});

// Close menu when link clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navMenu').classList.remove('active');
  });
});

// CTA button
document.getElementById('ctaBtn').addEventListener('click', () => {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

// Search functionality
const searchBox = document.getElementById('searchBox');
const projectCards = document.querySelectorAll('.project-card');

searchBox.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  projectCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const desc = card.querySelector('p').textContent.toLowerCase();
    card.style.display = title.includes(term) || desc.includes(term) ? '' : 'none';
  });
});

// Modal
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const projectDetails = {
  'Dashboard': 'Advanced analytics dashboard with real-time data visualization.',
  'E-Commerce': 'Complete online store with product catalog and payment integration.',
  'Chat App': 'Modern messaging app with real-time notifications.',
  'CMS': 'Powerful content management system for websites.'
};

projectCards.forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') return;
    const title = card.querySelector('h3').textContent;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').textContent = projectDetails[title] || 'Project details.';
    modal.style.display = 'block';
  });
});

document.querySelectorAll('.btn-info').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.project-card');
    const title = card.querySelector('h3').textContent;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').textContent = projectDetails[title] || 'Project details.';
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

// Animated counter
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

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      animateCounter();
      entry.target.dataset.counted = 'true';
    }
  });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.stats'));

// Form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = document.getElementById('formMessage');
  msg.textContent = '✓ Message sent! Thank you for reaching out.';
  msg.className = 'form-message success';
  document.getElementById('contactForm').reset();
  setTimeout(() => { msg.className = 'form-message'; }, 5000);
});

console.log('✓ Web app deployed successfully!');
