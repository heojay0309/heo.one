"use client";
import { motion, useTransform, useTime, useSpring } from "motion/react";

const CustomAnimation = ({
  delay = 0,
  children,
}: {
  delay?: number;
  children: React.ReactNode;
}) => {
  const time = useTime();
  const delayedTime = useTransform(time, (t) => t - delay);
  const x = useTransform(delayedTime, (latest) => Math.cos(latest / 3000) * 30);
  const y = useTransform(delayedTime, (latest) => Math.sin(latest / 3000) * 30);
  const scale = useTransform(delayedTime, (latest) =>
    Math.abs(Math.cos(latest / 1000) * 1.5),
  );
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });
  const springScale = useSpring(scale, {
    stiffness: 50,
    damping: 20,
  });

  return (
    <motion.p
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
    </motion.p>
  );
};

export default CustomAnimation;
