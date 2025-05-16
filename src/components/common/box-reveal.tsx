"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { JSX, useEffect, useRef } from "react";

interface BoxRevealProps {
  children: JSX.Element;
  className?: string;
  width?: "fit-content" | "100%";
  duration?: number;
  direction?: "top" | "bottom";
}

export const BoxReveal = ({
  children,
  className,
  width = "fit-content",
  duration,
  direction = "bottom",
}: BoxRevealProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  var cy = 75;

  if (direction === "bottom") {
    cy = 75;
  } else if (direction === "top") {
    cy = -75;
  }

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: cy },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration ? duration : 0.5, delay: 0.25 }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};
