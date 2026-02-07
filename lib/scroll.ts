export const getScrollProgress = () => {
  const top = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  return Math.round((top / max) * 100);
};
