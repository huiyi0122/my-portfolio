"use client";

import React from "react";

const Star: React.FC = () => {
  const style: React.CSSProperties = {
    top: `${Math.random() * 50 - 25}%`, // Start off-screen
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${Math.random() * 2 + 2}s`, // 2-4s duration
  };

  return <div className="shooting-star" style={style} />;
};

const ShootingStars: React.FC<{ count?: number }> = ({ count = 15 }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      <style>
        {`
          @keyframes shoot {
            0% {
              transform: translate(0, 0) rotate(-45deg);
              opacity: 1;
            }
            100% {
              transform: translate(-150vw, 150vh) rotate(-45deg);
              opacity: 0;
            }
          }

          .shooting-star {
            position: absolute;
            width: 2px;
            height: 120px;
            background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3));
            border-radius: 50%;
            animation: shoot 3s linear infinite;
            opacity: 0;
          }
        `}
      </style>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
};

export default ShootingStars;
