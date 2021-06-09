import { motion } from "framer-motion";
import UnidigitalLogo from "../assets/img/unidigital_logo.png";

const LogoSvg = ({ widthProp }) => {
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
  const pathVariants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#D97D2F",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const imgVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition,
    },
  };
  return (
    <>
      <svg
        id="logo_uno"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -20 170.5 200"
        style={{ width: widthProp }}
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M69.8,56.5c0,12.3,0.3,24.6-0.1,36.8c-0.2,6.9,6.5,12.2,11.8,12.5
c6.1,0.3,11.4-4.3,12.3-11c0.2-1.7,0.3-3.5,0.3-5.2c0-23.4,0.1-46.8-0.1-70.3c0-3.5,1.1-4.3,4.4-4.3c16.3,0.2,32.7,0.1,49.1,0
c2.8,0,3.9,0.5,3.9,3.6c-0.2,14.6-0.1,29.3,0,43.8c0,2.4-0.8,4.3-2.2,6.2c-17.4,24.6-40.9,40.1-70.3,46.7
c-19.9,4.4-39.8,3.4-59.6-0.7c-2.1-0.4-3.1-1.8-3.9-3.5c-1.8-4-2.7-8.3-2.7-12.6c-0.1-26.8,0-53.6-0.1-80.3c0-2.6,0.7-3.3,3.3-3.3
c16.9,0.1,33.7,0.1,50.6,0c2.9,0,3.5,0.8,3.5,3.6C69.7,31.2,69.8,43.8,69.8,56.5z"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M157.6,61.9c2.5,5.1,2.2,9.6,1.1,14c-2.4,9.3-8.1,16.6-14.4,23.5
c-5.3,5.8-11.3,10.9-17.3,15.9c8.8-4,16.9-9.3,24.3-15.9c2.7,20.7-22.1,52.8-47,61.4c-25.6,8.8-62-1.3-73.7-20.9
c9.8,0.9,19.4,0.4,29.2-1.7c-1.8-1.1-3.4-0.9-5-0.9c-1.7-0.1-3.5-0.2-5.2-0.3c-10.4-0.7-20.7-1.9-30.1-6.8c-3.8-2-7.2-4.3-9.3-8.3
c-0.6-1-1.1-2.3-0.6-3.2c0.7-1.1,2-0.1,3,0.1c36.6,9.1,71.7,5.7,104.8-12.6c14.4-8,25.5-19.9,35-33.2C154.8,70,156,66.3,157.6,61.9z"
        />
      </svg>
      <motion.img
        variants={imgVariants}
        initial="hidden"
        animate="visible"
        src={UnidigitalLogo}
        alt="Unidigital"
        className="logo-login ms-2 mt-2"
      />
    </>
  );
};

export default LogoSvg;
