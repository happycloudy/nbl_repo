import { animate } from './animate';


export const scrolling = (hash) => {
  if (!hash) return;
  const wind = window.pageYOffset;
  const hashTop = document.getElementById(hash).getBoundingClientRect().top;

  animate({
    duration: 1000,
    timing: (x) => ( x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
    draw: (progress) => {
      window.scrollTo(0, hashTop * progress + wind);
    }
  });
};

export const scroll = () => {
  const handleLinkClick = (event) => {
    scrolling(event.currentTarget.getAttribute('href').slice(1));
  };

  const hrefAll = document.querySelectorAll('[href^="#"]');
  hrefAll.forEach((elem) => elem.addEventListener('click', handleLinkClick));
};
