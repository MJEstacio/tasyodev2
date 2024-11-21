import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

export function Reveal({ children, className, x, y }) {
  const ref = useRef();
  const isView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  useEffect(
    function () {
      if (isView) {
        mainControls.start("visible");
      }
    },
    [isView],
  );

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: x ? x : 0, y: y ? y : 0 },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delayChildren: 0.5, staggerChildren: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
