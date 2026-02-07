export const scrollProgress = () => {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  if (max <= 0) return 0;
  return Math.min(100, Math.round((window.scrollY / max) * 100));
};
