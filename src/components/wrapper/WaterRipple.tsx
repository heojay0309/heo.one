"use client";

import { useEffect } from "react";

const WaterRipple: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      "rippleCanvas",
    ) as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const ripples: { x: number; y: number; radius: number; opacity: number }[] =
      [];

    const maxRadius = 50;
    const rippleSpeed = 0.5;
    const delayBetweenRipples = 200; // milliseconds

    const createRipple = (x: number, y: number) => {
      ripples.push({ x, y, radius: 0, opacity: 1 });
    };

    const drawRipple = (ripple: {
      x: number;
      y: number;
      radius: number;
      opacity: number;
    }) => {
      ctx.beginPath();
      ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
      ctx.strokeStyle = `rgba(122, 183, 255, ${ripple.opacity})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const update = () => {
      ctx.clearRect(0, 0, width, height);

      ripples.forEach((ripple, index) => {
        ripple.radius += rippleSpeed;
        ripple.opacity -= 0.01;

        if (ripple.opacity <= 0) {
          ripples.splice(index, 1);
        } else {
          drawRipple(ripple);
        }
      });

      requestAnimationFrame(update);
    };

    let lastMouseMoveTime = 0;
    const handleMouseMove = (event: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastMouseMoveTime > delayBetweenRipples) {
        createRipple(event.clientX, event.clientY);
        lastMouseMoveTime = currentTime;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    update();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas id="rippleCanvas"></canvas>;
};

export default WaterRipple;
