"use client";
import { useEffect, useRef } from "react";

interface Firefly {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  alphaSpeed: number;
}

export default function Fireflies() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fireflies: Firefly[] = [];
  const COUNT = 80; // 萤火虫数量

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 初始化萤火虫
    for (let i = 0; i < COUNT; i++) {
      fireflies.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        alpha: Math.random(),
        alphaSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let animationId: number;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      fireflies.forEach((f) => {
        // 移动
        f.x += f.speedX;
        f.y += f.speedY;

        // 超出边界反弹
        if (f.x < 0 || f.x > width) f.speedX *= -1;
        if (f.y < 0 || f.y > height) f.speedY *= -1;

        // 闪烁
        f.alpha += f.alphaSpeed;
        if (f.alpha > 1 || f.alpha < 0) f.alphaSpeed *= -1;

        // 绘制
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,200,${f.alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // 自适应屏幕
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
