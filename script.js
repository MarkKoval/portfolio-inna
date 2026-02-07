const progressNode = document.getElementById('progressValue');
const reveals = document.querySelectorAll('.reveal');

const updateProgress = () => {
  const scrolled = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? Math.round((scrolled / max) * 100) : 0;
  progressNode.textContent = `${Math.min(100, Math.max(0, pct))}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.15 });
reveals.forEach((el) => io.observe(el));

const industryData = {
  ovens: { title: 'Ovens', text: 'High-temperature textile sleeves engineered for continuous radiant and convective heat in industrial oven lines.' },
  vitroceramics: { title: 'Vitroceramics', text: 'Precision insulation for fragile high-heat glass-ceramic systems requiring stable thermal envelopes.' },
  installations: { title: 'Industrial installations', text: 'Durable protective wraps for cable and fluid lines in heavy-duty fixed installations.' },
  heat: { title: 'Heat', text: 'Layered constructions minimizing heat transfer while keeping routing compact and serviceable.' },
  electricity: { title: 'Electricity', text: 'Dielectric and arc-resistant sleeve systems for high-voltage assemblies and connectors.' },
  electromagnetic: { title: 'Electromagnetic', text: 'Conductive textile stacks reducing EMI noise and preserving signal integrity across modules.' },
  robotics: { title: 'Robotics', text: 'Flexible and abrasion-resistant sleeves for repetitive movement and complex robotic articulation.' }
};

const tabs = document.querySelectorAll('.industry-tab');
const panel = document.getElementById('industryPanel');
if (tabs.length && panel) {
  tabs.forEach((btn) => btn.addEventListener('click', () => {
    tabs.forEach((tab) => tab.classList.remove('active'));
    btn.classList.add('active');
    const { title, text } = industryData[btn.dataset.industry];
    panel.style.opacity = '0';
    setTimeout(() => {
      panel.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
      panel.style.opacity = '1';
    }, 120);
  }));
}

const form = document.getElementById('leadForm');
const success = document.getElementById('formSuccess');

if (form) {
  const phoneInput = form.querySelector('input[name="phone"]');
  phoneInput?.addEventListener('input', (e) => {
    const cleaned = e.target.value.replace(/[^\d+\s()-]/g, '');
    e.target.value = cleaned;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot.value.trim()) return;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.hidden = true;
    success.hidden = false;
  });
}

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('video').forEach((video) => video.pause());
}

document.querySelectorAll('video').forEach((video) => {
  video.addEventListener('error', () => {
    const poster = video.dataset.poster;
    if (poster) video.style.backgroundImage = `url(${poster})`;
  });
});
