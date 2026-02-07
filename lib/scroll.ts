export const getScrollProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  return Math.min(100, Math.max(0, Math.round((window.scrollY / max) * 100)));
};
