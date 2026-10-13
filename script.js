// Paramabira @Semarang — interaksi ringan

// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar: efek saat scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Reveal on scroll
const toReveal = document.querySelectorAll(
  '.section-head, .about-text, .about-stats, .ach-card, .gal-item, .join-card'
);
toReveal.forEach((el) => el.classList.add('reveal'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
toReveal.forEach((el) => io.observe(el));

// Tandai placeholder gambar yang masih kosong (src belum diisi)
document.querySelectorAll('.ach-img img, .gal-item img').forEach((img) => {
  if (!img.getAttribute('src')) {
    img.style.display = 'none';
    img.parentNode.classList.add('is-empty');
  }
});
