"use client";
import {
  motion,
  useTransform,
  delay,
  useTime,
  useSpring,
  MotionValue,
} from "motion/react";
import { useState, useEffect } from "react";

const CustomAnimation = ({
  delay,
  rowIndex,
  charIndex,
  children,
}: {
  delay: number;
  rowIndex: number;
  charIndex: number;
  children: React.ReactNode;
}) => {
  const time = useTime();
  const delayedTime = useTransform(time, (t) => t - delay);
  const x = useTransform(delayedTime, (latest) => Math.cos(latest / 500) * 20);
  const y = useTransform(delayedTime, (latest) => Math.sin(latest / 1000) * 5);
  const scale = useTransform(delayedTime, (latest) =>
    Math.abs(Math.cos(latest / 800)),
  );
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });
  const springScale = useSpring(scale, {
    stiffness: 50,
    damping: 20,
  });

  return (
    <motion.div
      style={{
        x: springX || 0,
        y: springY || 0,
        scale: springScale || 0,
      }}
      animate={{
        scale: 1,
        transition: {
          delay: 0.05,
          duration: 0.5,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default CustomAnimation;
