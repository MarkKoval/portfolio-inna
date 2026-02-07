export const calculateScrollPercent = () => {
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  return max <= 0 ? 0 : Math.min(100, Math.round((window.scrollY / max) * 100));
};
