"use client";

import React from "react";

const Firefly: React.FC<{
  index: number;
  minSpeed: number;
  maxSpeed: number;
}> = ({ index, minSpeed, maxSpeed }) => {
  const top = `${Math.random() * 100}%`;
  const left = `${Math.random() * 100}%`;
  const speedRange = maxSpeed - minSpeed;
  const animationDuration = `${Math.random() * speedRange + minSpeed}s`;
  const animationDelay = `${Math.random() * 10}s`; // 0-10s

  const style: React.CSSProperties = {
    top,
    left,
    animationDuration,
    animationDelay,
    animationName: `fly`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  };

  return (
    <div
      className="absolute w-1 h-1 bg-emerald-300 rounded-full shadow-[0_0_8px_2px_rgba(110,231,183,0.7)]"
      style={style}
    />
  );
};

const Fireflies: React.FC<{
  count?: number;
  minSpeed?: number;
  maxSpeed?: number;
}> = ({ count = 25, minSpeed = 5, maxSpeed = 10 }) => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <style>
        {`
          @keyframes fly {
            0% { transform: translate(0, 0); opacity: 0.8; }
            25% { transform: translate(${Math.random() * 100 - 50}vw, ${
          Math.random() * 100 - 50
        }vh); opacity: 0.3; }
            50% { transform: translate(${Math.random() * 100 - 50}vw, ${
          Math.random() * 100 - 50
        }vh); opacity: 1; }
            75% { transform: translate(${Math.random() * 100 - 50}vw, ${
          Math.random() * 100 - 50
        }vh); opacity: 0.5; }
            100% { transform: translate(0, 0); opacity: 0.8; }
          }
        `}
      </style>
      {Array.from({ length: count }).map((_, i) => (
        <Firefly key={i} index={i} minSpeed={minSpeed} maxSpeed={maxSpeed} />
      ))}
    </div>
  );
};

export default Fireflies;
