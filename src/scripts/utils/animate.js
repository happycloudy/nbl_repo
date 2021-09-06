export const animate = ({
  duration = 2000,
  timing = (timeFraction) => (timeFraction < 0 ? 0 : timeFraction),
  draw,
}) => {
  let ref = null;
  const start = performance.now();

  const animateFrame = (time) => {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    const progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      ref = requestAnimationFrame(animateFrame);
    } else {
      cancelAnimationFrame(ref);
    }
  };

  ref = requestAnimationFrame(animateFrame);
};
