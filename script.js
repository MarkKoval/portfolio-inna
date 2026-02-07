const industries = [
  { name: "Ovens", desc: "Thermal sleeves for chamber-to-control routing in high-cycle oven environments.", img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80" },
  { name: "Vitroceramics", desc: "Low outgassing insulation for precision heating and ceramic processing lines.", img: "https://images.unsplash.com/photo-1581092919535-7146ff1a590f?auto=format&fit=crop&w=1200&q=80" },
  { name: "Industrial installations", desc: "Abrasion-proof textile systems for routing, bundling and process continuity.", img: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80" },
  { name: "Heat", desc: "Engineered barriers designed for reflection, dissipation and sustained thermal stability.", img: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&w=1200&q=80" },
  { name: "Electricity", desc: "Dielectric and arc-safe coverings for high-voltage battery and powertrain architecture.", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80" },
  { name: "Electromagnetic", desc: "Shielding constructions reducing EMI in dense cable harnesses and connectors.", img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80" },
  { name: "Robotics", desc: "Flexible, low-weight sleeves for moving axes, repetitive motion and compact integrations.", img: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=1200&q=80" }
];

const tabsRoot = document.getElementById("industryTabs");
const panel = document.getElementById("industryPanel");
if (tabsRoot && panel) {
  industries.forEach((item, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = item.name;
    btn.className = index === 0 ? "active" : "";
    btn.addEventListener("click", () => renderIndustry(index));
    li.appendChild(btn);
    tabsRoot.appendChild(li);
  });
  const renderIndustry = (index) => {
    [...tabsRoot.querySelectorAll("button")].forEach((b, i) => b.classList.toggle("active", i === index));
    panel.style.opacity = "0.4";
    setTimeout(() => {
      panel.innerHTML = `<img src="${industries[index].img}" alt="${industries[index].name}"/><h3>${industries[index].name}</h3><p>${industries[index].desc}</p>`;
      panel.style.opacity = "1";
    }, 120);
  };
  renderIndustry(0);
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduceMotion) {
  document.querySelectorAll("video").forEach((video) => video.pause());
}

const scrollPercent = document.getElementById("scrollPercent");
const scrollBar = document.getElementById("scrollBar");
const onScroll = () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const pct = height > 0 ? Math.round((scrollTop / height) * 100) : 0;
  if (scrollPercent) scrollPercent.textContent = `${pct}%`;
  if (scrollBar) scrollBar.style.width = `${pct}%`;
};
window.addEventListener("scroll", onScroll);
onScroll();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const modal = document.getElementById("leadModal");
const openButtons = document.querySelectorAll(".open-lead");
const closeBtn = document.getElementById("closeModal");
const nextBtn = document.getElementById("nextStep");
const prevBtn = document.getElementById("prevStep");
const steps = [...document.querySelectorAll(".step")];
const form = document.getElementById("leadForm");
let currentStep = 0;

const setStep = (idx) => {
  steps.forEach((step, i) => step.classList.toggle("active", i === idx));
  const isLast = idx === steps.length - 1;
  prevBtn.style.visibility = idx > 0 && !isLast ? "visible" : "hidden";
  nextBtn.textContent = isLast ? "Close" : idx === steps.length - 2 ? "Submit" : "Next";
  currentStep = idx;
};
setStep(0);

openButtons.forEach((b) => b.addEventListener("click", () => {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}));

const closeModal = () => {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  form.reset();
  setStep(0);
};
closeBtn?.addEventListener("click", closeModal);
modal?.addEventListener("click", (e) => e.target === modal && closeModal());

const validateStep = () => {
  const current = steps[currentStep];
  const fields = [...current.querySelectorAll("input,textarea")].filter((f) => !f.classList.contains("honeypot"));
  for (const field of fields) {
    if (!field.checkValidity()) {
      field.reportValidity();
      return false;
    }
  }
  return true;
};

nextBtn?.addEventListener("click", () => {
  if (currentStep === steps.length - 1) return closeModal();
  if (!validateStep()) return;
  if (currentStep === steps.length - 2) {
    if (form.website.value) return closeModal();
  }
  setStep(Math.min(currentStep + 1, steps.length - 1));
});
prevBtn?.addEventListener("click", () => setStep(Math.max(currentStep - 1, 0)));

form?.addEventListener("input", (e) => {
  if (e.target.name === "phone") {
    e.target.value = e.target.value.replace(/[^\d+()\-\s]/g, "").slice(0, 24);
  }
});
