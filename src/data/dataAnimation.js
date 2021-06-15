const transitionLogin = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionDesktop = { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] };

export const loginVariants = {
  initial: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: transitionLogin,
  },
};

export const desktopVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition: transitionDesktop },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 5, ...transitionDesktop },
  },
};
