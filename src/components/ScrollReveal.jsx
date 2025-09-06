import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ScrollReveal({ children, className = "" }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0, // Trigger as soon as a part is visible
    triggerOnce: false,
  });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1], // Standard smooth ease-in-out
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}
