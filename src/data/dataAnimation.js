const transitionLogin = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionDesktop = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

export const loginVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transitionLogin },
  exit: {
    scale: 0.5,
    opacity: 0,
    transitionLogin,
  },
};

export const desktopVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transitionDesktop },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 0.8, ...transitionDesktop },
  },
};
